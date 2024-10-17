import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";

export default function ConcluidoScreen({ route, navigation }) {
  const { appointmentDate, appointmentTime } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
       {/* Exibir o GIF usando URL */}
       <Image
        source={{ uri: "https://media.tenor.com/WsmiS-hUZkEAAAAj/verify.gif" }} 
        style={{ width: 150, height: 150 }}
      />

      {/* Título */}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 20 }}>Obrigado por agendar!</Text>

      {/* Subtítulo com data e horário */}
      <Text style={{ fontSize: 16, textAlign: "center" }}>
        Seu agendamento foi realizado com sucesso
      </Text>

      {/* Botão para voltar ao início ou continuar */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate("MenuScreen")} // Redireciona para a tela inicial
        style={{ marginTop: 30 }}
      >
        Voltar ao Início
      </Button>
    </View>
  );
}
