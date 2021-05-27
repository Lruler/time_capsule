import React, { Component } from 'react'
import { View, Button, Textarea } from '@tarojs/components'
import Taro from '@tarojs/taro'
//import { AtButton } from 'taro-ui'
import Rule from '../rule/index'
import Background from '../bcg-logo'
import Bcmap from '../bcg-map'
import './index.css'


export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            story: ''
        }
    }

    changStory = (e) => {
        this.setState({
            story: e.target.value
        });
        console.log(this.state.story)
    }

    gomain = () => {
        const story = this.state.story;
        Taro.redirectTo({
            url: `/pages/burying/index?story=${story}`
        })
    }
    render() {
        return (
            <View>
                <Background></Background>
                <Bcmap></Bcmap>
                <Rule></Rule>
                <View className='text'>
                    <View className='ta'><Textarea className='tac' onChange={this.changStory.bind(this)} ></Textarea></View>
                </View>
                <Button onClick={this.gomain} className='tobury'>
                    去埋藏我的时间胶囊
            </Button >
            </View>


        )
    }
}