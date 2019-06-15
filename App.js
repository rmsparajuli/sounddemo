import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SoundDemo from './src/index';
import CameraDemo from './Practice/camerademo/index'
import { Camera } from 'expo-camera';
import AppContainer from './Practice/contactmanager/index'
export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
