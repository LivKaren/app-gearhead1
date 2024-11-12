import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';

function getEnterprises(){
  
}


const contas = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    telefone: '(+55) 11 98765-4321',
    cep: '01234-567',
  },
  {
    id: '2',
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@example.com',
    telefone: '(+55) 21 99876-5432',
    cep: '23456-789',
  },
  {
    id: '3',
    nome: 'Carlos Pereira',
    email: 'carlos.pereira@example.com',
    telefone: '(+55) 31 91234-5678',
    cep: '34567-890',
  },
  {
    id: '4',
    nome: 'Ana Costa',
    email: 'ana.costa@example.com',
    telefone: '(+55) 41 99888-1234',
    cep: '45678-901',
  },
];

export default function VerCadastrosAdm() {
  const [searchQuery, setSearchQuery] = useState('');

  // Função para filtrar as contas com base na pesquisa
  const filteredContas = contas.filter(
    (conta) =>
      conta.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conta.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conta.telefone.includes(searchQuery)
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Telefone: {item.telefone}</Text>
      <Text>CEP: {item.cep}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ver Cadastros de Contas</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar por nome ou email ou telefone"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredContas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
