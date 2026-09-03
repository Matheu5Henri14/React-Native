import {View, StyleSheet} from "react-native";
import PerfilCard from "../components/PerfilCard";


export default function Home(){
    return(
        <View style={estilos.tela}>
            <PerfilCard nome="Helton" cargo="CEO" cor="#118ab2"/>
            <PerfilCard nome="Detoni" cargo="Fazendeiro" cor ="#ef476f"/>
        </View>
    )
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizantal: 20,
        backgrouindColor: '#f0f0f0'
    }
})