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
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'red'}}>
       <WebView 
        source={{uri:'https://alaris-suite-cloud-staging.herokuapp.com/client/search'}}
      />
      <BarcodeScan/>
      </View>
    );
  }
}
