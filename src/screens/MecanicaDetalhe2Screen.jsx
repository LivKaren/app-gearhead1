import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Title, Button, Checkbox } from "react-native-paper";
import { useState } from "react";


export default function MecanicaDetalhe2Screen({ route, navigation }) {
  const { mechanic } = route.params;

  // Lista de serviços da mecânica
  const services = [
    { id: 1, image: "https://www.pngall.com/wp-content/uploads/2017/03/Oil-Free-PNG-Image.png", title: "Troca de óleo", price: "R$ 150,00" },
    { id: 2, image: "https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-wheel-alignment-png-image_13344567.png", title: "Alinhamento", price: "R$ 120,00" },
    { id: 3, image: "https://www.tecfil.com.br/wp-content/uploads/2019/12/img-filtro-de-ar.png", title: "Filtros de ar", price: "R$ 500,00" },
    { id: 4, image: "https://guinchoautosocorro.com.br/wp-content/uploads/2016/04/checklist-do-ve%C3%ADculo-antes-da-viagem.png", title: "Revisão geral", price: "R$ 300,00" },
    { id: 5, image: "https://freiosbreque.com.br/wp-content/uploads/2021/01/troca-disco-freios-340x340.png", title: "Freios", price: "R$ 250,00" },
    { id: 6, image: "https://griffepneus.com.br/website2021/wp-content/uploads/2021/03/Barulho-na-suspens%C3%A3o-Saiba-como-identificar-e-o-que-fazer-300x229.png", title: "Suspensão", price: "R$ 400,00" },
    { id: 7, image: "https://cdni.iconscout.com/illustration/premium/thumb/pintura-de-carro-2162037-1818525.png?f=webp", title: "Pintura", price: "R$ 900,00" },
    { id: 8, image: "https://dellavia.vteximg.com.br/arquivos/ids/161931/DESTINATION-LE3.png?v=638455026151500000", title: "Troca de pneu", price: "R$ 200,00" },
    { id: 9, image: "https://lojaodasbaterias.com/wp-content/uploads/2021/09/Bateria-Moto-1024x834.png", title: "Bateria", price: "R$ 350,00" },
    { id: 10, image: "https://png.pngtree.com/png-clipart/20231016/original/pngtree-engine-car-turbo-png-image_13325602.png", title: "Limpeza de motor", price: "R$ 180,00" },
  ];

  const [selectedServices, setSelectedServices] = useState([]);

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
      <Title style={{ fontWeight: "bold",color: 'rgb(139,0,0)' }}>{mechanic.name}</Title>
      <Text>Telefone: {mechanic.phone}</Text>
      <Text>Localização: {mechanic.location}</Text>
      <Text>Horário: {mechanic.hours}</Text>
      <Text>Avaliação: ⭐ {mechanic.rating}</Text>

      <View style={{ marginVertical: 20 }}>
        <Title style={{ fontWeight: "bold",color: 'rgb(139,0,0)' }}>Sobre</Title>
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
        mechanic,  // Passa a mecânica selecionada
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
