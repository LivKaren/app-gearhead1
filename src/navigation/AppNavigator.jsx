import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Importa o Drawer
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa o ícone de Material Icons
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MeuPerfilScreen from "../screens/MeuPerfilScreen";
import MeuCarroScreen from "../screens/MeuCarroScreen";
import FavoritosScreen from "../screens/FavoritosScreen";
import MeuEnderecoScreen from "../screens/MeuEnderecoScreen";
import TermosScreen from "../screens/TermosScreen";
import PrivacidadeScreen from "../screens/PrivacidadeScreen";
import LogOutScreen from "../screens/LogOutScreen";
import MenuScreen from "../screens/MenuScreen";
import MecanicaDetalhe1Screen from "../screens/MecanicaDetalhe1Screen";
import MecanicaDetalhe2Screen from "../screens/MecanicaDetalhe2Screen";
import MecanicaDetalhe3Screen from "../screens/MecanicaDetalhe3Screen";
import CarroSelecaoScreen from "../screens/CarroSelecaoScreen";
import CarroConfirmaScreen from "../screens/CarroConfirmaScreen";
import PagamentoScreen from "../screens/PagamentoScreen";
import ConcluidoScreen from "../screens/ConcluidoScreen";
import { FavoritesProvider } from "../screens/FavoritesContext";
import NotificacoesScreen from "../screens/NotificacoesScreen";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator(); // Cria o Drawer

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MenuScreen"
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'rgb(139,0,0)', // Cor do fundo do Drawer
          width: 240,
        },
        drawerLabelStyle: {
          color: 'white', // Cor das letras no Drawer
        },
        drawerActiveTintColor: 'white', // Cor dos ícones quando ativo
        drawerInactiveTintColor: 'white', // Cor dos ícones quando inativo
        headerStyle: {
          backgroundColor: 'rgb(139,0,0)', // Cor vermelha da barra superior
        },
        headerTintColor: 'white', // Cor do texto e ícones do header
        headerTitleAlign: 'center', // Alinhamento do título
      }}
    >

  <Drawer.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          title: "GearHead",
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerRight: () => (
            <Icon
              name="notifications"
              size={25}
              color="white"
              onPress={() => navigation.navigate('NotificacoesScreen')}
              style={{ marginRight: 15 }}
            />
          ),
        }}
      />


      {/* Tela Perfil */}
      <Drawer.Screen
        name="Meu Perfil"
        component={MeuPerfilScreen}
        options={{
          title: "Meu Perfil", 
          drawerIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />

          
       

      {/* Tela Carro */}
      <Drawer.Screen
        name="Meu Carro"
        component={MeuCarroScreen}
        options={{
          title: "Meu Carro", 
          drawerIcon: ({ color, size }) => (
            <Icon name="directions-car" color={color} size={size} />
          ),
        }}
      />

      {/* Tela Favoritos */}
      <Drawer.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={{
          title: "Favoritos", 
          drawerIcon: ({ color, size }) => (
            <Icon name="favorite" color={color} size={size} />
          ),
        }}
      />

      {/* Tela Endereço */}
      <Drawer.Screen
        name="Endereço"
        component={MeuEnderecoScreen}
        options={{
          title: "Endereço", 
          drawerIcon: ({ color, size }) => (
            <Icon name="location-on" color={color} size={size} />
          ),
        }}
      />

      {/* Tela Termos e condições */}
      <Drawer.Screen
        name="Termos e condições"
        component={TermosScreen}
        options={{
          title: "Termos e condições", 
          drawerIcon: ({ color, size }) => (
            <Icon name="gavel" color={color} size={size} />
          ),
        }}
      />

      {/* Tela Privacidade */}
      <Drawer.Screen
        name="Privacidade"
        component={PrivacidadeScreen}
        options={{
          title: "Privacidade", 
          drawerIcon: ({ color, size }) => (
            <Icon name="lock" color={color} size={size} />
          ),
        }}
      />

      {/* Tela LogOut */}
      <Drawer.Screen
        name="LogOut"
        component={LoginScreen}
        options={{
          title: "Sair", 
          drawerIcon: ({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <FavoritesProvider>
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Inicial",
          }}
        />
      <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Cadastro",
          }}
        />

      <Stack.Screen
          name="FavoritosScreen"
          component={FavoritosScreen}
          options={{
            title: "Favorito",
          }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator} // Use o DrawerNavigator como componente
          options={{
            headerShown: false, // Oculta a barra superior
          }}
        />
        <Stack.Screen
          name="MecanicaDetalhe1Screen"
          component={MecanicaDetalhe1Screen}
          options={{ title: 'Mecânica Detalhe' }}
        />
        <Stack.Screen
          name="MecanicaDetalhe2Screen"
          component={MecanicaDetalhe2Screen}
          options={{ title: 'Mecânica Detalhe' }}
        />
        <Stack.Screen
          name="MecanicaDetalhe3Screen"
          component={MecanicaDetalhe3Screen}
          options={{ title: 'Mecânica Detalhe' }}
        />
        <Stack.Screen
          name="CarroSelecaoScreen"
          component={CarroSelecaoScreen}
          options={{ title: 'Seleção do Carro' }}
        />
        <Stack.Screen
          name="CarroConfirmaScreen"
          component={CarroConfirmaScreen}
          options={{ title: 'Confirmação' }}
        />
        <Stack.Screen
          name="PagamentoScreen"
          component={PagamentoScreen}
          options={{ title: 'Pagamento' }}
        />
        <Stack.Screen
          name="ConcluidoScreen"
          component={ConcluidoScreen}
          options={{ title: 'Concluido' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoritesProvider>
  );
}
