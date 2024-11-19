import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, collection } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [errors, setErrors] = useState({});

  // Função para formatar CPF enquanto o usuário digita
  const formatarCPF = (texto) => {
    texto = texto.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (texto.length > 11) texto = texto.slice(0, 11); // Limita a 11 dígitos
    return texto
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen
  };

  const validateForm = () => {
    const newErrors = {};

    if (!nome || nome.length < 4) {
      newErrors.nome = "O nome deve conter pelo menos 4 caracteres.";
    }
    if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = "Por favor, insira um email válido.";
    }
    if (cpf.length !== 14) { // CPF formatado deve ter 14 caracteres
      newErrors.cpf = "Por favor, insira um CPF válido.";
    }
    if (senha.length < 6) {
      newErrors.senha = "A senha deve ter pelo menos 6 caracteres.";
    }
    if (senha !== confirmarSenha) {
      newErrors.confirmarSenha = "As senhas não coincidem.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      const collectionRef = collection(db, 'usuarios');
      await setDoc(doc(collectionRef, user.uid), {
        nome,
        email,
        cpf,
        tipoUsuario: 'cliente', // Define o tipo de usuário fixo como "cliente"
      });

      Alert.alert('Cadastro realizado com sucesso!');
      navigation.navigate('HomeScreen');
    } catch (error) {
      const errorMessage = error.code === 'auth/email-already-in-use'
        ? 'Email já está cadastrado.'
        : 'Erro ao cadastrar usuário: ' + error.message;
      Alert.alert(errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Cadastrar</Text>
      <Text style={styles.welcomeText}>Por favor, crie sua conta para se associar a nós!</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="gray"
        value={nome}
        onChangeText={(text) => { setNome(text); setErrors(prev => ({ ...prev, nome: null })); }}
      />
      {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="gray"
        value={email}
        onChangeText={(text) => { setEmail(text); setErrors(prev => ({ ...prev, email: null })); }}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="gray"
        value={cpf}
        onChangeText={(text) => { setCpf(formatarCPF(text)); setErrors(prev => ({ ...prev, cpf: null })); }}
        keyboardType="numeric"
      />
      {errors.cpf && <Text style={styles.errorText}>{errors.cpf}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="gray"
        value={senha}
        onChangeText={(text) => { setSenha(text); setErrors(prev => ({ ...prev, senha: null })); }}
        secureTextEntry
      />
      {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="gray"
        value={confirmarSenha}
        onChangeText={(text) => { setConfirmarSenha(text); setErrors(prev => ({ ...prev, confirmarSenha: null })); }}
        secureTextEntry
      />
      {errors.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Já tem uma conta? Faça Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6594a',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 40,
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
  loginText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'yellow',
    fontSize: 14,
    marginBottom: 10,
  },
});
