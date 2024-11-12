
import { useFavorites } from './FavoritesContext';


import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FavoritosScreen() {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <ScrollView style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Favoritos</Text>
            {favorites.length > 0 ? (
                favorites.map((item, index) => (
                    <View key={index} style={{
                        marginBottom: 16,
                        padding: 16,
                        backgroundColor: '#f8f8f8',
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        position: 'relative',
                    }}>
                        <Image source={{ uri: item.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 8 }}>{item.name}</Text>
                        <TouchableOpacity
                            onPress={() => removeFavorite(item.id)}
                            style={{ position: 'absolute', top: 16, right: 16 }}
                        >
                            <Icon name="delete" size={24} color="#e43921" />
                        </TouchableOpacity>
                    </View>
                ))
            ) : (
                <Text style={{ fontSize: 16, color: '#555' }}>Você não tem favoritos ainda.</Text>
            )}
        </ScrollView>
    );
}