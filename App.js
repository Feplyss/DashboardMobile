import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { List, ProgressBar, Appbar, Badge } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>

      <Appbar.Header style={styles.header}>
        <Appbar.Content titleStyle={styles.headerTitle} title="TITULO" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>

      <Text style={styles.title}>Badges</Text>

        <View style={styles.badgeArea}>
          <Badge style={styles.badge}>1</Badge>
          <Badge style={styles.badge}>2</Badge>
          <Badge style={styles.badge}>3</Badge>
        </View>

      <Text style={styles.title}>Cursos</Text>

      <List.Accordion
        title="Curso"
        description= {props => <ProgressBar style={styles.progressBar} progress={0.4} color={'#cc0000'} />}
        left={props => <List.Icon color={'#cc0000'} icon="account-circle" />}
        
      />

      <List.Accordion
        title="First Item"
        description={props => <ProgressBar style={styles.progressBar} progress={0.6} color={'#00cc00'} />}
        left={props => <List.Icon color={'#00cc00'} icon="account-circle" />}
      />

      <List.Accordion
        style={styles.cursoLista}
        title="First Item"
        left={props => <List.Icon color={'#0000cc'} icon="account-circle" />}
      >
      
      <List.Item
        style={styles.itemCurso}
        title="Aula mais recente"
        description="13/10/2022"
        left={props => <List.Icon color={'#000000'} icon="book-clock" />}
      />
      <List.Item
        style={styles.itemCurso}
        title="Tarefa mais recente"
        description="13/10/2022"
        left={props => <List.Icon color={'#000000'} icon="calendar-clock" />}
      />

      </List.Accordion>
      <ProgressBar progress={0.7} color={'#0000cc'} />
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
    backgroundColor: '#0000aa',
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
  },
  title: {
    fontSize: 24,
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "5%",
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
    backgroundColor: '#f',
  },
  itemCurso: {
    marginLeft: 24,
  }
});
