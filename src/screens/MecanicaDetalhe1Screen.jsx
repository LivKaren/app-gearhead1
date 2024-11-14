import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Title, Button, Checkbox } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';

export default function MecanicaDetalhe1Screen({ route, navigation }) {
  const { mechanic } = route.params;
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  // Função para buscar serviços do Firestore
  const buscarServicos = async () => {
    try {
      const servicosRef = collection(db, "servicos");
      const querySnapshot = await getDocs(servicosRef);
      const servicos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().nomeServico,
        price: doc.data().precoServico,
        image: "https://via.placeholder.com/50", // Placeholder para imagem, ajuste conforme necessário
      }));
      setServices(servicos);
    } catch (error) {
      console.error("Erro ao buscar serviços:", error);
    }
  };

  useEffect(() => {
    buscarServicos();
  }, []);

  // Função para marcar/desmarcar serviços
  const toggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Image
        source={{ uri: mechanic.image }}
        style={{ width: "100%", height: 200, borderRadius: 10, marginBottom: 16 }}
      />
      <Title style={{ fontWeight: "bold", color: 'rgb(139,0,0)' }}>{mechanic.name}</Title>
      <Text>Telefone: {mechanic.phone}</Text>
      <Text>Localização: {mechanic.location}</Text>
      <Text>Horário: {mechanic.hours}</Text>
      <Text>Avaliação: ⭐ {mechanic.rating}</Text>

      <View style={{ marginVertical: 20 }}>
        <Title style={{ fontWeight: "bold", color: 'rgb(139,0,0)' }}>Sobre</Title>
        <Text>{mechanic.description}</Text>
      </View>

      <View>
        <Title style={{ fontWeight: "bold", color: 'rgb(139,0,0)' }}>Serviços</Title>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              onPress={() => toggleService(service.id)}
              style={{
                width: "48%",
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 10,
                marginBottom: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: service.image }}
                style={{ width: 50, height: 50, marginBottom: 5 }}
              />
              <Text>{service.title}</Text>
              <Text style={{ fontWeight: "bold", color: "rgb(139,0,0)" }}>{service.price}</Text>
              <Checkbox
                status={selectedServices.includes(service.id) ? "checked" : "unchecked"}
                onPress={() => toggleService(service.id)}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {selectedServices.length > 0 && (
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate("CarroSelecaoScreen", {
              mechanic, // Passa a mecânica selecionada
              selectedServices: services.filter((service) =>
                selectedServices.includes(service.id)
              ),
            })
          }
          style={{ marginTop: 20 }}
        >
          Continuar
        </Button>
      )}
    </ScrollView>
  );
}
