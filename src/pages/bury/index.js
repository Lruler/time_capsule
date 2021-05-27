import React, { Component } from 'react'
import { View, } from '@tarojs/components'
import Taro from '@tarojs/taro'
//import { AtButton } from 'taro-ui'
import './index.css'
import Rule from '../rule/index'


export default class login extends Component {
    componentWillMount() {

    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toManager = () => {
        Taro.redirectTo({ url: '/pages/manager/index' })
    }

    render() {
        return (
            <View className='index'>
                <View className='top'>
                    <View className='back'></View>
                    <Rule></Rule>
                </View>
                <View className='manage' onClick={this.toManager}>管理我的时间胶囊</View>
                <View className='bottom'>
                    <View className='content'>
                        <View className='text'>一个真正想死的人也不会在乎死是什么.....</View>
                        <View className='textNumber'>18</View>
                    </View>
                    <View className='time'>埋藏时间
                        <View className='specificTime'>
                            2021.05.02   22:57
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}