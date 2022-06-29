// 引入axios
import axios from 'axios';
const baseURL = '';
// 创建axios实例
const instance = axios.create({
  // 接口的公共代理
  baseURL: baseURL,
  // 请求时间。在超时前，所有请求都会等待2.5秒
  timeout: 2500
});
// axios请求拦截器
instance.interceptors.request.use(config => {
  console.log('请求拦截');
}, error => {});
// axios响应拦截器
instance.interceptors.response.use(response => {
  response.data;
}, error => {
  console.log("响应拦截");
});
