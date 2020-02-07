import React from 'react';
import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';

export default function AboutScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
        <Text style={styles.textContainer} >This page will hold credits, copyright info and subjects of developer desires</Text>
    </View>
  );
}

AboutScreen.navigationOptions = {
  title: 'About This App',
};

const styles = StyleSheet.create({
    textContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      marginVertical: 150,
      marginHorizontal: 50,
    },
});
  