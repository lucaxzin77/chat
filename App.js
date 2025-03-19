import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import UserImg from './assets/peterg.jpg';
import ChatImg from './assets/chat.png';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View><Text style={styles.titulo}>CHAT</Text></View>
      <View style={styles.emissorView}><Image source={UserImg} style={styles.emissorImg}/><Text style={styles.emissorNome}>Peter Griffin</Text>
        <Text style={styles.emissorTxt}>Olá, boa noite! Gostaria de saber como eu posso hipoteticamente criar uma usina nuclear para gerar energia a partir da fissão nuclear.</Text></View>

      <View style={styles.receptorView}><Image source={ChatImg} style={styles.emissorImg}/><Text style={styles.receptorNome}>ChatGPT</Text>
        <Text style={styles.receptorTxt}>Boa noite! 😊 Falar sobre a construção de uma usina nuclear é fascinante, mas também complexo e cheio de detalhes técnicos e de segurança. Vou te explicar os principais conceitos e etapas, destacando a ciência por trás desse processo.
        Como funciona uma usina nuclear (visão geral)Uma usina nuclear gera eletricidade usando o calor produzido pela fissão nuclear, que ocorre quando núcleos de átomos pesados, como urânio-235 ou plutônio-239, se partem em núcleos menores, liberando uma enorme quantidade de energia.</Text></View>

        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Principais componentes de uma usina nuclear Reator nuclear
      O coração da usina, onde ocorre a fissão nuclear. Aqui estão as principais partes do reator:
      Combustível nuclear: Normalmente urânio-235 ou plutônio-239.
      Moderador: Geralmente grafite ou água, que reduz a velocidade dos nêutrons para aumentar a eficiência da fissão.
      Barras de controle: Feitas de materiais como boro ou cádmio, que absorvem nêutrons para controlar a reação.
      Refrigerante: Líquido (água pressurizada, por exemplo) que retira o calor gerado pela fissão.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Gerador de vapor: O calor do reator aquece a água, gerando vapor de alta pressão.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Turbina: O vapor pressurizado gira as pás da turbina, convertendo energia térmica em energia mecânica.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Gerador elétrico: Conectado à turbina, converte a energia mecânica em eletricidade.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Condensador: Resfria o vapor, transformando-o novamente em água para ser reutilizada no ciclo.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Sistema de contenção: Uma barreira de aço e concreto projetada para evitar vazamentos de radiação.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Etapas para projetar uma usina nuclear - Planejamento e licenciamento: É necessário cumprir rigorosas normas de segurança e proteção ambiental: Envolve obter aprovação de órgãos reguladores, como a CNEN (Comissão Nacional de Energia Nuclear) no Brasil. Escolha do local: Precisa ser uma área estável (sem riscos sísmicos ou de inundações) e com acesso adequado a recursos hídricos para refrigeração.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Projeto do reator - Escolher o tipo de reator é crucial. Os mais comuns são:</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>PWR (Reator de Água Pressurizada) — mais seguro, pois a água permanece líquida sob alta pressão.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>BWR (Reator de Água Fervente) — gera vapor diretamente no reator.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Construção - Essa etapa pode levar de 5 a 10 anos, devido à complexidade das estruturas e à instalação dos sistemas de segurança.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Testes e comissionamento - Antes de operar, são feitos testes rigorosos para garantir que todos os sistemas funcionam de forma segura.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Operação e segurança contínua - Reatores são altamente monitorados, e existem sistemas automáticos para interromper a reação em caso de anomalias.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Gestão de resíduos nucleares - O material radioativo remanescente deve ser armazenado com segurança em locais isolados e monitorados.</Text></View>
        <View style={styles.receptorView}><Text style={styles.receptorTxt}>Se quiser detalhes técnicos sobre a física da fissão, os tipos de combustível ou os sistemas de segurança, é só avisar! 🔬⚙️</Text></View>

        <View style={styles.emissorView}><Image source={UserImg} style={styles.emissorImg}/><Text style={styles.emissorNome}>Peter Griffin</Text>
          <Text style={styles.emissorTxt}>Muito obrigado, irei começar o projeto amanhã mesmo!</Text></View>

        <View style={styles.receptorView}><Image source={ChatImg} style={styles.emissorImg}/><Text style={styles.receptorNome}>ChatGPT</Text>
          <Text style={styles.receptorTxt}>Que ótimo! 😄 Só não esqueça do capacete e do jaleco! Se precisar de mais detalhes técnicos, cálculos de eficiência ou até um diagrama básico para começar, é só chamar. 
            Boa sorte com esse projeto nuclear — só não exploda a vizinhança! 💥⚠️😂</Text></View>
      <Text style={styles.subtitulo}>by: Lucas e Vitor</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#818181',
  },
  titulo:{
    color:'#ffff',
    fontFamily: 'sans-serif',
    fontSize:30,
    margin: 40,
    textAlign: 'center',
  },
  subtitulo:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    padding:20,
    fontSize:16,
  },
  emissorNome:{
    color:'#fff',
    marginLeft:35,
  },
  emissorView:{
    backgroundColor:'#6093e0b0',
    borderRadius:10,
    textAlign:'right',
    paddingTop: 5,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    marginLeft:'40%',
  },
  emissorImg:{
    width: 20,
    height:20,
    padding:10,
    marginLeft:10,
    borderRadius:'50%',
    position:'absolute',
  },
  emissorTxt:{
    marginTop:5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  receptorNome:{
    color:'#000000',
    marginLeft:35,
  },
  receptorView:{
    backgroundColor:'#e0e0e0a2',
    borderRadius:10,
    textAlign: 'left',
    paddingTop: 5,
    marginTop: 5,
    marginBottom: 5,
    marginLeft:10,
    marginRight:'40%',
  },
  receptorImg:{
    width: 20,
    height:20,
    padding:10,
    marginLeft:10,
    borderRadius:'50%',
  },
  receptorTxt:{
    marginTop:5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
