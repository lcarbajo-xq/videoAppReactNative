import React from 'react';
import {
        View,
        Text,
        StyleSheet,
        Image,
        TouchableOpacity
        } from 'react-native';
import { connect } from 'react-redux';

function MovieDetails (props){
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image
                    style={styles.cover}
                    source={{
                        uri: props.movie.medium_cover_image
                    }}
                />
                <View style={styles.genre}>
                    <Text style={styles.genreText}>{props.movie.year}</Text>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.movie.title_long}</Text>
                <Text style={styles.synopsis}>{props.movie.synopsis}</Text>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      flexDirection:'row'
    },

    cover: {
      height: 150,
      width:100,
      resizeMode: 'contain',
    },
    details: {  
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
    },
    title: {
      backgroundColor: '#ff7675',   
      fontSize: 18,
      color: '#44546b',
      textAlign: 'left',
      marginLeft: 2,
    },
    synopsis: {
        marginTop: 1,
        color: '#f7f1e3',
        backgroundColor: '#cf6a87',
        borderRadius: 10,
    }
  })

  function mapStateToProps (state, props) {
      return {
          movie: state.selectedMovie,
      }
  }

export default connect(mapStateToProps)(MovieDetails);