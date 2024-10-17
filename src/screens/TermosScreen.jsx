import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function TermosScreen() {
  const [aceitouTermos, setAceitouTermos] = useState(false);

  const aceitarTermos = () => {
    setAceitouTermos(true);
    Alert.alert('Termos aceitos!', 'Você aceitou os termos e condições.');
  };

  return (
    <View style={styles.container}>
      {/* ScrollView para termos longos */}
      <ScrollView style={styles.termosContainer}>
        <Text style={styles.title}>Termos e Condições</Text>

        <Text style={styles.text}>
          Bem-vindo ao nosso aplicativo! Estes termos e condições descrevem as regras e regulamentos para o uso do nosso serviço.
        </Text>

        <Text style={styles.subtitle}>1. Aceitação dos Termos</Text>
        <Text style={styles.text}>
          Ao acessar e utilizar o nosso aplicativo, você concorda em cumprir e estar vinculado aos termos e condições estabelecidos neste documento.
        </Text>

        <Text style={styles.subtitle}>2. Modificações nos Termos</Text>
        <Text style={styles.text}>
          Reservamos o direito de modificar ou substituir estes termos a qualquer momento. Seu uso contínuo do aplicativo após tais modificações constitui aceitação dos novos termos.
        </Text>

        <Text style={styles.subtitle}>3. Responsabilidades do Usuário</Text>
        <Text style={styles.text}>
          O usuário é responsável por manter suas informações de conta seguras e por qualquer atividade que ocorra sob sua conta.
        </Text>

        <Text style={styles.subtitle}>4. Política de Privacidade</Text>
        <Text style={styles.text}>
          Nós nos comprometemos a proteger sua privacidade. Todas as informações coletadas de você são usadas apenas conforme estabelecido em nossa política de privacidade.
        </Text>

        <Text style={styles.subtitle}>5. Limitação de Responsabilidade</Text>
        <Text style={styles.text}>
          Não nos responsabilizamos por quaisquer danos diretos, indiretos, acidentais ou consequentes resultantes do uso ou da incapacidade de usar nosso aplicativo.
        </Text>

        <Text style={styles.subtitle}>6. Rescisão</Text>
        <Text style={styles.text}>
          Podemos encerrar ou suspender sua conta imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos.
        </Text>

        <Text style={styles.subtitle}>7. Contato</Text>
        <Text style={styles.text}>
          Se você tiver dúvidas sobre estes termos e condições, entre em contato conosco através do suporte@example.com.
        </Text>
      </ScrollView>

      {/* Botão para aceitar os termos */}
      <TouchableOpacity style={styles.button} onPress={aceitarTermos}>
        <Text style={styles.buttonText}>
          {aceitouTermos ? 'Termos Aceitos!' : 'Aceitar Termos'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  termosContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'rgb(139,0,0)', // Cor do título
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
    color: 'gray',
  },
  button: {
    backgroundColor: 'rgb(139,0,0)', // Cor do botão
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
