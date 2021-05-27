import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
// import { AtButton } from 'taro-ui'
import './index.css'
import Bcground from '../bcg-logo'
import Bcmap from '../bcg-map'
import burying from './images/burying.gif'
import lc from './images/lc.png'
import Rule from '../rule/index'
import Service from '../../commen/service'

export default class burying1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            story: '',
            address: ''
        }
    }

    componentDidMount() {
        let story = decodeURIComponent(getCurrentInstance().router.params.story)
        this.setState({ story: story })
        console.log(this.state)
    }

    toBury = () => {
        Taro.redirectTo({ url: '/pages/main/index' })
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

    add = (x) => {
        let userid = '';
        let story = this.state.story;
        Taro.getStorage({
            key: 'userid',
            success: function (res) {
                console.log(res);
                userid = res.data;
            }
        })
        this.setState({
            address: x,
        })
        console.log(this.state)
        let address = this.state.address;
        Service.add_timecap(userid, story, address)
    }

    render() {
        return (
            <View >
                <Bcground></Bcground>
                <Bcmap></Bcmap>
                <Image className='location1' src={lc}></Image>
                <Image className='burying1' src={burying} onClick={() => this.add('1')}></Image>
                <Image className='burying2' src={burying} onClick={() => this.add('2')}></Image>
                <Image className='location2' src={lc}></Image>
                <Image className='burying3' src={burying} onClick={() => this.add('3')}></Image>
                <Image className='location3' src={lc}></Image>
                <Rule></Rule>
                <View onClick={this.manager} className='manager'>管理我的时间胶囊</View>
                <View className='tobury' onClick={this.toBury}>
                    更改我的时间胶囊
                </View >
            </View>
        )
    }

}
