import React from 'react';
import {
        View,
        Text,
        StyleSheet
        } from 'react-native';

function Timer (props) {
  return(
    <View style={styles.timer}>
      <Text>{props.actualTime}</Text>
      <Text>/</Text>
      <Text>{props.totalTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  timer: {
    flexDirection: 'row',
  }
})

export default Timer;
