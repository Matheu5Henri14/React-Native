import { View } from "react-native-web";
import TelaContador from "./src/pages/TelaContador";


export default function App(){
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TelaContador
      />
    </View>
  )
}