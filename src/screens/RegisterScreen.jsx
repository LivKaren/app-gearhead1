import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const navigation = useNavigation();
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleRegister = () => {
    // Lógica de cadastro aqui
    alert('Conta criada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem vindo, por favor crie sua conta para se associar a nós!</Text>

      {/* Campo de Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="gray"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo de E-mail */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="gray"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="gray"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {/* Campo de Confirmar Senha */}
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="gray"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      {/* Botão Continuar */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      {/* Texto para ir ao Login */}
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Já tem uma conta? Faça Login</Text>
      </TouchableOpacity>

      {/* Imagem de carro */}
      <Image
        source={{ uri: 'https://www.linkparaimagemdecarro.com/carro.png' }} // Substitua pelo link real da imagem
        style={styles.carImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(139,0,0)', // Cor vermelha
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#F2F2F2',
  },
  button: {
    backgroundColor: 'rgb(139,0,0)', // Cor vermelha para o botão
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});
