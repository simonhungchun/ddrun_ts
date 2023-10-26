import { type FC, useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { Icon } from "@iconify/react";
import { useRequest } from "ahooks";
import { type AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { getVerifyCode, adminLogin } from "@/service/api";

const Login: FC = () => {
  // 更新验证码
  const [count, setCount] = useState(0);
  const refreshVerifyCode = () => {
    setCount((prev) => prev + 1);
  };
  const navigate = useNavigate();
  // 登陆成功的回调函数
  const onRunAdminLoginSuccess = (res: AxiosResponse<Res.AdminLogin>) => {
    if (res.data.code === 200) {
      notification.success({
        message: "登陆成功",
        description: "恭喜你登陆成功了！"
      });
      navigate("/foo");
    } else {
      refreshVerifyCode();
    }
  };
  const { data: verifyData } = useRequest(getVerifyCode, {
    refreshDeps: [count]
  });
  const { run: runAdminLogin } = useRequest(
    async (values: Omit<Req.AdminLogin, "no">) =>
      await adminLogin({ ...values, no: verifyData?.data.data.no ?? "" }),
    {
      manual: true,
      onSuccess: onRunAdminLoginSuccess
    }
  );

  return (
    <div className="w-[328px] mx-auto mt-[30px]">
      <h1 className="text-center my-8">一秒快送管理系统</h1>
      <Form onFinish={runAdminLogin}>
        <Form.Item name="adminName">
          <Input
            autoComplete="off"
            placeholder="请输入用户名"
            prefix={<Icon icon="octicon:person-24" />}
            allowClear
          />
        </Form.Item>
        <Form.Item name="adminPwd">
          <Input.Password
            autoComplete="current-password"
            placeholder="请输入密码"
            prefix={<Icon icon="iconoir:lock" />}
            allowClear
          />
        </Form.Item>
        <Form.Item name="verifyCode">
          <div className="flex items-center">
            <Input placeholder="验证码" autoComplete="off" />
            <div
              onClick={refreshVerifyCode}
              dangerouslySetInnerHTML={{
                __html: verifyData?.data.data.svg ?? ""
              }}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

// 组件是函数 Login
// 组件的渲染 就是 函数的执行 Login() <Login/>
// 如果一个函数存在泛型变量 Login<number>() <Login<number>/>
export default Login;
