import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function PrivacidadeScreen() {
  const [aceitouPrivacidade, setAceitouPrivacidade] = useState(false);

  const aceitarPrivacidade = () => {
    setAceitouPrivacidade(true);
    Alert.alert('Política de Privacidade aceita!', 'Você aceitou a política de privacidade.');
  };

  return (
    <View style={styles.container}>
      {/* ScrollView para exibir a política de privacidade */}
      <ScrollView style={styles.privacidadeContainer}>
        <Text style={styles.title}>Política de Privacidade</Text>

        <Text style={styles.text}>
          Nós valorizamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos suas informações.
        </Text>

        <Text style={styles.subtitle}>1. Coleta de Informações</Text>
        <Text style={styles.text}>
          Coletamos informações pessoais que você nos fornece diretamente ao usar nosso aplicativo, como nome, endereço de e-mail, e informações do dispositivo.
        </Text>

        <Text style={styles.subtitle}>2. Uso das Informações</Text>
        <Text style={styles.text}>
          As informações que coletamos são usadas para fornecer, manter e melhorar nossos serviços, além de personalizar a experiência do usuário.
        </Text>

        <Text style={styles.subtitle}>3. Compartilhamento de Dados</Text>
        <Text style={styles.text}>
          Nós não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou para proteger nossos direitos.
        </Text>

        <Text style={styles.subtitle}>4. Armazenamento de Dados</Text>
        <Text style={styles.text}>
          Mantemos suas informações por quanto tempo for necessário para cumprir os objetivos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
        </Text>

        <Text style={styles.subtitle}>5. Segurança das Informações</Text>
        <Text style={styles.text}>
          Implementamos medidas de segurança para proteger suas informações pessoais. No entanto, lembre-se de que nenhum sistema é completamente seguro.
        </Text>

        <Text style={styles.subtitle}>6. Seus Direitos</Text>
        <Text style={styles.text}>
          Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento, entrando em contato conosco.
        </Text>

        <Text style={styles.subtitle}>7. Alterações nesta Política</Text>
        <Text style={styles.text}>
          Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.
        </Text>

        <Text style={styles.subtitle}>8. Contato</Text>
        <Text style={styles.text}>
          Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco pelo suporte@example.com.
        </Text>
      </ScrollView>

      {/* Botão para aceitar a política de privacidade */}
      <TouchableOpacity style={styles.button} onPress={aceitarPrivacidade}>
        <Text style={styles.buttonText}>
          {aceitouPrivacidade ? 'Política de Privacidade Aceita!' : 'Aceitar Política de Privacidade'}
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
  privacidadeContainer: {
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
