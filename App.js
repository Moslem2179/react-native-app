'use strict';
import React, {Component} from 'react';
import BarcodeScan from './components/scanners'

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={[styles.box, styles.box1]}>
       <WebView
        source={{uri:'https://facebook.github.io/react-native/docs/webview#source'}}
        style={{marginTop: 20}}
      />
       </View>
       <View style={[styles.box, styles.box1]}>
          <BarcodeScan/>
       </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    flex: 1,
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  }
});
