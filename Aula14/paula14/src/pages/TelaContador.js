import { useEffect, useState } from "react";
import { Text, View } from "react-native-web";


export default function TelaContador(){
  const  [contador, setContador] = useState(0);


  useEffect(()=>{
    console.log("Chamando algo");
    setContador(contador + 1)
    
  }, [])

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{contador}</Text>
        </View>
    )
}