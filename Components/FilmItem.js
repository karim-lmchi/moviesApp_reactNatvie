import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function FilmItem () {
    return (
      <View style={styles.main_container}>
        <Text style={styles.title_text}>Titre du film</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  main_container: {
    height: 190
  },
  title_text: {
    
  }
})