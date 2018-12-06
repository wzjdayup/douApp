import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class BookDetailItem extends Component {
    render() {
        const rowData = this.props.rowData;
        return (
            <View style={styles.item}>
                <View style={styles.center}>
                    <Image style={styles.book_img} source={{ uri: rowData.image }} />
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.ellipsis} numberOfLines={1}>{rowData.title}</Text>
                    </View>
                    <View style={styles.mt_10}>
                        <Text style={[styles.publisher,styles.ellipsis]} numberOfLines={1}>{rowData.publisher}</Text>
                    </View>
                    <View style={styles.mt_10}>
                        <Text style={[styles.author,styles.ellipsis]} numberOfLines={1}>{rowData.author}</Text>
                    </View>
                    <View style={[styles.mt_10,{flexDirection:'row'}]}>
                        <Text style={styles.price}>{rowData.price}</Text>
                        <Text style={styles.pages}>{rowData.pages}页</Text>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    item:{
        display:'flex',
        flexDirection:'row',
        marginTop:5,
        marginBottom:5,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#ccc',
        height:120
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    book_img:{
        width:80,
        height:100
    },
    content:{
        marginTop:10,
        marginLeft:10
    },
    mt_10:{
        marginTop:10
    },
    ellipsis:{
        width:200
    },
    publisher:{
        color:'#a3a3a3',
        fontSize:13
    },
    price:{
        color:'#2bbaa3',
        fontSize:16
    },
    pages:{
        marginLeft:10,
        color:'#a7a0a0'
    }
})