import React, { Component } from 'react';
import {View,TextInput,StyleSheet} from 'react-native';

export default class Search extends Component {
    render () {
        return (
            <View style={styles.flex_1}>
                <TextInput style={[styles.flex_1,styles.input]} {...this.props}  underlineColorAndroid='transparent'></TextInput>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    flex_1:{
        flex:1
    },
    input:{
        borderWidth:1,
        height:40,
        borderColor:'#ddd',
        paddingLeft:5
    }
})