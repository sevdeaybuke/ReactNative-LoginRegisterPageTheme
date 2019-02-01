import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import FirstPage from './pages/firstpages/firstpage'


export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <FirstPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
