import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

// Local imports

// Functions

// Component
export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  )
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: .1,
    backgroundColor: 'yellow',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  },
  text: {
    padding: 20,
    textAlign: 'center'
  }
})
