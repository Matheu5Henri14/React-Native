//Imporatndo as bibliotecas da nevegação
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//importandoas telas que serao utilizadas na navegação
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";


//instaciando um objeto de navegação do tipo STACK
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#21295C'},
          headerTintColor: "#fff",
          headerTitleStyle: {fontWeight: 'bold'},
          headerShown: false
        }}
      >
        <Stack.Screen name='TelaHome' component={Home} options={{title: "PaginaPrincipal"}} />
        <Stack.Screen name='TelaSobre' component={Sobre} options={{title: "PaginaSobre", headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

