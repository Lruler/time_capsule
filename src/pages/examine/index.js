import React, { Component, } from 'react'
// import Taro from '@tarojs/taro'
import { View, } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './index.css'
import Items from '../items'
import Rule from '../rule/index'
import Background from '../bcg-logo'
// import Service from '../../commen/service'


export default class examine extends Component {

    // state = {
    //     date: []
    // }
    // componentDidMount() {
    //     let userid = '';
    //     Taro.getStorage({
    //         key: 'userid',
    //         success: function (res) {
    //             console.log(res);
    //             userid = res.data;
    //         }
    //     })
    //     Service.own_timecap(userid).then(res => {
    //         console.log(res);
    //         this.setState({
    //             date: res,
    //         })

    //     })
    // }

    render() {
        // console.log(this.state.data)
        return (
            <View>
                <Rule></Rule>
                <Background></Background>
                {/* <Rule></Rule> */}
                <View className='get'>
                    <View className='h1'>我挖到的时间胶囊</View>
                    {/* {this.state.date.map((dateobj) => { return <Items key={dateobj.capsuleId} {...dateobj} ></Items> })} */}
                    <View className='Item'>
                        <Items></Items>
                        <Items></Items>
                        <Items></Items><Items></Items>
                    </View>

                </View>
                <View className='bury'>
                    <View className='h1'>我埋下的时间胶囊</View>
                    <View className='Item'>
                        <Items></Items>
                        <Items></Items>
                        <Items></Items>
                        <Items></Items>
                        <Items></Items>
                        <Items></Items>
                        <Items></Items>
                    </View>
                </View>
            </View>
        )
    }

}