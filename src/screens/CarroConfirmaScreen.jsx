import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from 'react-native-vector-icons'; // Ícones do pacote Expo

export default function CarroConfirma1Screen({ route, navigation }) {
  const { mechanic, selectedDate, selectedTime, carModel, selectedServices } = route.params;

  // Calcular o total do pagamento
  const totalPayment = selectedServices.reduce((total, service) => {
    const price = parseFloat(service.price.replace("R$", "").replace(",", ".").trim()); // Remove "R$" e converte para float
    return total + price;
  }, 0);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Título da página */}
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Confirmação</Text>

      {/* Mini card da mecânica selecionada */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 10,
          marginBottom: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: mechanic.image }}
          style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10 }}
        />
        <View>
          <Text style={{ fontWeight: "bold" }}>{mechanic.name}</Text>
          <Text>{mechanic.location}</Text>
        </View>
      </View>

      {/* Seção: Carro, serviço, data e hora */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Carro, serviço, data e hora</Text>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 15,
          marginBottom: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text>Data: {new Date(selectedDate).toLocaleDateString('pt-BR')}</Text>
          <Text>Horário: {selectedTime.map((slot) => slot.time).join(", ")}</Text>
        </View>
        {/* Ícone de edição */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-create" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Seção: Tipo do Carro */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Tipo do Carro</Text>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 15,
          marginBottom: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>{carModel}</Text>
        {/* Ícone de edição */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-create" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Seção: Serviços */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Serviços</Text>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 15,
          marginBottom: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
        }}
      >
        {selectedServices.map((service, index) => (
          <Text key={index}>{`${service.title}: ${service.price}`}</Text>
        ))}
      </View>

      {/* Seção: Pagamento Total */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Pagamento Total</Text>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 15,
          marginBottom: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{`R$ ${totalPayment.toFixed(2).replace(".", ",")}`}</Text>
      </View>

      {/* Botão de confirmar */}
      
      <Button
  mode="contained"
  onPress={() => {
    // Navegar para a tela de pagamento passando os parâmetros necessários
    navigation.navigate("PagamentoScreen", {
      mechanic,         // Passa a mecânica selecionada (opcional, se precisar usar)
      selectedDate,     // Passa a data selecionada
      selectedTime,     // Passa o horário selecionado
      carModel,         // Passa o modelo do carro
      selectedServices, // Passa os serviços selecionados
    });
  }}
>
  Confirmar
</Button>
    </View>
  );
}
