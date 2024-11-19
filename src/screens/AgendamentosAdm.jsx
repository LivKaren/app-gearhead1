import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../config/firebase'; // Substitua pelo caminho correto do arquivo de configuração Firebase

export default function VerAgendamentos() {
  const [veiculos, setVeiculos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [contas, setContas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEnterprises = async () => {
      try {
        const db = getFirestore(app);
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

    getEnterprises();
    const fetchAgendamentos = async () => {
      try {
        const db = getFirestore(app);
        const agendamentosCollection = collection(db, 'agendamentos');
        const agendamentosSnapshot = await getDocs(agendamentosCollection);
        const agendamentosData = agendamentosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVeiculos(agendamentosData);
      } catch (error) {
        console.error('Erro ao buscar agendamentos: ', error);
      }
    };

    fetchAgendamentos();
  }, []);

  // Filtrar veículos com base na pesquisa
  const filteredVeiculos = veiculos.filter(
    (veiculo) =>
      veiculo.carModel?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      veiculo.mechanic?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      veiculo.mechanic?.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.modelo}>{item.carModel || 'Sem modelo'}</Text>
      <Text>Oficina: {item.mechanic?.name || 'Sem informação'}</Text>
      <Text>Localização: {item.mechanic?.location || 'Sem localização'}</Text>
      <Text>Horário: {item.mechanic?.hours || 'Sem horário'}</Text>
      <Text>Data Selecionada: {item.selectedDate || 'Sem data'}</Text>
      <Text>Telefone: {item.mechanic?.phone || 'Sem telefone'}</Text>
      <Text>nome: {item.nome || 'Sem nome'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ver Agendamentos</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar por modelo, oficina ou localização"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredVeiculos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
  modelo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
