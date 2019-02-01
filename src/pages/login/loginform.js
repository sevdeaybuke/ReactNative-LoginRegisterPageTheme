import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';



export default class LoginFormPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TextInput
                placeholder='email'
                placeholderTextColor='blue'
                style={styles.input}
                underlineColorAndroid='transparent'
          >
          </TextInput>
          <TextInput
                      placeholder='password'
                      placeholderTextColor='blue'
                      style={styles.input}
                      underlineColorAndroid='transparent'
          >

          </TextInput>
          <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Giriş Yapınız</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
      width: 300,
      backgroundColor: '#ffffff',
      borderRadius: 25,
      fontSize: 16,
      marginVertical: 5,
      color: '#FFF',
  },
  buttonContainer: {
      backgroundColor: '#2980b9',
      width:300,
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13, 
  },
  buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: 'bold',
  }
});
