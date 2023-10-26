// 该文件中声明的类型或接口如果想让他们可以全局访问不需要提前导入的话
// 就不得出现模块化语法
namespace Res {
  type VerifyCode = {
    code: number;
    msg: string;
    data: { svg: string; no: string };
  };
  type AdminLogin = {
    code: number;
    msg: null | string;
    data?: null | object;
  };
  type AdminAgent = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: {
        agentNo: string;
        agentAccount: string;
        mobileNumber: string;
        realName: string;
        status: number;
        createTime: string;
        updateTime: string;
        defaultPwd: string;
        updatedBy: string;
      }[];
    };
  };
}
