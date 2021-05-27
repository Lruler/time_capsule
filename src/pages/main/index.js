import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import { AtButton } from 'taro-ui'
import './index.css'
import lc from './images/lc.png'
import Rule from '../rule'
import Background from '../bcg-logo'
import Bcmap from '../bcg-map'




export default class examine extends Component {


    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toBury = () => {
        Taro.redirectTo({ url: '/pages/tobury/index' })
    }
    warning = () => {
        Taro.redirectTo({
            url: '/pages/warnning/index'
        })
    };
    manager = () => {
        Taro.redirectTo({
            url: '/pages/examine/index'
        })
    };
    render() {
        return (
            <View className='main'>
                <Background>
                </Background>
                <Image className='location1' src={lc}></Image>
                <Image className='location2' src={lc}></Image>
                <Image className='location3' src={lc}></Image>
                <Bcmap></Bcmap>
                <Rule></Rule>
                <View onClick={this.manager} className='manager'>管理我的时间胶囊</View>
                <View className='tobury' onClick={this.toBury}>
                    去埋藏我的时间胶囊
                </View >
            </View>


        )
    }

}