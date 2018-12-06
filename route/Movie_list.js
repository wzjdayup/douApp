import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ListView, StyleSheet,FlatList } from 'react-native';
import Search from './../components/Search'
import service from './../utils/service'
import request from './../utils/request'
import MovieItem from './Movie_item'
export default class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            keywords: '幸福'
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        const url = `${service.movie_search}?count=10&q=${this.state.keywords}`;
        request(url).then(res => {
            this.setState({
                dataSource: res.subjects
            })
        })
    }
    changeText(val){
        this.setState({
            keywords:val
        })
    }
    search(){
        this.getData();
    }
    render() {
        return (
            <ScrollView >
                <View style={styles.search}>
                    <Search placeholder='请输入电影的名称' onChangeText={this.changeText.bind(this)}></Search>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.fontFFF} onPress={this.search.bind(this)}>搜索</Text>
                    </TouchableOpacity>
                </View>
                {this.state.dataSource.length > 0 ?
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={(rowData) => <MovieItem rowData={rowData} navigation={this.props.navigation}/>}
                    ></FlatList> : null}
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    search: {
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row',
        marginTop: 5
    },
    btn: {
        width: 45,
        backgroundColor: '#0091ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontFFF: {
        color: '#fff'
    }
})