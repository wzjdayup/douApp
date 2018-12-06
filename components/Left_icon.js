import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';

export default class LeftIcon extends Component{
    handleTouchLeft(){
        this.props.navigation.goBack()
    }
    render(){
        return (
            <TouchableOpacity onPress={this.handleTouchLeft.bind(this)}>
                <View style={styles.back}></View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    back:{
        borderLeftWidth:4,
        borderBottomWidth:4,
        width:15,
        height:15,
        transform:[{rotate:'45deg'}],
        borderColor:'#fff',
        marginLeft:10
    }
})