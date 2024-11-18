import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notificacoes = [
  { id: '1', titulo: 'Promoção Especial', descricao: 'Descontos em serviços de mecânica.' },
  { id: '2', titulo: 'Serviço Aprovado', descricao: 'Seu serviço foi aprovado pela oficina.' },
  { id: '3', titulo: 'Novo Serviço Disponível', descricao: 'Confira os novos serviços em destaque.' },
  { id: '4', titulo: 'Atualização de App', descricao: 'Nova versão do aplicativo disponível.' },
];

const NotificacoesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notificações</Text>
      <FlatList
        data={notificacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificacaoContainer}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'rgb(139,0,0)',
    textAlign: 'center',
  },
  notificacaoContainer: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(139,0,0)',
  },
  descricao: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificacoesScreen;
