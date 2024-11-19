import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function MeuCarroScreen() {
  const [carInfo, setCarInfo] = useState(null);

  useEffect(() => {
    const loadCarInfo = async () => {
      try {
        const carInfoJson = await AsyncStorage.getItem("carInfo");
        if (carInfoJson) {
          setCarInfo(JSON.parse(carInfoJson));
        }
      } catch (error) {
        console.error("Erro ao carregar as informações do carro:", error);
      }
    };
    loadCarInfo();
  }, []);

  if (!carInfo) {
    return <Text>Carregando informações...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Card para informações da mecânica */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Mecânica</Text>
        <Text style={styles.cardText}>Nome: {carInfo.mechanic.name}</Text>
        <Text style={styles.cardText}>Localização: {carInfo.mechanic.location}</Text>
      </View>

      {/* Card para data e horário */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Data e Hora</Text>
        <Text style={styles.cardText}>Data: {new Date(carInfo.selectedDate).toLocaleDateString('pt-BR')}</Text>
        <Text style={styles.cardText}>Horário: {carInfo.selectedTime.map((slot) => slot.time).join(", ")}</Text>
      </View>

      {/* Card para modelo do carro */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Modelo do Carro</Text>
        <Text style={styles.cardText}>{carInfo.carModel}</Text>
      </View>

      {/* Card para serviços */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Serviços</Text>
        {carInfo.selectedServices.map((service, index) => (
          <Text key={index} style={styles.cardText}>
            {`${service.title}: ${service.price}`}
          </Text>
        ))}
      </View>

      {/* Card para total do pagamento */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Pagamento</Text>
        <Text style={styles.cardText}>
          R$ {carInfo.totalPayment.toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'rgb(139,0,0)',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});
