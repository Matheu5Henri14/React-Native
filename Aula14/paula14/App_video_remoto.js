import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//importando o hook e o componente para visualizar o video
import { useVideoPlayer, VideoView } from 'expo-video'
import { TouchableOpacity } from 'react-native-web';

//apontando o arquivo com o video
const fonte = 'https://www.gov.br/pt-br/midias-agorabrasil/video-fundo.mp4/@@download/file';

//configurando o player para exibir o video


export default function App() {
  const playerConf = useVideoPlayer(fonte, (p) => {
    // p.loop = true;
    // p.play();
  })


  return (
    <View style={styles.container}>
      <VideoView
        style={{ width: '100%', height: '300', borderRadius: 22 }}
        player={playerConf}
        contentFit='contain'
        nativeControls={false}

      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          playerConf.playing ?
            playerConf.pause() :
            playerConf.play();
        }}
        >
        <Text>{playerConf.playing ? "Pausar" : "Tocar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: "#dadada",
    padding: 12,
    borderRadius: 8,
    marginTop: 26
  }
});
