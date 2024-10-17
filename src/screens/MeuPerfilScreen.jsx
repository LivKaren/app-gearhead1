import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker'; // Para permitir a escolha de imagem

export default function MeuPerfilScreen() {
  const [nome, setNome] = useState('Seu Nome'); // Nome inicial
  const [email, setEmail] = useState('seuemail@example.com'); // Email inicial
  const [fotoPerfil, setFotoPerfil] = useState(null); // Foto de perfil

  // Função para editar a foto de perfil
  const editarFotoPerfil = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setFotoPerfil(result.assets[0].uri);
    }
  };

  // Função para salvar as alterações
  const salvarAlteracoes = () => {
    // Aqui você pode adicionar a lógica para salvar os dados no backend ou localmente
    Alert.alert('Alterações salvas com sucesso!', `Nome: ${nome}\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
      {/* Área da Foto de Perfil */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={
              fotoPerfil
                ? { uri: fotoPerfil }
                : { uri: 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg' } // Imagem padrão de link
            }
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIcon} onPress={editarFotoPerfil}>
            <Icon name="photo-camera" size={25} color="white" />
          </TouchableOpacity>
        </View>

        {/* Nome e Email */}
        <Text style={styles.profileName}>{nome}</Text>
        <Text style={styles.profileEmail}>{email}</Text>
      </View>

      {/* Área de Edição */}
      <View style={styles.editSection}>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Editar Nome"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Editar Email"
          keyboardType="email-address"
        />
      </View>

      {/* Botão de Salvar Alterações */}
      <TouchableOpacity style={styles.saveButton} onPress={salvarAlteracoes}>
        <Text style={styles.saveButtonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Círculo perfeito
    borderWidth: 3,
    borderColor: 'rgb(139,0,0)', // Borda vermelha
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgb(139,0,0)', // Cor de fundo do ícone
    padding: 5,
    borderRadius: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  editSection: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 10,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: 'rgb(139,0,0)', // Cor do botão
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
