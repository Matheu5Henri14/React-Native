import { View } from "react-native-web";


export default function Caixa(cor,numero){
    return(
        <View style={estilo.caixa}>
            <Text>1</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    caixa: {
        with: 80,
        height: 80,
        margin: 8,
        alignItems: 'center',
        justifycontent: 'center'
    }
})