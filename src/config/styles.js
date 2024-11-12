import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  innerContainer: {
    paddingHorizontal: 20,
    alignSelf: "stretch",
  },
  input: {
    marginBottom: 50,
  },
  fundo: {
    flex: 1,
    width: '100%',  // O fundo vai ocupar 100% da largura
    height: '100%',  // O fundo vai ocupar 100% da altura
    resizeMode: 'cover',  // A imagem de fundo vai cobrir a tela inteira
    justifyContent: 'center',  // Centraliza o conteúdo verticalmente
    alignItems: 'center',  // Centraliza o conteúdo horizontalmente
  },
  logo: {
    width: 150,  // Largura da logo
    height: 150,  // Altura da logo
    resizeMode: 'contain',  // Mantém a proporção da logo
  },

  titulo: { //esse titulo é para o "bem vindo ao gearhead"
     backgroundColor: "white" 
     },

     title: { //esse titulo é para o "gearhead no cabeçalho"
      textAlign: 'center',
      color: 'white',
     },

     background: {
      backgroundColor: 'rgb(139,0,0)'
    },
     
    welcomeText: {
      marginBottom: 20,
      fontSize: 20, // Tamanho da fonte (ajuste conforme necessário)
      fontWeight: 'bold', // Negrito
      color: '#000', // Cor do texto (ajuste conforme necessário)
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: 400,
    },
    button: {
      backgroundColor: 'rgb(139,0,0)',
      paddingVertical: 12, // Aumenta o padding vertical do botão
      paddingHorizontal: 10, // Adiciona padding horizontal
      borderRadius: 5,
      width: '48%',
      marginVertical: 5,
      alignItems: 'center',
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 10, // Aumenta a margem à direita do ícone
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },

    scrollContainer: {
      flexGrow: 1, // Permite que o conteúdo dentro do ScrollView ocupe todo o espaço
      justifyContent: 'center', // Alinha o conteúdo verticalmente no centro
      paddingVertical: 20, // Espaçamento vertical
    },

    containerLogOut: {
      flex: 1,
      justifyContent: 'center', // Centraliza verticalmente
      alignItems: 'center',     // Centraliza horizontalmente
      backgroundColor: '#fff',  // Fundo branco
    },
    textLogOut: {
      fontSize: 20,
      marginBottom: 20,         // Espaçamento entre texto e botão
      textAlign: 'center',      // Centraliza o texto
    },
    buttonLogOut: {
      backgroundColor: 'rgb(139,0,0)',   // Cor de fundo vermelha
      paddingVertical: 10,      // Altura do botão
      paddingHorizontal: 20,    // Largura do botão
      borderRadius: 5,          // Bordas arredondadas
    },
    buttonTextLogOut: {
      color: 'white',           // Cor do texto do botão
      fontSize: 18,
    },
  }
);

