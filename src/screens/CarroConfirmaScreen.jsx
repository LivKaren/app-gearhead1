import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from 'react-native-vector-icons';
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";


export default function CarroConfirma1Screen({ route, navigation }) {
  const { mechanic, selectedDate, selectedTime, carModel, selectedServices } = route.params;

  // Calcular o total do pagamento
  const totalPayment = selectedServices.reduce((total, service) => {
    const price = parseFloat(service.price.replace("R$", "").replace(",", ".").trim());
    return total + price;
  }, 0);

  // Função para salvar as informações no AsyncStorage
  const saveCarInfo = async () => {
    try {
      const carInfo = {
        mechanic,
        selectedDate,
        selectedTime,
        carModel,
        selectedServices,
        totalPayment
      };
      await AsyncStorage.setItem("carInfo", JSON.stringify(carInfo));

      // add carinfo to firebase collecion named "agendamentos"
      const docRef = doc(db, "agendamentos", "carinfo");
      setDoc(docRef, carInfo);
      console.log("Car info saved to AsyncStorage and Firebase");



      console.log("Informações do carro salvas com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar as informações do carro:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>

      <Text style={{ color: 'rgb(139,0,0)', fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Confirmação</Text>


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


      <Text style={{ color: 'rgb(139,0,0)', fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Data e hora</Text>
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-create" size={24} color="black" />
        </TouchableOpacity>
      </View>


      <Text style={{ color: 'rgb(139,0,0)', fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Tipo do Carro</Text>
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

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="md-create" size={24} color="black" />
        </TouchableOpacity>
      </View>


      <Text style={{ color: 'rgb(139,0,0)', fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Serviços</Text>
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


      <Text style={{ color: 'rgb(139,0,0)', fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Pagamento Total</Text>
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
          saveCarInfo();  // Salvar informações do carro
          navigation.navigate("PagamentoScreen", {
            mechanic,
            selectedDate,
            selectedTime,
            carModel,
            selectedServices,
          });
        }}
      >
        Confirmar
      </Button>
    </View>
  );
}
