import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Aura from './src/components/Aura';
import {Aura9k} from './src/components/Aura';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo</Text>
      <Text style={styles.txtNegrito}>Não farme aura!</Text>
      <Text style={styles.txtDiferente}>Aura + Ego = <span style={styles.txtRego}>Rego</span></Text>
      <Aura />

      <Aura9k />

      <Text style={[styles.txtDiferente, styles.txtNegrito]}>
        {10+20+15-5+30-12+9}
      </Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNegrito: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  txtDiferente: {
    fontWeight: 'bold',
    fontSize: 14,
    margin: 10, 
  },
  txtRego: {
    color: 'red'
  }
});
