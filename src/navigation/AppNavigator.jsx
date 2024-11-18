import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importando as telas do primeiro código
import PaginaInicialAdm from "../screens/paginaInicialAdm";
import VerCadastrosAdm from '../screens/VerCadastrosAdm';
import VerAgendamentos from '../screens/AgendamentosAdm';
import CadastrarEmpresaAdm from '../screens/CadastrarEmpresaAdm';
import HistoricoAdm from '../screens/HistoricoSuporteAdm';
import LogOutAdm from '../screens/LogOutAdm';

// Importando as telas do segundo código
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MeuPerfilScreen from "../screens/MeuPerfilScreen";
import MeuCarroScreen from "../screens/MeuCarroScreen";
import FavoritosScreen from "../screens/FavoritosScreen";
import MeuEnderecoScreen from "../screens/MeuEnderecoScreen";
import TermosScreen from "../screens/TermosScreen";
import PrivacidadeScreen from "../screens/PrivacidadeScreen";
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
const Drawer = createDrawerNavigator();

function AdminDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'rgb(139,0,0)',
          width: 240,
        },
        headerStyle: {
          backgroundColor: 'rgb(139,0,0)',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
      }}
    >
      <Drawer.Screen
        name="Pagina Inicial"
        component={PaginaInicialAdm}
        options={{
          title: "GearHead - Administrador",
          drawerIcon: ({ color }) => (
            <Icon name="home" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contas Cadastradas"
        component={VerCadastrosAdm}
        options={{
          title: "Ver Cadastros de Contas",
          drawerIcon: ({ color }) => (
            <Icon name="list" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ver os Agendamentos"
        component={VerAgendamentos}
        options={{
          title: "Agendamentos",
          drawerIcon: ({ color }) => (
            <Icon name="directions-car" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cadastrar Empresa"
        component={CadastrarEmpresaAdm}
        options={{
          title: "Cadastrar Empresas",
          drawerIcon: ({ color }) => (
            <Icon name="business" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Histórico de Suporte"
        component={HistoricoAdm}
        options={{
          title: "Histórico de Suporte",
          drawerIcon: ({ color }) => (
            <Icon name="history" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sair da Conta ADM"
        component={LogOutAdm}
        options={{
          title: "Fazer LogOut",
          drawerIcon: ({ color }) => (
            <Icon name="logout" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function UserDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MenuScreen"
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'rgb(139,0,0)',
          width: 240,
        },
        drawerLabelStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: 'rgb(139,0,0)',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
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
              name="notifications"      // Nome do ícone de sininho
              size={25}                 // Tamanho do ícone
              color="white"             // Cor do ícone
              onPress={() => alert('Notificações!')} // Ação ao clicar no sininho
              style={{ marginRight: 15 }} // Margem para distanciar do canto
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
        name="MeuCarroScreen"
        component={MeuCarroScreen}
        options={{
          title: "Meu Carro",
          drawerIcon: ({ color, size }) => (
            <Icon name="directions-car" color={color} size={size} />
          ),
        }}
      />
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
      <Drawer.Screen
        name="Termos e Condições"
        component={TermosScreen}
        options={{
          title: "Termos e Condições",
          drawerIcon: ({ color, size }) => (
            <Icon name="gavel" color={color} size={size} />
          ),
        }}
      />
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
          options={{ title: "Inicial" }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: "Cadastro" }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="AdminDrawerNavigator"
          component={AdminDrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserDrawerNavigator"
          component={UserDrawerNavigator}
          options={{ headerShown: false }}
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
