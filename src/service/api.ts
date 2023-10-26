import request from "@/utils/request";

export const getVerifyCode = async () =>
  await request.get<Res.VerifyCode>("/api/admin/verifycode");

export const adminLogin = async (data: Req.AdminLogin) =>
  await request.post<Res.AdminLogin>("/api/admin/login", data);

export const adminAgent = async (params: Req.AdminAgent) =>
  await request.get<Res.AdminAgent>("/api/admin/agent/list", { params });
