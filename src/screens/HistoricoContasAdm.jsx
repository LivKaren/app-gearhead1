import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistoricoAdm() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Históricos de Suporte</Text>
      <Text style={styles.maintenanceText}>
        Estamos em <Text style={styles.boldText}>manutenção</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  maintenanceText: {
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
