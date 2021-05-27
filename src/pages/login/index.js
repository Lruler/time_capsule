import React, { Component } from 'react'
import { View, Input, Button } from '@tarojs/components'
//import { AtButton } from 'taro-ui'
import Background from '../bcg-logo/index'
import './index.css'
import Service from '../../commen/service'

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userid: '',
            pwd: '',
        }
    }
    getuserid(e) {
        this.setState({
            userid: e.target.value
        });
        console.log(this.state.userid)
    }

    getpwd(e) {
        this.setState({
            pwd: e.target.value
        });
        console.log(this.state.pwd)
    }

    login = () => {
        const userid = this.state.userid;
        const pwd = this.state.pwd;
        console.log(pwd, userid);
        if (userid && pwd) {
            Service.Login_ccnu(userid, pwd)
        }
    }

    // componentDidMount(){
    //     Taro.login({
    //         success:(res)=>{
    //             if(res.code){
    //                 Taro.request({
    //                     url:'http://saicem.top:5905/api/timecap/loginccnu',
    //                     data:{
    //                         userid:this.state.userid,
    //                         pwd:this.state.pwd
    //                     }
    //                 })
    //             }
    //         }
    //     })
    // }
    render() {
        return (
            // <View className='index'>
            <View>
                <Background></Background>
                <View className='border'>
                    <View className='input'>
                        <View className='h'>我是华小师</View>
                        <View className='input_text'>
                            <View>&nbsp;&nbsp;校园卡号</View>
                            <View><Input className='weui-input' type='text' onChange={this.getuserid.bind(this)}></Input></View>
                        </View>
                        <View className='input_text'>
                            <View>&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;</View>
                            <View><Input className='weui-input' type='password' onChange={this.getpwd.bind(this)}></Input></View>
                        </View>
                        <View className='t'>密码为身份证后六位或一站式门户密码</View>
                    </View>
                    <View className='button'>
                        <Button className='button1' onClick={this.login}>&nbsp;&nbsp;确定！</Button>
                    </View>
                </View>
            </View>

        )
    }
}