import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginFormPage from './loginform';
import { Actions } from 'react-native-router-flux';



export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <LoginFormPage />
          <Text style={styles.buttonText}
            onPress ={()=> Actions.register()}
          >Kayıt Olunuz</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF'
  }
});
