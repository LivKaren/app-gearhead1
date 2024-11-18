import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'; // ajuste o caminho se necessário

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    let valid = true;

    // Validação do campo de e-mail
    if (email === '') {
      setEmailError('O campo de e-mail é obrigatório.');
      valid = false;
    } else {
      setEmailError('');
    }

    // Validação do campo de senha
    if (senha === '') {
      setSenhaError('O campo de senha é obrigatório.');
      valid = false;
    } else {
      setSenhaError('');
    }

    if (!valid) return;

    try {
      // Verifica se o usuário é o administrador
      if (email === 'admin@gmail.com' && senha === '123456') {
        Alert.alert('Bem-vindo, administrador!');
        navigation.navigate('AdminDrawerNavigator'); // Rota do administrador (ajuste o nome conforme sua navegação)
        return;
      }

      // Tenta autenticar o usuário no Firebase
      await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert('Login bem-sucedido!');
      setLoginError('');
      navigation.navigate('HomeScreen'); // Redireciona para a HomeScreen após login bem-sucedido
    } catch (error) {
      // Trata os erros específicos do Firebase
      if (error.code === 'auth/user-not-found') {
        setLoginError('Não existe uma conta com estas credenciais.');
      } else if (error.code === 'auth/wrong-password') {
        setLoginError('Senha incorreta. Verifique suas credenciais.');
      } else {
        setLoginError('Cheque se as credenciais estão corretas');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Bem-vindo de volta!</Text>
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
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="gray"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {senhaError ? <Text style={styles.errorText}>{senhaError}</Text> : null}

      {/* Exibição de erro de login */}
      {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}

      {/* Botão de Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para a tela de registro */}
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.registerText}>Não tem uma conta? Crie uma agora</Text>
      </TouchableOpacity>

      {/* Imagem do carro */}
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
    marginBottom: 5,
    fontSize: 16,
    backgroundColor: '#F2F2F2',
  },
  errorText: {
    color: 'yellow',
    fontSize: 14,
    marginBottom: 10,
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
    maxWidth: '60%',
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
