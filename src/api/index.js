import http from '../http'
let loginUrl = '/users/auth/login/'
let registerUtl = '/users/auth/users/'
let infoUrl = '/users/auth/info/'
//  let url = '/posts/v1/posts/'
//登录
export function login(data) {
  return http('post', loginUrl, data)
}
//注册
export function register(data) {
  return http('post', registerUtl, data)
}
//测试鉴权
export function getInfo(data) {
  return http('get', infoUrl, data)
}
