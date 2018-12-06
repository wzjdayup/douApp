import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class MusicItem extends Component {
    loadDetail(rowData) {
        const { navigate } = this.props.navigation;
        navigate('WebView', {
            source: rowData.alt,
            title: rowData.title
        })
    }
    render() {
        const rowData = this.props.rowData.item;
        const authors = rowData.author;
        const names = [];
        for (var i in authors) {
            names.push(authors[i].name);
        }
        return (
            <View style={styles.item}>
                <View style={styles.center}>
                    <Image style={styles.book_img} source={{ uri: rowData.image }} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.flex_1} numberOfLines={1}>名称：{rowData.title}</Text>
                    <Text style={styles.textWidth} numberOfLines={1}>演唱：{names}</Text>
                </View>
                <View>
                    <Text style={styles.flex_1} numberOfLines={1}>时间：{rowData.attrs.pubdate}</Text>
                    <Text style={styles.textWidth} numberOfLines={1}>评分：{rowData.rating.average}</Text>
                </View>
                <View style={styles.center}>
                    <TouchableOpacity style={styles.goDou} onPress={this.loadDetail.bind(this, rowData)}>
                        <Text>详情</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    item: {
        marginTop: 10,
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    book_img: {
        width: 70,
        height: 70,
        borderRadius:35
    },
    content: {
        marginTop: 10,
    },
    flex_1: {
        flex: 1
    },
    textWidth: {
        width: 120
    },
    goDou: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 40,
        borderWidth: 1,
        borderColor: '#3c9bfd',
        marginTop: 5,
        marginLeft: 10,
        borderRadius: 3
    }
})