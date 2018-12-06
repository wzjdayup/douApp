import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class MovieItem extends Component {
    loadDetail(rowData) {
        const { navigate } = this.props.navigation;
        navigate('WebView', {
            source: rowData.alt,
            title: rowData.title
        })
    }
    render() {
        const rowData = this.props.rowData.item;
        const casts = rowData.casts;
        var names = [];
        for(var i in casts){
            names.push(casts[i].name);
        }
        return (
            <View style={styles.item}>
                <View style={styles.center}>
                    <Image style={styles.book_img} source={{ uri: rowData.images.medium }} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.textWidth} numberOfLines={1}>名称：{rowData.title}</Text>
                    <Text style={styles.textWidth} numberOfLines={1}>演员：{names}</Text>
                    <Text style={styles.textWidth} numberOfLines={1}>评分：{rowData.rating.average}</Text>
                    <Text style={styles.textWidth}>时间：{rowData.year}</Text>
                    <Text style={styles.textWidth}>标签：{rowData.genres}</Text>
                    <TouchableOpacity style={styles.goDou} onPress={this.loadDetail.bind(this,rowData)}>
                        <Text>详情</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft:10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        height: 140
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    book_img: {
        width: 80,
        height: 110
    },
    content: {
        marginTop: 10,
    },
    textWidth: {
        marginLeft: 10,
        width:200
    },
    goDou:{
        justifyContent: 'center',
        alignItems: 'center',
        height:25,
        width:40,
        borderWidth:1,
        borderColor:'#3c9bfd',
        marginTop:5,
        marginLeft:10,
        borderRadius:3
    }
})