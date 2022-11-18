import React from 'react';
import { Image } from 'react-native';
import { List, ProgressBar } from 'react-native-paper';


const Curso = (props) => {
  var img = props.img;
  var text = props.text;
  var color = props.color;
  return (
      <View>

      <List.Accordion
          style={styles.cursoLista}
          title={<Text style={styles.cursoTitulo}>{text}</Text>}
          left={props => <Image style={styles.cursoImagem} source={img}/>}
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
        <ProgressBar progress={0.6} color={color} />

      </View>
  );
}

export default Curso;