import service from '@/utils/request'
import type { LoginReq } from '@/types/api/user'

// @Summary 获取验证码
// @Produce  application/json
// @Router /base/captcha [post]
export const captcha = () => {
  return service({
    url: '/base/captcha',
    method: 'get'
  })
}

// @Summary 用户登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/login [post]
export const login = (data: LoginReq) => {
  return service({
    url: '/base/login',
    method: 'post',
    data: data
  })
}
