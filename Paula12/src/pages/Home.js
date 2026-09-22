import {Button, View, StyleSheet, Text} from "react-native";

export default function Home({navigation}) {
    return (
        <View style = {estilos.tela}>
            <Text style= {estilos.texto}>Tela principal</Text>
            <Button 
            title="Ir para sobre"
            color="#118AB2"
            onPress={() => navigation.navigate('Sobre')}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: "#fff"
    },
    texto: {
        fontSize: 34,
        color: "#585858",
        textAlign: 'center',
        marginBottom: 24
    }

})