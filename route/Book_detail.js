import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import LeftIcon from '../components/Left_icon'
import service from '../utils/service'
import request from '../utils/request'
import BookDetailItem from './Book_detail_item'
export default class BookDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
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
        headerRight:<View ></View>
      })
    
    componentDidMount() {
        const id = this.props.navigation.state.params.id;
        const url = `${service.book_search_id}${id}`
        request(url).then(res => {
            this.setState({
                data: res
            })
        })
    }
    render() {
        return (
            <ScrollView>
                <BookDetailItem rowData={this.state.data} />
                <View>
                    <Text style={styles.title}>图书简介</Text>
                    <Text style={styles.text}>{this.state.data.summary}</Text>
                </View>
                <View>
                    <Text style={styles.title}>作者简介</Text>
                    <Text style={styles.text}>{this.state.data.author_intro}</Text>
                </View>
                <View style={{height:30}}></View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    title:{
        fontSize:16,
        margin:10
    },
    text:{
        marginLeft:10,
        marginRight:10,
        color:'#000d22'
    }
})