import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View, TextInput } from "react-native";
import {useState} from "react";

const dadosForm = {
    nome: '',
    idade: '',
    senha: '',
    maisInfos: ''
}


export default function Home() {
    const [nomeestado, setNomeestado] = useState('');
    
    function aoDigitar(textoDigitado) {
        console.log(`Texto digitado: ${textoDigitado}`);
        setNomeestado(textoDigitado);
        dadosForm.nome = textoDigitado;

    }

    function aoEnviar() {
        //destructurin do objeto
        const {nome, idade, senha, maisInfos} = dadosForm;
        console.log('Formulario enviado!: ', {nome, idade, senha, maisInfos});

        
    }
    return (
        <View style={estilo.container}>
            <Text></Text>
            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Nome</Text>
                <TextInput
                    placeholder="Digite aqui o seu texto"
                    style={estilo.input}
                    onChangeText={setNomeestado}
                    value={nomeestado}
                    // keyboardType="numeric"
                />

            </View>

            <View>
                <Text style={estilo.label}>senha</Text>
                <TextInput
                    placeholder="Digite sua senha"
                    style={estilo.input}
                    // onChangeText={aoDigitar}
                    secureTextEntry
                    onChangeText={(texto) => (dadosForm.senha = texto)}

                />
            </View>

            <View style={estilo.containerInput}>
                <Text style={estilo.label}>Idade</Text>
                <TextInput
                    style={estilo.input}
                    placeholder="Digite a idade"
                    onChangeText={(texto) => (dadosForm.idade = texto)}

                />
            </View>



            <View>
                <Text style={estilo.label}>a</Text>
                <TextInput
                    placeholder="conte mais sobre vc"
                    style={estilo.input}
                    // onChangeText={aoDigitar}
                    onChangeText={(texto) => (dadosForm.maisInfos = texto)}

                    multiline
                    maxLength={60}
                />
            </View>
            <Button
            title="Enviar"
            color="#118AB2"
            onPress={aoEnviar}
            />

        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dadada',
        flexDirection: 'column',

    },
    containerInput: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginBottom: 12,
        marginStart: 6

    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 10
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
    }
})