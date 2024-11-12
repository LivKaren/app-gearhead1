import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MeuCarroScreen() {
  const [agendamento, setAgendamento] = useState(null);

  useEffect(() => {
    const carregarAgendamento = async () => {
      try {
        const agendamentoString = await AsyncStorage.getItem('agendamento');
        if (agendamentoString) {
          setAgendamento(JSON.parse(agendamentoString));
        }
      } catch (error) {
        console.log("Erro ao carregar o agendamento:", error);
      }
    };

    carregarAgendamento();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {agendamento ? (
        <>
          <Text>Agendamento Confirmado:</Text>
          <Text>Data: {new Date(agendamento.selectedDate).toLocaleDateString('pt-BR')}</Text>
          <Text>Horário: {agendamento.selectedTime.map((slot) => slot.time).join(", ")}</Text>
          <Text>Modelo do Carro: {agendamento.carModel}</Text>
          <Text>Mecânica: {agendamento.mechanic.name}</Text>
          <Text>Serviços:</Text>
          {agendamento.selectedServices.map((service, index) => (
            <Text key={index}>{`${service.title}: ${service.price}`}</Text>
          ))}
          <Text>Total: R$ {agendamento.totalPayment.toFixed(2).replace(".", ",")}</Text>
        </>
      ) : (
        <Text>Você ainda não confirmou um agendamento.</Text>
      )}
    </View>
  );
}
