import React from 'react';
import {
        TouchableHighlight,
        TouchableOpacity,
        TouchableWithouFeedback,
        View,
        Text,
        Slider,
        StyleSheet
        } from 'react-native';
import Video from 'react-native-video';

function ProgressBar (props) {
  return(
    <View style={styles.bar}>
      <Slider
        onValueChange={props.sliderActualValue} />
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    width: '45%',
  }
})

export default ProgressBar;
