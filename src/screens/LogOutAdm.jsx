import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LogOutAdm() {
  const navigation = useNavigation();

  const handleLogOut = () => {
    navigation.navigate('cadastrar empresa'); // Navega para a tela de Cadastrar Empresa
  };

  return (
    <View style={styles.containerLogOut}>
      <Text style={styles.textLogOut}>Deseja fazer LogOut?</Text>
      <TouchableOpacity style={styles.buttonLogOut} onPress={handleLogOut}>
        <Text style={styles.buttonTextLogOut}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogOut: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  textLogOut: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonLogOut: {
    backgroundColor: 'rgb(139,0,0)',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonTextLogOut: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
