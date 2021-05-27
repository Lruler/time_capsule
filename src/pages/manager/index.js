import React, { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import wenhao from './images/问号.png'
import './index.css'
import Rule from '../rule/index'
import { navigateTo } from '@tarojs/taro'
// import Lottie from "react-lottie"
// import animation from "../../lotties/data.json"

export default class login extends Component {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toMain = ()=>{
        Taro.redirectTo({url:'/pages/main/index'})
    }

    render() {
        // const defaultOptions = {
        //     loop: true,
        //     autoplay: true,
        //     animationData: animation,
        //     rendererSettings: {
        //       preserveAspectRatio: "xMidYMid slice"
        //     }
        //   };
        return (
            <View className='index'>
                {/* <Image className='wenhao' src={wenhao}></Image> */}
                <Rule></Rule>
                <View className='tobury'>
                    <Text>空空如也～<br></br></Text>
                    <Text>快去埋下你的时间胶囊<br></br></Text>
                    <Text>记录下专属于你的回忆吧～</Text>
                    <Button className='button' onClick={this.toMain}>去埋葬我的时间胶囊</Button>
                </View>
                <View>
             {/* <Lottie 
	            options={defaultOptions}
                height={400}
                width={400}
              /> */}
    </View>
            </View>
        )
    }
}