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
  var curso = props.curso;
  return (
    <View>

      <View style={styles.badge}><Image style={styles.badgeImagem} source={curso.imagem} /></View>

    </View>
  );
}

const Curso = (props) => {
  var curso = props.curso;
  return (
    <View>

      <List.Accordion
        style={styles.cursoLista}
        title={<View><Text style={styles.cursoTitulo}>{curso.nome}</Text> <ProgressBar style={styles.cursoBarra} ProgressBar progress={0.6} color={curso.cor} /></View>}
        left={props => <Image style={styles.cursoImagem} source={curso.imagem} />}
      >

        <List.Item
          style={styles.cursoItem}
          title={props => <Text style={styles.cursoNome}>Faltas</Text>}
          description={props => <Text style={styles.cursoDesc}>3</Text>}
          left={props => <List.Icon color={'#000000'} icon="book-off" />}
        />
        <List.Item
          style={styles.cursoItem}
          title={props => <Text style={styles.cursoNome}>Aula mais recente</Text>}
          description={props => <Text style={styles.cursoDesc}>Classes Java</Text>}
          left={props => <List.Icon color={'#000000'} icon="book-clock" />}
        />
        <List.Item
          style={styles.cursoItem}
          title={props => <Text style={styles.cursoNome}>Tarefa mais recente</Text>}
          description={props => <Text style={styles.cursoDesc}>Criar uma classe</Text>}
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
        <Image style={styles.menuIcon} source={require("./assets/menu.png")} />
        <Image style={styles.logo} source={require("./assets/senac.png")} />
        <Image style={styles.user} source={require("./assets/user.png")} />
      </Appbar.Header>

      <Title text = 'Badges'/>

      <View style={styles.badgeArea}>
        <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>

          <Badge curso={Cursos.java} />
          <Badge curso={Cursos.sql} />
          <Badge curso={Cursos.nodejs} />
          <Badge curso={Cursos.python} />
          <Badge curso={Cursos.cpp} />

        </ScrollView>
      </View>

      <Title text = 'Cursos'/>

      <Curso curso={Cursos.java} />
      <Curso curso={Cursos.nodejs} />
      <Curso curso={Cursos.python} />
      <Curso curso={Cursos.cpp} />
      <Curso curso={Cursos.sql} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'scroll',
  },
  header: {
    backgroundColor: '#004587',
    height: 64,
  },
  menuIcon: {
    width: 32,
    height: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  logo: {
    width: 80,
    height: 48,
    marginRight: 16,
    resizeMode: 'contain',
  },
  user: {
    width: 32,
    height: 40,
    marginRight: 20,
    marginLeft: 'auto',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 32,
    marginLeft: 32,
    fontWeight: 500,
  },
  scroll: {
    paddingRight: 32,
  },
  badgeArea: {
    flexDirection: "row",
    alignItems: 'center',
    width: '100%',
    height: 88,
  },
  badge: {
    width: 88,
    height: 88,
    borderRadius: 100,
    backgroundColor: "#d9c738",
    marginLeft: 32,
  },
  badgeImagem: {
    width: '60%',
    height: '60%',
    margin: 'auto',
    resizeMode: 'contain',
  },
  headerTitle: {
    color: '#ffffff',
  },
  progressBar: {
    height: 8,
    width: 200,
    borderRadius: 100,
  },
  cursoLista: {
    backgroundColor: '#ffffff',
    padding: 0,
    paddingRight: 16,
  },
  cursoItem: {
    backgroundColor: "#eef5f9",
  },
  cursoNome: {
    fontSize: 14,
    fontWeight: 500,
  },
  cursoDesc: {
    fontSize: 12,
    color: '#111111'
  },
  cursoImagem: {
    width: 40,
    height: 40,
    margin: 16,
    resizeMode: 'contain',
  },
  cursoTitulo: {
    fontWeight: 500,
    marginBottom: 8,
    fontSize: 14,
  },
  cursoBarra: {
    width: 200,
    marginRight: 24,
    borderRadius: 100,
    marginBottom: 8,
  }
});