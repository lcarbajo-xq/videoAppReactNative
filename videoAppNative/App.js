/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native'; //AÑADIDO IMAGE
import Home from './src/screens/containers/home.js';
import Header from './src/sections/components/header.js';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategorieList from './src/videos/containers/categorie-list';
import API from './src/utils/api';


type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categorieList: []
  }
  async componentDidMount() {
    const movies =  await API.getSuggestion(10);
    const categories =  await API.getMovies();
    this.setState({
      suggestionList: movies,
      categorieList: categories,
    })
  }
  render() {
    return (
      <Home>
        <Header>
        </Header>
        <Text> Buscador </Text>
        <Text> Categorias </Text>
        <CategorieList
          list={this.state.categorieList}
          />
          <SuggestionList
            list={this.state.suggestionList}
            />
      </Home>
    );
  }
}
