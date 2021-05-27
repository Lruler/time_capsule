import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import wenhao from './images/问号.png'
import './index.css'

export default class login extends Component {
    state = {
        islooked: true,
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }


    lookRole = () => { this.setState({ islooked: !this.state.islooked }) };

    render() {
        return (
            <View className='index'>
                <Image onClick={this.lookRole} className='wenhao' src={wenhao}></Image>
                <View className='role' style={{ display: this.state.islooked ? 'none' : 'block' }}>
                    <Text className='h'>规则</Text>
                    <View className='details'>1.选择您想要挖取时间胶囊的地点 进行挖取；<br></br>
                    2.埋下我的时间胶囊：填写内容， 选择时间 胶囊的类型以及开启时间胶囊的 时间，即可将时间胶囊投递出去；<br></br>
                    3.管理我的时间胶囊，可以在此处 查看您埋下的/挖出过的时间胶囊。
                    </View>
                </View>
            </View >
        )
    }
}