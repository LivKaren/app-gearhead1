import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../config/styles';

const UniformButton = ({ title, onPress, iconName, animatedStyle }) => {
  return (
    <Animated.View style={[styles.button, animatedStyle]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContent}>
          <MaterialCommunityIcons name={iconName} size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function Inicial({ navigation }) {
  const slideAnim1 = useRef(new Animated.Value(0)).current;
  const slideAnim2 = useRef(new Animated.Value(0)).current;
  const slideAnim3 = useRef(new Animated.Value(0)).current;
  const slideAnim4 = useRef(new Animated.Value(0)).current;

  const slideButton = (animation, navigateTo) => {
    Animated.timing(animation, {
      toValue: 150,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate(navigateTo);
      // Reseta a animação ao voltar
      Animated.timing(animation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo à Mecânica, chefe!</Text>
      <View style={styles.buttonContainer}>
        <UniformButton
          title="Ver cadastros de contas"
          onPress={() => slideButton(slideAnim1, 'contas cadastradas')}
          iconName="account"
          animatedStyle={{ transform: [{ translateX: slideAnim1 }] }}
        />
        <UniformButton
          title="Ver os Agendamentos"
          onPress={() => slideButton(slideAnim2, 'Ver os Agendamentos')}
          iconName="car"
          animatedStyle={{ transform: [{ translateX: slideAnim2 }] }}
        />
        <UniformButton
          title="Cadastrar empresa"
          onPress={() => slideButton(slideAnim3, 'cadastrar empresa')}
          iconName="office-building"
          animatedStyle={{ transform: [{ translateX: slideAnim3 }] }}
        />
        <UniformButton
          title="Ver Histórico"
          onPress={() => slideButton(slideAnim4, 'histórico de suporte')}
          iconName="history"
          animatedStyle={{ transform: [{ translateX: slideAnim4 }] }}
        />
      </View>
    </View>
  );
}
