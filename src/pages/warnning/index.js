import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import './index.css'
import Taro from '@tarojs/taro'
import { navigateto, redirectTo } from '@tarojs/taro'

export default class login extends Component {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    back = () => {
        Taro.redirectTo({ url: '/pages/main/index' })

    };

    render() {
        return (
            <View className='wbc'>
                <View className='warnning'>
                    <View className='bottom'>
                        <View className='text'>
                            听说选择具有标志性的地方更有可能被挖到哦
                    </View>
                        <View className='sure'>
                            <Button onClick={this.back}>我知道啦！</Button>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}