import { FlatList, StyleSheet, View, Text } from "react-native";

const FRUTAS = ['Maçã', 'Banana',' Uva', 'Manga', 'Abacaxi', 'Ameixa', 'Kiwi', 'Morango', 'tomate'];

export default function Home() {
  return (
    <View style = {estilos.container}>
      <Text style = {estilos.titulo}> Página Home</Text>
      <FlatList
      data={FRUTAS}
      keyExtractor={ (item) => item }
      renderItem={({item}) => (<View style={estilos.linha}>
        <Text style={estilos.texto}>{item}</Text>
      </View>)}
      contentContainerStyle={estilos.conteudo}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: 'center',
  },
  linha: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#eeeeee'
  },
  texto:{
    textAlign: 'center'
  },
  conteudo:{
    paddingTop: 40,
  },
  titulo: {
    marginTop: 20,
    backgroundColor: 'lightgray',
    borderRadius: 5

  }
});
