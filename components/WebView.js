import React, { Component } from 'react';
import { View, WebView,Dimensions } from 'react-native';
import LeftIcon from '../components/Left_icon'

const {deviceWidth,deviceHeight} = Dimensions.get('window')
export default class WebViewPage extends Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerTitleStyle:{
            fontSize:16,
            color:'#fff',
            flex:1,
            textAlign: 'center'
        },
        headerStyle:{
            height: 50,
            backgroundColor: '#3497ff',
            justifyContent:'center'
        },
        headerLeft:<LeftIcon navigation={navigation}/>,
        headerRight:<View></View>
      })
    
    render(){
        
        return(
            <WebView 
                contentInset={{top:-40}}
                startInLoadingState={true}
                style = {{width:deviceWidth,height:deviceHeight-50}}
                source = {{uri:this.props.navigation.state.params.source}}
            > </WebView>
        );
    }
}