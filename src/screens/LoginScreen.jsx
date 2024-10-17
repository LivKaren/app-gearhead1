import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    alert('Login realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo de volta! Faça login para continuar.</Text>

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

      {/* Botão de Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Texto para ir ao Cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.registerText}>Não tem uma conta? Crie uma agora</Text>
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
  registerText: {
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
