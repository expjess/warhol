import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class App extends React.Component {
  render() {
    const ImageUri = 'http://images.undergroundfilmjournal.com/wp-images/andy_warhol_filming.jpg';
    return (
      <View style={styles.container}>
        <Image
          style={styles.wallpaper}
          source={{uri: ImageUri}}
        />
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          fontSize: 20,
          marginBottom: 20,
        }}>Hi Ryan!</Text>
      </View>
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
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

Exponent.registerRootComponent(App);
