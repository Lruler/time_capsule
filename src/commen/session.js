import Taro from '@tarojs/taro'

function getCookie() {
  let Cookie = '';
  Taro.getStorage({
    key: 'Cookie',
    success: function (res) {
      console.log(res);
      Cookie = res.data;
    }
  })
  return Cookie

}
export default getCookie