import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image

} from 'react-native';



import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;

    this.state.name === ''
      ? alert('Por favor digite uma palavra')
      : Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.textContainer1}>
        <Header
          backgroundColor={'#fff'}
          centerComponent={{
            text: 'Conversor de Texto Para Fala',
            style: { color: '#000', fontSize:13, fontWeight:"bold"},
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://cdn.icon-icons.com/icons2/806/PNG/512/chat-44_icon-icons.com_65944.png',
          }}
        />

        <Text style={styles.text}> Digite a Palavra </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.name}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.speak}>
            <Text style={styles.text}> Ouça </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
       borderRadius:25,
  },
  textContainer1: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    marginTop:0,
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
     color:"white",
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#000',
    marginTop: 80,
    borderRadius: 10,
    width: '25%',
    alignSelf: 'center',
    height: 80,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
