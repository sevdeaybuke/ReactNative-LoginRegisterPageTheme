import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Scene,Router,Stack} from 'react-native-router-flux';
import {YellowBox} from 'react-native';
import Indexs from './src';
import Login from './src/pages/login/login';
import Register from './src/pages/register/register';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated','Module RCTImageLoader']);


export default class App extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
        <Stack>
          <Scene key="indexs" component={Indexs}     title="Anasayfa" initial/>
          <Scene key="login" component={Login}       title="Giriş Yapınız" />
          <Scene key="register" component={Register} title="Kayıt Olunuz" />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#455a64',
  }
});
