import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function CadastrarEmpresa() {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);  // Novo estado para controle de sucesso do cadastro

  const handleCadastro = async () => {
    if (nomeEmpresa.length < 4) {
      Alert.alert('Erro', 'O nome da empresa deve ter pelo menos 4 letras.');
      return;
    }

    try {
      const colecao = collection(db, "empresas");
      await addDoc(colecao, {
        nomeEmpresa,
        cep,
        telefone,
      });

      setCadastroSucesso(true);  // Define sucesso após cadastro bem-sucedido
      Alert.alert('Sucesso', 'Empresa cadastrada com sucesso!');
    } catch (error) {
      console.error("Erro ao cadastrar empresa:", error);
      Alert.alert('Erro', 'Não foi possível cadastrar a empresa.');
    }
  };

  const formatarTelefone = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.length <= 2) return cleanValue;
    if (cleanValue.length <= 6) return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2)}`;
    return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 7)}-${cleanValue.slice(7, 11)}`;
  };

  const handleTelefoneChange = (text) => {
    setTelefone(formatarTelefone(text));
  };

  const formatarCep = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.length <= 5) return cleanValue;
    return `${cleanValue.slice(0, 5)}-${cleanValue.slice(5, 8)}`;
  };

  const handleCepChange = (text) => {
    setCep(formatarCep(text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Empresa</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Empresa"
        value={nomeEmpresa}
        onChangeText={setNomeEmpresa}
      />
      {nomeEmpresa.length > 0 && nomeEmpresa.length < 4 && (
        <Text style={styles.errorText}>O nome da empresa deve ter pelo menos 4 letras.</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={handleCepChange}
        keyboardType="numeric"
        maxLength={10}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={handleTelefoneChange}
        keyboardType="phone-pad"
        maxLength={15}
      />

      <Button title="Cadastrar" color="rgb(139,0,0)" onPress={handleCadastro} />

      {/* Exibe a mensagem de sucesso quando o cadastro for realizado */}
      {cadastroSucesso && (
        <Text style={styles.successText}>Cadastro feito com sucesso!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  successText: {
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
