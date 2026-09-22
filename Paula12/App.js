
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';


import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Sobre from './src/pages/Sobre';


const Drawer = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
    </NavigationContainer >
  )
}
