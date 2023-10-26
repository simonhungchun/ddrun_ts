import axios from "axios";
import { message } from "antd";

const request = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  timeout: 5000,
  timeoutErrorMessage: "请求超时，请稍后再试"
});

request.interceptors.request.use((config) => config);

request.interceptors.response.use((response) => {
  if (response.data.code === 203) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    message.error(response.data.msg).then(() => {
      window.location.href = "/login";
    });
    return response;
    // window.history.replaceState({}, "登陆", "/login");
  }
  if (response.data.code !== 200) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    message.error(response.data.msg);
  }
  return response;
});

export default request;
