'use strict';
import React, {Component} from 'react';
import BarcodeScan from './components/scanners'

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <BarcodeScan />
    );
  }
}
