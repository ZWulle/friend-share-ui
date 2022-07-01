/**
 * axios封装
 */
import axios from 'axios';
import qs from 'qs'
import serverConfig from './config/serverConfig';

// 创建axios实例
const instance = axios.create({
  // 请求超时(毫秒)
  timeout: 5000,
  baseURL: serverConfig.baseURL
});
// axios请求拦截
instance.interceptors.request.use(config => {
  // 设置请求头
  if (!config.headers['content-type']) {
    // 若没设置请求头
    if (config.method === 'post') {
      config.headers['content-type'] = 'application/x-www-form-urlencoded';
      config.data = qs.stringify(config.data); // 序列化
    } else {
      config.headers['content-type'] = 'application/json'; // 默认类型
    }
  }
  // 设置token
  if (serverConfig.useTokenAuthorization) {
    config.headers['Authorization'] = localStorage.getItem('token');
  }
  return config;
},
  error => {
    Promise.reject(error);
  });

// axios响应拦截
instance.interceptors.response.use(res => {
  // return Promise.resolve(res.data);
  return res;

}, error => {
  let msg = '';
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        msg = '接口重定向！';
        break;
      case 400:
        msg = '参数错误！';
        break;
      case 401:
        msg = '您未登录，或登录已超时，请先登录！';
        break;
      case 403:
        msg = '您未权限操作！';
        break;
      default:
        msg = '未知错误，请联系管理员！'
        break;
    }
  }
  return Promise.reject(msg);
});
export default instance;