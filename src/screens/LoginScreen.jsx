import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    navigation.navigate('HomeScreen'); // Redireciona para a HomeScreen
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
        source={{ uri: 'https://media.istockphoto.com/id/1353185042/pt/vetorial/professional-automobile-maintenance-and-service-application-car-repair-app-concept.jpg?s=612x612&w=0&k=20&c=X6mmIvVj0UisWOPsq99xmmg8cQGVlg5MCm9debPnupE=' }} // Substitua pelo link real da imagem
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
    justifyContent: 'flex-start', // Alinha o conteúdo para o topo
  },
  titleText: {
    fontSize: 42, // Tamanho grande para o título
    fontWeight: 'bold',
    color: 'white', // Cor branca para destaque
    marginBottom: 20, // Espaço abaixo do título
    textAlign: 'center',
    marginTop: 50, // Adiciona um espaço no topo para o título
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50, // Aumentando o espaço abaixo do subtítulo
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
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: 340, // Mantendo a imagem menor
    resizeMode: 'cover', // Faz a imagem cobrir toda a área disponível
    position: 'absolute',
    bottom: 10, // Posiciona a imagem no inferior da tela
    alignSelf: 'center',
  },
});
