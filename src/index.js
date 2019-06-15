import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { Audio } from 'expo'
import styles from './styles'

const selectColors = {
  1: "#FF4848",
  2: "#74B9FF",
  3: "#25CCF7",
  4: "#6ab04c",
  5: "#218F76",
  6: "#F4C724",
  7: "#616C6F",
  8: "#EAF0F1",
  9: "#FF4848",
  10: "#6ab04c",
}
const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav'),
}
class SoundDemo extends Component {
  playSound = async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = soundList[number]
      await soundObject.loadAsync(path)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        }) .catch(error => {console.log(error)})

    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <ScrollView style={styles.container} >
        <View style={{ marginTop: 2 }}>
          <Image
            source={require('./assets/logo.png')}
            style={{ height: 100, width: 100, alignSelf: "center" }}
          />
        </View>

        <View style={[styles._insideContainer, { marginTop: 20, padding: 1 }]}>
          <TouchableOpacity
            onPress={() => {
              this.playSound('one')
            }}

            style={[styles._forButton, { backgroundColor: selectColors[1] }]}>
            <Text style={styles._forText} >
              one
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> this.playSound("two")}
            style={[styles._forButton, { backgroundColor: selectColors[2] }]}
          >
            <Text style={styles._forText} >
              Two
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles._insideContainer, { padding: 1 }]}>
          <TouchableOpacity
            onPress={() => {
              this.playSound("three")
            }}
            style={[styles._forButton, { backgroundColor: selectColors[3] }]}>
            <Text style={styles._forText} >
              Three
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("four")
            }} style={[styles._forButton, { backgroundColor: selectColors[4] }]}>
            <Text style={styles._forText} >
              Four
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles._insideContainer, { padding: 1 }]}>
          <TouchableOpacity
            onPress={() => {
              this.playSound("five")
            }} style={[styles._forButton, { backgroundColor: selectColors[5] }]}>
            <Text style={styles._forText} >
              Five
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("six")
            }} style={[styles._forButton, { backgroundColor: selectColors[6] }]}>
            <Text style={styles._forText} >
              Six
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles._insideContainer, { padding: 1 }]}>
          <TouchableOpacity
            onPress={() => {
              this.playSound("seven")
            }} style={[styles._forButton, { backgroundColor: selectColors[7] }]}>
            <Text style={styles._forText} >
              Seven
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("eight")
            }} style={[styles._forButton, { backgroundColor: selectColors[8] }]}>
            <Text style={styles._forText} >
              Eight
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles._insideContainer, { padding: 1 }]}>
          <TouchableOpacity
            onPress={() => {
              this.playSound("nine")
            }} style={[styles._forButton, { backgroundColor: selectColors[9] }]}>
            <Text style={styles._forText} >
              Nine
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.playSound("ten")
            }} style={[styles._forButton, { backgroundColor: selectColors[10] }]}>
            <Text style={styles._forText} >
              Ten
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

export default SoundDemo;