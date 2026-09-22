import { FlatList } from "react-native";
import ItemContato from "../components/ItemContato";

const CONTATOS = [
    {id: '1', nome: 'Helton Azevedo', cargo: 'Diretor PHD de Tecnologia', icone: 'user'},

    {id: '2', nome: 'Maria Eduarda', cargo: 'Dirtora de Pesquisas Espaciais Avançada', icone: 'smartphone'},

    {id: '3', nome: 'João Vitor', cargo: 'Dono do Sicoob', icone: 'server'},

    {id: '4', nome: 'Thiago Detoni', cargo: 'Fazendeiro', icone: 'briefcase'}
]

export default function Home2() {
    return (
        <FlatList
        data={CONTATOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <ItemContato
            contato={item}
        />
        )} 
        />
    );
}