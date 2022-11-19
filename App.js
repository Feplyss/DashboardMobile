import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { List, ProgressBar, Appbar } from 'react-native-paper';
import { Cursos } from './Cursos';

const Title = (props) => {
  var text = props.text;
  return (
    <View>

      <Text style={styles.title}>{text}</Text>

    </View>
  );
}

const Badge = (props) => {
  var img = props.img;
  return (
    <View>

      <View style={styles.badge}><Image style={styles.badgeImagem} source={img} /></View>

    </View>
  );
}

const Curso = (props) => {
  var img = props.img;
  var text = props.text;
  var color = props.color;
  return (
    <View>

      <List.Accordion
        style={styles.cursoLista}
        title={<View><Text style={styles.cursoTitulo}>{text}</Text> <ProgressBar style={styles.cursoBarra} ProgressBar progress={0.6} color={color} /></View>}
        left={props => <Image style={styles.cursoImagem} source={img} />}
      >

        <List.Item
          style={styles.cursoItem}
          title="Faltas"
          description="3"
          left={props => <List.Icon color={'#000000'} icon="book-off" />}
        />
        <List.Item
          style={styles.cursoItem}
          title="Aula mais recente"
          description="Classes Java"
          left={props => <List.Icon color={'#000000'} icon="book-clock" />}
        />
        <List.Item
          style={styles.cursoItem}
          title="Tarefa mais recente"
          description="Criar uma classe"
          left={props => <List.Icon color={'#000000'} icon="calendar-clock" />}
        />

      </List.Accordion>

    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>

      <Appbar.Header style={styles.header}>
        <Image style={styles.logo} source={require("./assets/senac.png")} />
        <Image style={styles.user} source={require("./assets/userPlaceholder.png")} />
      </Appbar.Header>

      <Title text = 'Badges'/>

      <View style={styles.badgeArea}>
        <ScrollView style={styles.scroll} horizontal={true}>

          <Badge img={Cursos.java.imagem} />
          <Badge img={Cursos.sql.imagem} />
          <Badge img={Cursos.nodejs.imagem} />
          <Badge img={Cursos.python.imagem} />
          <Badge img={Cursos.cpp.imagem} />

        </ScrollView>
      </View>

      <Title text = 'Cursos'/>

      <Curso img={Cursos.java.imagem} text={Cursos.java.nome} color={Cursos.java.cor} />
      <Curso img={Cursos.nodejs.imagem} text={Cursos.nodejs.nome} color={Cursos.nodejs.cor} />
      <Curso img={Cursos.python.imagem} text={Cursos.python.nome} color={Cursos.python.cor} />
      <Curso img={Cursos.cpp.imagem} text={Cursos.cpp.nome} color={Cursos.cpp.cor} />
      <Curso img={Cursos.sql.imagem} text={Cursos.sql.nome} color={Cursos.sql.cor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
  logo: {
    width: 72,
    height: 43,
    marginLeft: 20,
    marginRight: 'auto',
  },
  user: {
    width: 72,
    height: 43,
    marginRight: 20,
    marginLeft: 'auto',
    width: 50,
    height: 50,
  },
  header: {
    backgroundColor: '#004587',
  },
  scroll: {
    paddingRight: 40,
  },
  badgeArea: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  badge: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#c7a852",
    marginLeft: 40,
    marginBottom: 20,
  },
  badgeImagem: {
    width: '60%',
    height: '60%',
    margin: 'auto',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "5%",
    fontWeight: 500,
  },
  headerTitle: {
    color: '#ffffff',
  },
  progressBar: {
    height: 6,
    width: 200,
    borderRadius: 100,
  },
  cursoLista: {
    backgroundColor: '#ffffff',
  },
  cursoItem: {
    paddingLeft: 24,
    backgroundColor: "#eef5f9",
  },
  cursoImagem: {
    width: 40,
    height: 40,
    margin: 10,
    resizeMode: 'contain',
  },
  cursoTitulo: {
    fontWeight: 500,
    marginBottom: 8,
  },
  cursoBarra: {
    width: 200,
    marginRight: 24,
    borderRadius: 100,
    marginBottom: 4,
  }
});