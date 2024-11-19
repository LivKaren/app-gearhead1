import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase'; // Certifique-se de ter configurado o Firebase corretamente

export default function VerCadastrosAdm() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contas, setContas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar dados do Firebase
  const getEnterprises = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'usuarios'));
      const fetchedContas = [];
      querySnapshot.forEach((doc) => {
        fetchedContas.push({
          id: doc.id, // ID único do documento
          ...doc.data(), // Dados do documento
        });
      });
      setContas(fetchedContas);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados do Firebase:', error);
    }
  };

  useEffect(() => {
    getEnterprises();
  }, []);

  // Filtrar contas com base na pesquisa
  const filteredContas = contas.filter(
    (conta) =>
      conta.nome?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conta.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conta.cpf?.includes(searchQuery)
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text>Email: {item.email}</Text>
      <Text>CPF: {item.cpf}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ver Cadastros de Contas</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar por nome, email ou CPF"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={filteredContas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
