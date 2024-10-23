import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import { Title, Checkbox, Button } from "react-native-paper";

export default function PagamentoScreen({ route, navigation }) {
  const paymentMethods = [
    { id: 1, name: "Cartão de Crédito", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Cartão de Débito", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Pix", image: "https://via.placeholder.com/100" },
  ];

  const cardBrands = [
    { id: 1, name: "Mastercard", image: "https://play-lh.googleusercontent.com/ISgtba6LRnEs5iuHt-9d8lpioh8M3UFO5ZtoDjPPpf9l1zWr_L4GH3ABcN9WXgR3YQ8" },
    { id: 2, name: "Visa", image: "https://www.mobills.com.br/blog/wp-content/uploads/2022/06/logo-da-visa-bandeira-cartao-e1709061738681.png" },
    { id: 3, name: "Caixa", image: "https://radioipiranga.com.br/wp-content/uploads/2020/08/logo-caixa-economica-federal-2048-600x350.png" },
    { id: 4, name: "Itau", image: "https://logodownload.org/wp-content/uploads/2014/05/itau-logo-3-1.png" },
    { id: 5, name: "Santander", image: "https://companieslogo.com/img/orig/BSAC-a7132de4.png?t=1690536163" },
    { id: 6, name: "Nubank", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nubank_logo_2021.svg/1200px-Nubank_logo_2021.svg.png" },
  ];

  const [selectedPayment, setSelectedPayment] = useState([]);
  const [selectedCardBrand, setSelectedCardBrand] = useState([]);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    pixKey: "", // Adicionando campo para chave Pix
  });

  // Função para selecionar/desselecionar método de pagamento
  const togglePaymentMethod = (methodId) => {
    setSelectedPayment([methodId]);
    setSelectedCardBrand([]); // Limpa a seleção de marca de cartão ao mudar o método
  };

  // Função para selecionar/desselecionar marca de cartão
  const toggleCardBrand = (brandId) => {
    if (selectedCardBrand.includes(brandId)) {
      setSelectedCardBrand(selectedCardBrand.filter((id) => id !== brandId));
    } else {
      setSelectedCardBrand([brandId]); // Garante que só um cartão seja selecionado
    }
  };

  // Função para lidar com as mudanças de input no formulário
  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Título da página */}
      <Title style={{color: 'rgb(139,0,0)', fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>Escolha o método de pagamento</Title>

      {/* Cards de seleção de método de pagamento */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            onPress={() => togglePaymentMethod(method.id)}
            style={{
              width: 100,
              height: 150,
              margin: 5,
              backgroundColor: "#fff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: selectedPayment.includes(method.id) ? 2 : 0,
              borderColor: "#6200ea",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 3,
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>{method.name}</Text>
            <Checkbox
              status={selectedPayment.includes(method.id) ? "checked" : "unchecked"}
              onPress={() => togglePaymentMethod(method.id)}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Mostra as marcas de cartão se "Cartão de Crédito" ou "Cartão de Débito" for selecionado */}
      {(selectedPayment.includes(1) || selectedPayment.includes(2)) && (
        <>
          <Text style={{ color: 'rgb(139,0,0)', fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>Selecione a marca do cartão</Text>
          {/* ScrollView horizontal para as marcas de cartão */}
          <ScrollView horizontal style={{ flexDirection: "row" }}>
            {cardBrands.map((brand) => (
              <TouchableOpacity
                key={brand.id}
                onPress={() => toggleCardBrand(brand.id)}
                style={{
                  width: 100,
                  height: 100,
                  margin: 5,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: selectedCardBrand.includes(brand.id) ? 2 : 0,
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
                  style={{ width: 50, height: 50, marginBottom: 5 }}
                  resizeMode="contain"
                />
                <Text>{brand.name}</Text>
                <Checkbox
                  status={selectedCardBrand.includes(brand.id) ? "checked" : "unchecked"}
                  onPress={() => toggleCardBrand(brand.id)}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Formulário de informações do cartão */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: 'rgb(139,0,0)', fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Insira os dados do cartão</Text>
            <TextInput
              style={{
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="Nome no cartão"
              value={formData.cardName}
              onChangeText={(text) => handleFormChange("cardName", text)}
            />
            <TextInput
              style={{
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="Número do cartão"
              keyboardType="numeric"
              value={formData.cardNumber}
              onChangeText={(text) => handleFormChange("cardNumber", text)}
            />
            <TextInput
              style={{
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="Data de vencimento (MM/AA)"
              keyboardType="numeric"
              value={formData.expirationDate}
              onChangeText={(text) => handleFormChange("expirationDate", text)}
            />
            <TextInput
              style={{
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="CVV"
              keyboardType="numeric"
              value={formData.cvv}
              onChangeText={(text) => handleFormChange("cvv", text)}
            />
          </View>
        </>
      )}

      {/* Formulário de informações do Pix */}
      {selectedPayment.includes(3) && (
        <>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: 'rgb(139,0,0)', fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Insira sua chave Pix</Text>
            <TextInput
              style={{
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="Chave Pix (e-mail, CPF/CNPJ, celular, etc.)"
              value={formData.pixKey}
              onChangeText={(text) => handleFormChange("pixKey", text)}
            />
          </View>
        </>
      )}

      {/* Botão de confirmar */}
      <Button
  mode="contained"
  onPress={() => {
    // Verifica se o método de pagamento foi selecionado e os dados estão preenchidos
    if (
      (selectedPayment.includes(1) || selectedPayment.includes(2)) && // Verifica se cartão foi selecionado
      selectedCardBrand.length > 0 && // Verifica se uma marca de cartão foi selecionada
      formData.cardName &&
      formData.cardNumber &&
      formData.expirationDate &&
      formData.cvv
    ) {
      // Redireciona para Concluido1Screen com as informações de pagamento e agendamento
      navigation.navigate("ConcluidoScreen", {
        paymentMethod: paymentMethods.find((method) => selectedPayment.includes(method.id)),
        cardBrand: cardBrands.find((brand) => selectedCardBrand.includes(brand.id)),
        formData,
        appointmentDate: route.params?.appointmentDate, // data passada da tela anterior
        appointmentTime: route.params?.appointmentTime, // horário passado da tela anterior
      });
    } else if (selectedPayment.includes(3)) {
      // Se o método Pix for selecionado
      navigation.navigate("ConcluidoScreen", {
        paymentMethod: paymentMethods.find((method) => selectedPayment.includes(method.id)),
        formData: { pixKey: formData.pixKey }, // Passa a chave Pix como dados
        appointmentDate: route.params?.appointmentDate,
        appointmentTime: route.params?.appointmentTime,
      });
    } else {
      alert("Por favor, selecione um método de pagamento e preencha os dados necessários.");
    }
  }}
  style={{ marginTop: 20 }}
>
  Confirmar
</Button>

    </View>
  );
}

