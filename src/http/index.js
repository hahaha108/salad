import axios from 'axios'
import store from '../store'
// axios.interceptors
let host = 'http://192.168.1.103:9527'
const http = (method, url, options = {}) => {
  let token = localStorage.getItem('token')
  return new Promise((resolve, reject) => {
    const defaultOptions = {}
    const newOptions = {
      ...defaultOptions,
      ...options
    }
    //headers默认传递json格式数据，这里也可以设置token，每次调用都会携带
    newOptions.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      ...newOptions.headers
    }
    if (token) {
      newOptions.headers['Authorization'] = 'Bearer ' + token
    } else {
      delete newOptions.headers['Authorization']
    }
    axios.interceptors.response.use(
      function(response) {
        // 对响应数据做点什么
        return response
      },
      function(error) {
        // 对响应错误做点什么
        if (error.response && error.response.status === 401) {
          const data = {
            // code: -1,
            message: '用户验证过期！'
          }
          localStorage.removeItem('info')
          localStorage.removeItem('token')
          // console.log(store)
          // debugger
          // console.log(store.mutations)
          localStorage.setItem('isLogin', 0)
          store.commit('SET_ISLOGIN', false)
          return Promise.reject(data)
        }
        return Promise.reject(error)
      }
    )
    //这里可以在调用的时候看到你的method、url、data、headers等参数
    axios({
      method: method,
      url: host + url,
      data: options,
      headers: newOptions.headers
    })
      .then(res => {
        //根据返回的状态码判断，注意res返回的并不一定都是status，比如小程序就是statusCode
        if (res && res.status >= 200 && res.status < 300) {
          //这里我们只需要获取返回的data中的数据即可
          resolve(res.data)
        } else {
          reject(res)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
export default http
