import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> 
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .12,
    backgroundColor: 'yellow',
  },
  text: {
    paddingTop: 40,
    fontSize: 40,
    color: 'black',
    textAlign: 'center'
  }
});