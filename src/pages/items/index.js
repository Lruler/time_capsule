import React, { Component } from 'react'
import { View } from '@tarojs/components'
// import Taro from '@tarojs/taro'
// import { AtButton } from 'taro-ui'
import './index.css'


export default class items extends Component {

    // toDetail = () => {
    //     Taro.redirectTo({
    //         url: '/pages/bury/index'
    //     })
    // };
    render() {
        // const { story, time } = this.props
        return (
            <View className='index' onClick={this.toDetail}>
                <View className=''>
                    <View className='text'>就这？嗯？</View>
                    <View className='time'>2002</View>
                </View>

            </View>
        )
    }
}