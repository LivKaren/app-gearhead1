import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { Checkbox, Button } from "react-native-paper";
import { useState } from "react";
import { Calendar } from 'react-native-calendars';

export default function CarroSelecao1Screen({ route, navigation }) {
  const { mechanic, selectedServices } = route.params;
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [carModel, setCarModel] = useState("");
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState([]);

  const brands = [
    { id: 1, name: "Fiat", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/768px-Fiat_Automobiles_logo.svg.png" },
    { id: 2, name: "Chevrolet", image: "https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png" },
    { id: 3, name: "Volkswagen", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volkswagen_Logo_till_1995.svg/2048px-Volkswagen_Logo_till_1995.svg.png" },
    { id: 4, name: "Nissan", image: "https://gkpb.com.br/wp-content/uploads/2020/03/novo-logo-nissan-png-sem-fundo-1024x1024.png" },
    { id: 5, name: "BMW", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/768px-BMW.svg.png" },
  ];

  const timeSlots = [
    { id: 1, time: "08:30 à 09:00" },
    { id: 2, time: "09:30 à 10:00" },
    { id: 3, time: "10:30 à 11:00" },
    { id: 4, time: "13:30 à 14:00" },
    { id: 5, time: "14:30 à 15:00" },
    { id: 6, time: "15:30 à 16:00" },
  ];

  const toggleBrand = (brandId) => {
    if (selectedBrand.includes(brandId)) {
      setSelectedBrand(selectedBrand.filter((id) => id !== brandId));
    } else {
      setSelectedBrand([...selectedBrand, brandId]);
    }
  };

  const toggleTime = (timeId) => {
    if (selectedTime.includes(timeId)) {
      setSelectedTime(selectedTime.filter((id) => id !== timeId));
    } else {
      setSelectedTime([...selectedTime, timeId]);
    }
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Selecione a marca do seu carro</Text>

      {/* Cards de seleção de marca */}
      <ScrollView horizontal style={{ flexDirection: "row" }}>
        {brands.map((brand) => (
          <TouchableOpacity
            key={brand.id}
            onPress={() => toggleBrand(brand.id)}
            style={{
              width: 100,
              height: 100,
              margin: 5,
              backgroundColor: "#fff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: selectedBrand.includes(brand.id) ? 2 : 0,
              borderColor: "#6200ea",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 3,
            }}
          >
            <Image
              source={{ uri: brand.image }}
              style={{ width: 40, height: 40, marginBottom: 5 }}
            />
            <Text>{brand.name}</Text>
            <Checkbox
              status={selectedBrand.includes(brand.id) ? "checked" : "unchecked"}
              onPress={() => toggleBrand(brand.id)}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Caixa de texto para descrição do modelo do carro */}
      <Text style={{ marginTop: 20, marginBottom: 10 }}>Adicione a descrição do modelo do carro</Text>
      <TextInput
        placeholder="Digite o modelo do carro, placa do carro ou alguma descrição"
        value={carModel}
        onChangeText={setCarModel}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          padding: 10,
          marginBottom: 20,
        }}
      />

      {/* Seleção de data com calendário */}
      <Text style={{ marginBottom: 10 }}>Selecionar a data</Text>
      <Calendar
        onDayPress={(day) => {
          const selectedLocalDate = new Date(day.dateString + "T00:00:00");
          setSelectedDate(selectedLocalDate.toISOString().split('T')[0]);
        }}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: '#6200ea' },
        }}
        theme={{
          selectedDayBackgroundColor: '#6200ea',
          arrowColor: '#6200ea',
          todayTextColor: '#6200ea',
        }}
        style={{ marginBottom: 20 }}
      />

      {selectedDate ? (
        <Text style={{ marginBottom: 20 }}>Data selecionada: {new Date(selectedDate).toLocaleDateString('pt-BR')}</Text>
      ) : null}

      {/* Seção de seleção de horário */}
      <Text style={{ marginBottom: 10 }}>Selecione o horário</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {timeSlots.map((slot) => (
          <TouchableOpacity
            key={slot.id}
            onPress={() => toggleTime(slot.id)}
            style={{
              width: "48%",
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 10,
              marginBottom: 16,
              borderWidth: selectedTime.includes(slot.id) ? 2 : 0,
              borderColor: "#6200ea",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 3,
              alignItems: "center",
            }}
          >
            <Text>{slot.time}</Text>
            <Checkbox
              status={selectedTime.includes(slot.id) ? "checked" : "unchecked"}
              onPress={() => toggleTime(slot.id)}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão de continuar */}
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate("CarroConfirmaScreen", {
            mechanic,
            selectedDate,
            selectedTime: timeSlots.filter((slot) => selectedTime.includes(slot.id)),
            selectedServices,
            carModel,
          })
        }
        disabled={selectedBrand.length === 0 || !carModel || !selectedDate || selectedTime.length === 0}
      >
        Continuar
      </Button>
    </ScrollView>
  );
}
