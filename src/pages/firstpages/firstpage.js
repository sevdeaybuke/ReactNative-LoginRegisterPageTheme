import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class FirstPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.buttonContainer}
          onPress={()=> Actions.login()}
          >
              <Text style={styles.buttonText}>Giriş Yapınız</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonContainer}
          onPress={()=> Actions.register()}>
              <Text style={styles.buttonText}>Kayıt Olunuz</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#546e7a',
  },
  buttonContainer: {
    width: 300,
    backgroundColor: '#718792',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: 16
  }
});
