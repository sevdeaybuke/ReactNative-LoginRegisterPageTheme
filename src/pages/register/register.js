import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';



export default class Register extends React.Component {
  render() {
    return (
    <View style={styles.container}>  
        <View>
            <Text style={styles.inputHead}>Uygulamamıza Hoşgeldiniz,</Text>
            <Text style={styles.inputHead}>Keşfetmek İçin Kayıt Olunuz</Text>
        </View>
        <View>
            <TextInput
                  placeholder='E-Posta Adresiniz'
                  placeholderTextColor='blue'
                  style={styles.input}
                  underlineColorAndroid='transparent'
            >
            </TextInput>
            <TextInput
                        placeholder='Şifre Giriniz'
                        placeholderTextColor='blue'
                        style={styles.input}
                        underlineColorAndroid='transparent'
            >
            </TextInput>
            <TextInput
                        placeholder='Şifre Tekrar'
                        placeholderTextColor='blue'
                        style={styles.input}
                        underlineColorAndroid='transparent'
            >
            </TextInput>            
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Kayıt Olunuz </Text>
            </TouchableOpacity>
        </View>
    </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
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
  },
  inputHead: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center'
  }
});
