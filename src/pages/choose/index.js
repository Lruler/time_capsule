import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'


export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toLogin = () => {
        Taro.redirectTo({ url: '/pages/login/index' })
    }

    render() {
        return (
            <View className='choose'>
                <View className='text'>
                    <View className='wuli'>我是武小理</View>
                    <View className='huashi' onClick={this.toLogin}>我是华小师</View>
                </View>
            </View>
        )
    }
}