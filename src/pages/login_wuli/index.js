import React, { Component } from 'react'
import { View, Image, Input, Button } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import './index.css'
import { navigateTo } from '@tarojs/taro'

export default class login extends Component {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toMain= ()=>{
        Taro.redirectTo( {url:'/pages/main/index'} )
    }

    render() {
        return (
            <View className='index'>
                <View className='border'>
                    <View className='input'>
                        <View className='h'>我是武小理</View>
                        <View className='input_text'>
                            <View>&nbsp;&nbsp;校园卡号</View> <View><Input className='weui-input' type='text'></Input></View>
                        </View>
                        <View className='input_text'>
                            <View>&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;</View><View><Input className='weui-input' type='password'></Input></View>
                        </View>
                        <View className='t'>密码为身份证后六位或智慧理工大密码</View>
                    </View>
                </View>
                <View className='button'>
                    <Button className='button1' onClick={this.toMain}>&nbsp;&nbsp;确定！</Button>
                </View>
            </View>
        )
    }
}