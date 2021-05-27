import React, { Component } from 'react'
import { Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import bcm from './images/map.png'
import './index.css'


export default class Index extends Component {
    render() {
        return (
            <Image className='bcm' src={bcm}></Image>
        )
    }
}