import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//importando o hook e o componente para visualizar o video
import { useVideoPlayer, VideoView } from 'expo-video'

//apontando o arquivo com o video
const fonte = require('./src/assets/video/video.mp4');

//configurando o player para exibir o video


export default function App() {
  const playerConf = useVideoPlayer(fonte, (p) => {
    p.loop = true;
    p.play();
  })


  return (
    <View style={styles.container}>
      <VideoView
        style={{ width: '100%', height: '300' }}
        player={playerConf}
      />
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
});
