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
        <Text style={styles.title}>Termos de Uso</Text>

        <Text style={styles.text}>
          Bem-vindo ao Gearhead. Estes Termos de Uso ("Termos") regem sua utilização do Aplicativo e dos serviços oferecidos. 
          Ao acessar ou usar o Aplicativo, você concorda em cumprir e ficar vinculado a estes Termos. 
          Se você não concorda com estes Termos, não use o Aplicativo.
        </Text>

        <Text style={styles.subtitle}>1. Descrição do Serviço</Text>
        <Text style={styles.text}>
          O Gearhead é um aplicativo desenvolvido para facilitar a gestão de serviços de mecânica, oferecendo aos usuários as seguintes funcionalidades:
        </Text>

        <Text style={styles.text}>
          Página de Status do Carro: Permite que você acompanhe o status de seu veículo em tempo real, incluindo informações sobre se o carro começou a ser consertado, se está pronto ou se ainda está na espera.
        </Text>

        <Text style={styles.text}>
          Página de Cadastro do Carro: Permite que você registre seu veículo fornecendo informações como a placa do carro, o que deve ser feito, problemas extras identificados e a definição de se é um carro ou uma moto.
        </Text>

        <Text style={styles.subtitle}>2. Registro e Responsabilidade</Text>
        <Text style={styles.text}>
          Para utilizar o Aplicativo, você deve fornecer informações precisas e completas ao registrar seu veículo. É de sua responsabilidade garantir que todas as informações fornecidas são corretas e atualizadas. 
          Você é responsável por manter a confidencialidade das suas credenciais de acesso e por todas as atividades realizadas em sua conta.
        </Text>

        <Text style={styles.subtitle}>3. Uso do Aplicativo</Text>
        <Text style={styles.text}>
          Você concorda em usar o Aplicativo apenas para fins legais e de acordo com estes Termos. Você se compromete a não:
        </Text>

        <Text style={styles.text}>
          Utilizar o Aplicativo para qualquer propósito ilegal ou não autorizado.
        </Text>

        <Text style={styles.text}>
          Interferir ou interromper o funcionamento do Aplicativo ou servidores.
        </Text>

        <Text style={styles.text}>
          Transmitir vírus ou outros códigos maliciosos.
        </Text>

        <Text style={styles.text}>
          Coletar ou armazenar informações pessoais de outros usuários sem a devida autorização.
        </Text>

        <Text style={styles.subtitle}>4. Propriedade Intelectual</Text>
        <Text style={styles.text}>
          Todos os direitos, títulos e interesses sobre o Aplicativo, incluindo todos os direitos autorais e marcas registradas, pertencem exclusivamente ao Gearhead. 
          Você não deve copiar, modificar, distribuir ou criar trabalhos derivados baseados no Aplicativo, salvo se expressamente autorizado por escrito.
        </Text>

        <Text style={styles.subtitle}>5. Limitação de Responsabilidade</Text>
        <Text style={styles.text}>
          O Gearhead não se responsabiliza por danos diretos, indiretos, acidentais, especiais ou consequenciais que possam resultar do uso ou incapacidade de usar o Aplicativo. 
          O Aplicativo é fornecido “como está” e “conforme disponível”, sem garantias de qualquer tipo, expressas ou implícitas.
        </Text>

        <Text style={styles.subtitle}>6. Modificações</Text>
        <Text style={styles.text}>
          O Gearhead reserva-se o direito de modificar estes Termos a qualquer momento. Quaisquer mudanças serão publicadas no Aplicativo e entrarão em vigor imediatamente após a publicação. 
          É sua responsabilidade revisar periodicamente os Termos para estar ciente de quaisquer alterações.
        </Text>

        <Text style={styles.subtitle}>7. Rescisão</Text>
        <Text style={styles.text}>
          Podemos suspender ou encerrar seu acesso ao Aplicativo, a nosso exclusivo critério, com aviso prévio, se você violar estes Termos ou por qualquer outro motivo. 
          Caso infrinja algum termo, você terá apenas um aviso, caso cometa outro em um prazo de 3 meses, sua conta será suspensa ou encerrada.
        </Text>

        <Text style={styles.subtitle}>8. Lei Aplicável</Text>
        <Text style={styles.text}>
          Estes Termos são regidos pelas leis [do País/Estado] sem considerar seus princípios de conflitos de leis. 
          Qualquer disputa relacionada a estes Termos será resolvida nos tribunais competentes [do País/Estado].
        </Text>

        <Text style={styles.subtitle}>9. Contato</Text>
        <Text style={styles.text}>
          Se você tiver alguma dúvida sobre estes Termos ou sobre o Aplicativo, entre em contato conosco através do e-mail gearheadsuporte@gmail.com ou pelo telefone 47997587631.
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
