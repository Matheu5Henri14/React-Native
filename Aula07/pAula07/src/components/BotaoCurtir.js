import { Button } from "react-native-web";

export default function BotaoCurtir({nomePost, aoPressionar}){
    return(
        <Button
            title="Curtir"
            color="#EF476F"
            onPress={() => aoPressionar(nomePost)}
            
        />
    )
}