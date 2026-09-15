import { Text, View } from "react-native";
import { useState } from "react";
import { Button } from "react-native";


export default function Contador(){
    const [valor, setValor] = useState(0);
    const [visivel, setVisivel] = useState(false);
    function incrementa() {
        console.log(`valor atual: ${valor}`);
        setValor(valor + 1);
        console.log(`Novo valor: ${valor}`);
    }

    function decrementa(){
        setValor(valor > 0? valor - 1: 0);
    }

    function toogle() {
        setVisivel(!visivel);
    }
    return (
        <View style={{flex: 1, justyfyContent: 'center', alignItems: 'center'}}>
            <Button
                title="+"
                onPress={incrementa}
            />
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{valor}</Text>
                <Button
                title="+"
                onPress={decrementa}
            />
            {visivel ? (<Text>Esse texto é um segredo!</Text>): false}
            <Button
            title={visivel ? 'Esconder': 'Mostrar'}
            onPress={toogle}
            />
        </View>
    )
}