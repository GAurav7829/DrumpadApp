import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

const drumKit = {
  'bass': require('./assets/bass.mp3'),
  'bass2': require('./assets/bass2.mp3'),
  'bass3': require('./assets/bass3.mp3'),
  'cymbal': require('./assets/cymbal.mp3'),
  'cymbal2': require('./assets/cymbal2.mp3'),
  'drumstick': require('./assets/drumstick.mp3'),
  'hihat': require('./assets/hihat.mp3'),
  'snare': require('./assets/snare.mp3'),
  'tom': require('./assets/tom.mp3')
}
const colors = {
  bass: '#E7A',
  bass2: '#1F5',
  bass3: '#7AD',
  cymbal: '#F17',
  cymbal2: '#F0E',
  drumstick: '#0B0157',
  hihat: '#70E',
  snare: '#C0071E',
  tom: '#0B5E55'
}

export default class App extends React.Component {

  playSound = async drumKitSound => {
    try {
      const soundObject = new Audio.Sound();
      const path = drumKit[drumKitSound];
      await soundObject.loadAsync(path);
      await soundObject.playAsync().then(status => {
        console.log(status);
        setTimeout(() => {
          soundObject.unloadAsync().then(s => {
            console.log(s);
          })
        }, status.durationMillis);
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appName}>
          <Text style={styles.appNameText}>Drum Kit</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => { this.playSound('bass') }}
            style={[{ backgroundColor: colors.bass }, styles.button]}
          ></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.playSound('bass2') }}
            style={[{ backgroundColor: colors.bass2 }, styles.button]}
          ></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.playSound('bass3') }}
            style={[{ backgroundColor: colors.bass3 }, styles.button]}
          ></TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => { this.playSound('cymbal') }}
            style={[{ backgroundColor: colors.cymbal }, styles.button]}
          ></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.playSound('cymbal2') }}
            style={[{ backgroundColor: colors.cymbal2 }, styles.button]}
          ></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.playSound('drumstick') }}
            style={[{ backgroundColor: colors.drumstick }, styles.button]}
          ></TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => { this.playSound('hihat') }}
            style={[{ backgroundColor: colors.hihat }, styles.button]}
          ></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.playSound('snare') }}
            style={[{ backgroundColor: colors.snare }, styles.button]}
          ></TouchableOpacity>
          <TouchableOpacity onPress={() => { this.playSound('tom') }}
            style={[{ backgroundColor: colors.tom }, styles.button]}
          ></TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center'
  },
  rowContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    height: 130,
    width: 100,
    margin: 10,
    borderRadius: 10
  },
  appName: {
    backgroundColor: '#DECADE',
    paddingVertical: 20
  },
  appNameText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#666',
    fontWeight: 'bold'
  }
});
