import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { List, ProgressBar } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon color={'#ff0000'} icon="account-circle" />}
      />
      <ProgressBar style={styles.progressBar} progress={0.4} color={'#ff0000'} />
      <ProgressBar style={styles.progressBar} progress={0.7} color={'#0000ff'} />

      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon color={'#00ff00'} icon="account-circle" />}
      />
      <ProgressBar style={styles.progressBar} progress={0.9} color={'#00ff00'} />

      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon color={'#0000ff'} icon="account-circle" />}
      />
      <ProgressBar style={styles.progressBar} progress={0.6} color={'#0000ff'} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  progressBar: {
    height: 8,
  }
});
