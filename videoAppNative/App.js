/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native'; 
import Home from './src/screens/containers/home.js';
import Header from './src/sections/components/header.js';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategorieList from './src/videos/containers/categorie-list';
import API from './src/utils/api';
import Video from 'react-native-video';
import Player from './src/videos/containers/player';

import { Provider } from 'react-redux';
import store from './src/utils/store';


type Props = {};
export default class App extends Component<Props> {

  async componentDidMount() {
    const movies =  await API.getSuggestion(10);
    store.dispatch({
      type:'SET_MOVIE_LIST',
      payload:{
        movies
      }
    })

    const categories =  await API.getMovies();
    store.dispatch({
      type:'SET_SUGGESTION_LIST',
      payload:{
        categories
      }
    })
  }
  render() {
    return (
      <Provider
        store={ store }>
        <Home>
          <Header>
          </Header>
          <Player />
          <Text> Buscador </Text>
          <CategorieList
            />
            <SuggestionList
              />
        </Home>
      </Provider>
    );
  }
}
