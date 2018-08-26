import React from 'react';
import {
        View,
        Text,
        StyleSheet
            } from 'react-native';

function HorizontalSeparator(props) {
  return (
    <View
      // style={[styles.separator,
      //         {
      //         borderTopColor: (props.color) ? props.color : '#eaeaea'
      //         }
      //       ]}
      style={styles.separator}
    />
  )
}

const styles = StyleSheet.create ({
  separator: {
    flex: 1,
    marginHorizontal: 5,
  }
})

export default HorizontalSeparator;
