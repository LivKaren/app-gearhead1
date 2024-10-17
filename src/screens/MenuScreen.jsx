
import { Button, Surface, Appbar, TextInput, Title } from "react-native-paper";
import { styles } from "../config/styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, ScrollView, Image, Dimensions, Text, TouchableOpacity, Animated } from "react-native";
import { useState, useRef, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Importa o Drawer

export default function MenuScreen({ navigation }) {
    const [location, setLocation] = useState("");
    const scrollViewRef = useRef();
    const categoriesScrollRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [hearts, setHearts] = useState([false, false, false]); // Estado para os corações de cada card
    
    const screenWidth = Dimensions.get("window").width;

    const images = [
        "https://i.pinimg.com/564x/41/da/ec/41daec28e9b5a3c6f2bd30b2e2991f18.jpg",
        "https://i.pinimg.com/564x/ed/64/bc/ed64bc902968b0d90745d2fbcc855b34.jpg",
        "https://i.pinimg.com/564x/fc/11/91/fc11914609c8d84d4ac6754bba538550.jpg",
    ];

    const categories = [
        { image: "https://png.pngtree.com/png-clipart/20231016/original/pngtree-engine-car-turbo-png-image_13325602.png", title: "Motor" },
        { image: "https://freiosbreque.com.br/wp-content/uploads/2021/01/troca-disco-freios-340x340.png", title: "Freios" },
        { image: "https://dellavia.vteximg.com.br/arquivos/ids/161931/DESTINATION-LE3.png?v=638455026151500000", title: "Pneus" },
        { image: "https://www.pngall.com/wp-content/uploads/2017/03/Oil-Free-PNG-Image.png", title: "Óleo" },
        { image: "https://connectparts.vtexassets.com/assets/vtex.file-manager-graphql/images/ab8b0d5b-3b2d-498f-b53a-2e0b2c843623___4da964effe060c81d1700da6528d10db.png", title: "Acessórios" },
        { image: "https://griffepneus.com.br/website2021/wp-content/uploads/2021/03/Barulho-na-suspens%C3%A3o-Saiba-como-identificar-e-o-que-fazer-300x229.png", title: "Suspensão" },
        { image: "https://static.vecteezy.com/system/resources/previews/021/217/685/non_2x/headlight-for-cars-trucks-and-buses-png.png", title: "Faróis" },
        { image: "https://glassback.pt/wp-content/uploads/2022/07/3.png", title: "Vidros" },
        { image: "https://www.tecfil.com.br/wp-content/uploads/2019/12/img-filtro-de-ar.png", title: "Filtros de ar" },
        { image: "https://lojaodasbaterias.com/wp-content/uploads/2021/09/Bateria-Moto-1024x834.png", title: "Bateria" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length;
                scrollViewRef.current?.scrollTo({
                    x: nextIndex * screenWidth,
                    animated: true,
                });
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [screenWidth, images.length]);

    const handleNextCategories = () => {
        const nextCategoryIndex = (currentCategoryIndex + 5) % categories.length;
        categoriesScrollRef.current?.scrollTo({
            x: nextCategoryIndex * 100,
            animated: true,
        });
        setCurrentCategoryIndex(nextCategoryIndex);
    };

    const toggleHeart = (index) => {
        const newHearts = [...hearts];
        newHearts[index] = !newHearts[index]; // Alterna o estado do coração clicado
        setHearts(newHearts);
    };

    

    return (
        <View style={{ flex: 1 }}>
            

            <ScrollView>
                <View
                    style={{
                        padding: 16,
                        backgroundColor: "rgb(139,0,0)",
                    }}
                >
                    <TextInput
                        label="Escolha sua localização"
                        value={location}
                        onChangeText={(text) => setLocation(text)}
                        mode="outlined"
                        style={{ marginBottom: 20 }}
                    />
                </View>

                <View style={{ padding: 16 }}>
                    <Title style={{ fontSize: 24, fontWeight: "bold" }}>
                        Especial para Você
                    </Title>
                </View>

                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    ref={scrollViewRef}
                    style={{ marginBottom: 20 }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={{
                                width: screenWidth,
                                height: 150,
                                borderRadius: 10,
                                marginRight: index === images.length - 1 ? 0 : 10,
                            }}
                        />
                    ))}
                </ScrollView>

                <View style={{ padding: 16 }}>
                    <Title style={{ fontSize: 24, fontWeight: "bold" }}>
                        Categorias
                    </Title>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ref={categoriesScrollRef}
                    >
                        {categories
                            .slice(currentCategoryIndex, currentCategoryIndex + 5)
                            .map((category, index) => (
                                <View
                                    key={index}
                                    style={{ alignItems: "center", marginHorizontal: 10 }}
                                >
                                    <Image
                                        source={{ uri: category.image }}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: 40,
                                            marginBottom: 5,
                                        }}
                                    />
                                    <Text>{category.title}</Text>
                                </View>
                            ))}
                    </ScrollView>

                    <TouchableOpacity onPress={handleNextCategories}>
                        <Icon name="arrow-forward" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 16 }}>
                    <Title style={{ fontSize: 24, fontWeight: "bold" }}>
                        Serviços ao Cliente
                    </Title>
                </View>

                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingHorizontal: 16 }}>
    {/* Card 1 - Endereço */}
    <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={{
            width: "30%",
            aspectRatio: 1,
            backgroundColor: "rgb(139,0,0)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
        }}
    >
        <Icon name="place" size={40} color="white" style={{ marginBottom: 5 }} /> {/* Ícone de endereço */}
        <Text style={{ color: "white" }}>Endereço</Text>
    </TouchableOpacity>

    {/* Card 2 - Meu Carro */}
    <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={{
            width: "30%",
            aspectRatio: 1,
            backgroundColor: "rgb(139,0,0)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
        }}
    >
        <Icon name="directions-car" size={40} color="white" style={{ marginBottom: 5 }} /> {/* Ícone de carro */}
        <Text style={{ color: "white" }}>Meu carro</Text>
    </TouchableOpacity>

    {/* Card 3 - Favoritos */}
    <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={{
            width: "30%",
            aspectRatio: 1,
            backgroundColor: "rgb(139,0,0)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
        }}
    >
        <Icon name="favorite" size={40} color="white" style={{ marginBottom: 5 }} /> {/* Ícone de favoritos */}
        <Text style={{ color: "white" }}>Favoritos</Text>
    </TouchableOpacity>
</View>


<View style={{ padding: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Recomendação para Você</Text>
                <TouchableOpacity onPress={() => {/* Ação de Ver tudo */}}>
                    <Text style={{ color: 'rgb(139,0,0)', fontSize: 16 }}>Ver tudo</Text>
                </TouchableOpacity>
            </View>

            {/* Cards de Recomendação */}
            <View style={{ flexDirection: "column", paddingHorizontal: 16 }}>
                {/* Card 1 - Joinville Car */}
                <TouchableOpacity
                    style={{
                        width: "100%",
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 16,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        elevation: 3,
                    }}
                    onPress={() => {
                        toggleHeart(0); // Alterna o estado do coração ao clicar
                        navigation.navigate("MecanicaDetalhe1Screen", {
                            mechanic: {
                                image: "https://scontent.fbnu3-1.fna.fbcdn.net/v/t39.30808-6/302200185_476642891142263_6721106998601686659_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=I-LJndsFdV8Q7kNvgGUtAm-&_nc_ht=scontent.fbnu3-1.fna&_nc_gid=Aj2Qmm04i4gp9UARFwg2KlQ&oh=00_AYC-gFH7VukqumP2Q6Ii1I2kYdQsqtv4YjEV1HgYoAPN5w&oe=670C8FFD",
                                name: "Joinville Car",
                                phone: "(11) 99999-9999",
                                location: "Rua das Oficinas, 123",
                                hours: "08:00 - 18:00",
                                rating: 4.5,
                                description: "Somos especialistas em serviços de manutenção automotiva...",
                            },
                        });
                    }}
                >
                    <Image
                        source={{ uri: "https://scontent.fbnu3-1.fna.fbcdn.net/v/t39.30808-6/302200185_476642891142263_6721106998601686659_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=I-LJndsFdV8Q7kNvgGUtAm-&_nc_ht=scontent.fbnu3-1.fna&_nc_gid=Aj2Qmm04i4gp9UARFwg2KlQ&oh=00_AYC-gFH7VukqumP2Q6Ii1I2kYdQsqtv4YjEV1HgYoAPN5w&oe=670C8FFD" }}
                        style={{ width: "100%", height: 160, borderRadius: 10, marginBottom: 10 }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Joinville Car</Text>
                    <Text>⭐ 4.5</Text>
                    <Text>Aberto: 08:00 - 18:00</Text>
                    <Text>3 km de distância</Text>
                    <Button
    mode="contained"
    onPress={() => navigation.navigate("MecanicaDetalhe1Screen", {
        mechanic: {
            image: "https://scontent.fbnu3-1.fna.fbcdn.net/v/t39.30808-6/302200185_476642891142263_6721106998601686659_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=I-LJndsFdV8Q7kNvgGUtAm-&_nc_ht=scontent.fbnu3-1.fna&_nc_gid=Aj2Qmm04i4gp9UARFwg2KlQ&oh=00_AYC-gFH7VukqumP2Q6Ii1I2kYdQsqtv4YjEV1HgYoAPN5w&oe=670C8FFD",
            name: "Joinville Car",
            phone: "(11) 99999-9999",
            location: "Rua das Oficinas, 123",
            hours: "08:00 - 18:00",
            rating: 4.5,
            description: "Somos especialistas em serviços de manutenção automotiva...",
        },
    })}
    style={{ marginTop: 10, alignSelf: "flex-end" }}
>
    Agendar
</Button>
                    {/* Ícone do coração */}
                    <TouchableOpacity onPress={() => toggleHeart(0)} style={{ position: 'absolute', right: 16, top: 16 }}>
                        <Icon name={hearts[0] ? "favorite" : "favorite-border"} size={40} color="red" />
                    </TouchableOpacity>
                </TouchableOpacity>

                {/* Card 2 - Js Auto Center */}
                <TouchableOpacity
                    style={{
                        width: "100%",
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 16,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        elevation: 3,
                    }}
                    onPress={() => {
                        toggleHeart(1); // Alterna o estado do coração ao clicar
                        navigation.navigate("MecanicaDetalhe2Screen", {
                            mechanic: {
                                image: "https://maintenance-minio.kdminhaoficina.com.br/maintenance/public/system/establishment/22825664000122/whatsapp-image-2020-08-13-at-17.26.15-979efa20-956f-4de4-acc4-eec6f608b79c.jpeg",
                                name: "Js Auto Center",
                                phone: "(11) 98888-8888",
                                location: "Rua das Oficinas, 456",
                                hours: "09:00 - 19:00",
                                rating: 4.0,
                                description: "Atendemos todas as marcas e modelos com garantia de qualidade...",
                            },
                        });
                    }}
                >
                    <Image
                        source={{ uri: "https://maintenance-minio.kdminhaoficina.com.br/maintenance/public/system/establishment/22825664000122/whatsapp-image-2020-08-13-at-17.26.15-979efa20-956f-4de4-acc4-eec6f608b79c.jpeg" }}
                        style={{ width: "100%", height: 160, borderRadius: 10, marginBottom: 10 }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Js Auto Center</Text>
                    <Text>⭐ 4.0</Text>
                    <Text>Aberto: 09:00 - 19:00</Text>
                    <Text>5 km de distância</Text>
                    <Button
    mode="contained"
    onPress={() => navigation.navigate("MecanicaDetalhe2Screen", {
        mechanic: {
            image: "https://maintenance-minio.kdminhaoficina.com.br/maintenance/public/system/establishment/22825664000122/whatsapp-image-2020-08-13-at-17.26.15-979efa20-956f-4de4-acc4-eec6f608b79c.jpeg",
            name: "Js Auto Center",
            phone: "(11) 98888-8888",
            location: "Rua das Oficinas, 456",
            hours: "09:00 - 19:00",
            rating: 4.0,
            description: "Atendemos todas as marcas e modelos com garantia de qualidade...",
        },
    })}
    style={{ marginTop: 10, alignSelf: "flex-end" }}
>
    Agendar
</Button>
                    <TouchableOpacity onPress={() => toggleHeart(1)} style={{ position: 'absolute', right: 16, top: 16 }}>
                        <Icon name={hearts[1] ? "favorite" : "favorite-border"} size={40} color="red" />
                    </TouchableOpacity>
                </TouchableOpacity>

                {/* Card 3 - Mecânica 123 */}
                <TouchableOpacity
                    style={{
                        width: "100%",
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        padding: 16,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        elevation: 3,
                    }}
                    onPress={() => {
                        toggleHeart(2); // Alterna o estado do coração ao clicar
                        navigation.navigate("MecanicaDetalhe3Screen", {
                            mechanic: {
                                image: "https://maintenance-minio.kdminhaoficina.com.br/maintenance/public/system/establishment/01655080000186/fotofrentepatio-87476fbe-0237-46dc-9975-f669adadbc99.jpg",
                                name: "Mecânica 123",
                                phone: "(11) 97777-7777",
                                location: "Rua das Oficinas, 789",
                                hours: "07:30 - 18:30",
                                rating: 4.7,
                                description: "Mecânica especializada em reparos rápidos e eficientes...",
                            },
                        });
                    }}
                >
                    <Image
                        source={{ uri: "https://maintenance-minio.kdminhaoficina.com.br/maintenance/public/system/establishment/01655080000186/fotofrentepatio-87476fbe-0237-46dc-9975-f669adadbc99.jpg" }}
                        style={{ width: "100%", height: 160, borderRadius: 10, marginBottom: 10 }}
                    />
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Mecânica 123</Text>
                    <Text>⭐ 4.7</Text>
                    <Text>Aberto: 07:30 - 18:30</Text>
                    <Text>2 km de distância</Text>
                    <Button
    mode="contained"
    onPress={() => navigation.navigate("MecanicaDetalhe3Screen", {
        mechanic: {
            image: "https://maintenance-minio.kdminhaoficina.com.br/maintenance/public/system/establishment/01655080000186/fotofrentepatio-87476fbe-0237-46dc-9975-f669adadbc99.jpg",
            name: "Js Auto Center",
            phone: "(11) 98888-8888",
            location: "Rua das Oficinas, 456",
            hours: "09:00 - 19:00",
            rating: 4.0,
            description: "Atendemos todas as marcas e modelos com garantia de qualidade...",
        },
    })}
    style={{ marginTop: 10, alignSelf: "flex-end" }}
>
    Agendar
</Button>
                    <TouchableOpacity onPress={() => toggleHeart(2)} style={{ position: 'absolute', right: 16, top: 16 }}>
                        <Icon name={hearts[2] ? "favorite" : "favorite-border"} size={40} color="red" />
                    </TouchableOpacity>
                </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </View>
    );
}


