import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importando a biblioteca de ícones

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('cliente'); // 'cliente' ou 'administrador'
  const [nomeMecanica, setNomeMecanica] = useState('');
  const [telefoneMecanica, setTelefoneMecanica] = useState('');

  const handleRegister = () => {
    // Lógica de cadastro aqui
    Alert.alert('Cadastro realizado com sucesso!');
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Cadastrar</Text>

      {/* Campo de Nome */}
      <Text style={styles.welcomeText}>Por favor, crie sua conta para se associar a nós!</Text>
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

      {/* Opção de tipo de usuário */}
      <Text style={styles.optionText}>Escolha o tipo de usuário:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setTipoUsuario('cliente')} style={styles.radioButton}>
          <View style={styles.radioContent}>
            <Icon name="person" size={24} color={tipoUsuario === 'cliente' ? 'rgb(139,0,0)' : 'lightgray'} />
            <Text style={tipoUsuario === 'cliente' ? styles.selectedText : styles.unselectedText}>Cliente</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTipoUsuario('administrador')} style={styles.radioButton}>
          <View style={styles.radioContent}>
            <Icon name="build" size={24} color={tipoUsuario === 'administrador' ? 'rgb(139,0,0)' : 'lightgray'} />
            <Text style={tipoUsuario === 'administrador' ? styles.selectedText : styles.unselectedText}>Administrador</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Campos adicionais para Administrador */}
      {tipoUsuario === 'administrador' && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nome da Mecânica"
            placeholderTextColor="gray"
            value={nomeMecanica}
            onChangeText={setNomeMecanica}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone da Mecânica"
            placeholderTextColor="gray"
            value={telefoneMecanica}
            onChangeText={setTelefoneMecanica}
            keyboardType="phone-pad"
          />
        </>
      )}

      {/* Botão Continuar */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      {/* Texto para ir ao Login */}
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
  loginText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioButton: {
    padding: 10,
    alignItems: 'center',
  },
  radioContent: {
    flexDirection: 'row', // Alinhando o ícone e o texto na horizontal
    alignItems: 'center', // Centralizando verticalmente
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5, // Espaçamento entre ícone e texto
  },
  unselectedText: {
    color: 'lightgray',
    marginLeft: 5, // Espaçamento entre ícone e texto
  },
  
});
