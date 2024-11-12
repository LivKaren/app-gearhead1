import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'; // ajuste o caminho se necessário

export default function LoginScreen() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      // Tenta autenticar o usuário com o Firebase
      await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert("Login bem-sucedido!");
      navigation.navigate('HomeScreen'); // Redireciona para a HomeScreen
    } catch (error) {
      const errorMessage = 
        error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'
          ? 'Usuário não encontrado ou senha incorreta. Verifique suas credenciais ou crie uma nova conta.'
          : 'Erro ao fazer login: ' + error.message;
      Alert.alert(errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      {/* Título "Bem-vindo de volta!" */}
      <Text style={styles.titleText}>Bem-vindo de volta!</Text>

      {/* Subtítulo */}
      <Text style={styles.welcomeText}>Faça login para continuar.</Text>

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
        source={{ uri: 'https://media.istockphoto.com/id/1353185042/pt/vetorial/professional-automobile-maintenance-and-service-application-car-repair-app-concept.jpg?s=612x612&w=0&k=20&c=X6mmIvVj0UisWOPsq99xmmg8cQGVlg5MCm9debPnupE=' }}
        style={styles.carImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e6594a',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  titleText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
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
    backgroundColor: 'rgb(139,0,0)',
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
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
    maxWidth: '%60',
    alignSelf: 'center',
  },
  carImage: {
    width: '100%',
    height: 340,
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});
