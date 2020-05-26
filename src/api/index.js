import http from '../http'
let loginUrl = '/users/auth/login/'
let registerUtl = '/users/auth/users/'
let infoUrl = '/users/auth/info/'
let postPublishUrl = '/posts/v1/posts/'
let postListUrl = '/posts/v1/posts'
let detailUrl = '/posts/v1/posts/'
let captchaImageUrl = '/users/captcha/image'
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
//文章发布
export function postPublish(data) {
  return http('post', postPublishUrl, data)
}
//文章列表
export function postList(data) {
  return http('get', postListUrl, data)
}
//文章详情
export function getDetailContent(data) {
  return http('get', detailUrl + data, null)
}
//获取验证码图片
export function captchaImage(data) {
  return http('get', captchaImageUrl, data)
}
