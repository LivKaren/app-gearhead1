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
          Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso aplicativo para agendar horários em nossa mecânica.
        </Text>

        <Text style={styles.subtitle}>1. Informações Coletadas</Text>
        <Text style={styles.text}>
          Coletamos as seguintes informações quando você se cadastra e utiliza nosso aplicativo:
          {'\n'}- Nome
          {'\n'}- E-mail
          {'\n'}- Senha
          {'\n'}- CPF
          {'\n'}- Placa do carro
        </Text>

        <Text style={styles.subtitle}>2. Uso das Informações</Text>
        <Text style={styles.text}>
          As informações que coletamos são utilizadas para:
          {'\n'}- Criar e gerenciar sua conta.
          {'\n'}- Processar agendamentos e notificações.
          {'\n'}- Melhorar nossos serviços e a experiência do usuário.
          {'\n'}- Cumprir obrigações legais.
        </Text>

        <Text style={styles.subtitle}>3. Compartilhamento de Informações</Text>
        <Text style={styles.text}>
          Não compartilhamos suas informações pessoais com terceiros, exceto:
          {'\n'}- Quando necessário para cumprir obrigações legais.
          {'\n'}- Com prestadores de serviços que auxiliam na operação do aplicativo, sob rigoroso controle e confidencialidade.
        </Text>

        <Text style={styles.subtitle}>4. Proteção de Dados</Text>
        <Text style={styles.text}>
          Tomamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, uso ou divulgação.
        </Text>

        <Text style={styles.subtitle}>5. Seus Direitos</Text>
        <Text style={styles.text}>
          Você tem o direito de:
          {'\n'}- Acessar suas informações pessoais.
          {'\n'}- Solicitar a correção de dados incorretos.
          {'\n'}- Solicitar a exclusão de suas informações, respeitando as obrigações legais.
        </Text>

        <Text style={styles.subtitle}>6. Alterações na Política de Privacidade</Text>
        <Text style={styles.text}>
          Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas por meio do aplicativo ou por e-mail.
        </Text>

        <Text style={styles.subtitle}>7. Contato</Text>
        <Text style={styles.text}>
          Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail [gearheadsuporte@gmail.com].
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
