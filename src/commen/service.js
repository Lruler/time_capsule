import Taro from '@tarojs/taro'
import getCookie from './session'

const preHttp = 'http://saicem.top:5905'
const Fetch = (url, data = {}, method = 'GET') => {
    const header = {
        'Access-Control-Allow-Origin': 'http://saicem.top:5905',
        'content-type': 'application/json',
        'session': Taro.getStorageSync('session')
    };
    return Taro.request({
        url: preHttp + url,
        data,
        method,
        header
    }).then(res => {
        switch (res.statusCode) {
            case 200:
                console.log(res);
                if (res.data) {
                    return res.data;
                } else {
                    return res.statusCode;
                }
            case 400:
                throw new Error('没有权限访问');
            case 401:
                throw new Error('未授权');
            case 404:
                throw new Error('not found');
            case 500:
            case 502:
                return {
                    msg: 'server_wrong'
                }
        }
    });
};

const service = {
    //Login
    Login_ccnu(userid, pwd) {
        return Fetch(`/api/timecap/loginccnu?userid=${userid}&pwd=${pwd}`, {
            userid: userid,
            pwd: pwd

        }, 'POST').then(res => {
            console.log(res);
            Taro.setStorage({
                key: 'Cookie',
                data: res.data,
            });
            Taro.setStorage({
                key: 'userid',
                data: userid,
            })
            Taro.navigateTo({ url: '/pages/main/index' })
        });
    },

    // Login_wuli(username,password){
    //     return Fetch('/api/timecap/loginwut',{
    //         method:'GET',
    //         date:{
    //             userid:username,
    //             pwd:password
    //         }
    //     })
    // },
    add_timecap(userid, story, address) {
        let Cookie = getCookie();
        console.log(Cookie)
        return Fetch(`/api/timecap/add?userid=${userid}&story=${story}&address=${address}&session=${Cookie}`, {

        }, 'POST').then(res => {
            console.log(res);
            Taro.navigateTo({ url: '/pages/main/index' })
        });
    },

    own_timecap(userid) {
        let Cookie = getCookie();
        return Fetch(`/api/timecap/query/own?userid=${userid}&session=${Cookie}`, {

        }, 'POST').then(res => {
            console.log(res);
            return res.data
        })


    }
}


export default service