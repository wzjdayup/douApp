/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  Image
} from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';
import BookList from './route/Book_list.js';
import MovieList from './route/Movie_list.js';
import MusicList from './route/Music_list.js';
import BookDetail from './route/Book_detail.js';
import WebView from './components/WebView'



const douAppTab = TabNavigator({
  BookList: {
    screen: BookList,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '图书',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/tab_home.png')} style={[{ height: 22, width: 22 },{tintColor:tintColor}]} />
      )
    })
  },
  MovieList: {
    screen: MovieList,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '电影',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/tab_home.png')} style={[{ height: 22, width: 22 },{tintColor:tintColor}]} />
      )
    })
  },
  MusicList: {
    screen: MusicList,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '音乐',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/tab_home.png')} style={[{ height: 22, width: 22 },{tintColor:tintColor}]} />
      )
    })
  }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#ff8500', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片未选中颜色
      showIcon: true,
      indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      style: {
        backgroundColor: '#fff'
      }
    }
  })
  const douApp = StackNavigator({
    Main:{
      screen:douAppTab,
      navigationOptions:{
        header:null
      }
    },
    BookDetail:{screen:BookDetail},
    WebView:{screen:WebView}
  })

AppRegistry.registerComponent('douApp', () => douApp);