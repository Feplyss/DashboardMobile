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

        <View style={styles.badges}><Badge>3</Badge></View>

      <Text style={styles.title}>Cursos</Text>

      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon color={'#ff0000'} icon="account-circle" />}
      />
      <ProgressBar style={styles.progressBar} progress={0.4} color={'#ff0000'} />
      <ProgressBar style={styles.progressBar} progress={0.7} color={'#888888'} />

      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon color={'#00ff00'} icon="account-circle" />}
      />
      <ProgressBar style={styles.progressBar} progress={0.6} color={'#00ff00'} />
      <ProgressBar style={styles.progressBar} progress={0.6} color={'#888888'} />

      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon color={'#0000ff'} icon="account-circle" />}
      />
      <ProgressBar style={styles.progressBar} progress={0.7} color={'#0000ff'} />
      <ProgressBar style={styles.progressBar} progress={0.5} color={'#888888'} />


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
  badges: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 24,
  },
  headerTitle: {
    color: '#ffffff',
  },
  progressBar: {
    height: 8,
  },
});
