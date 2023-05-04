import request from '@/utils/request'

const baseUrl = 'https://mock.apifox.cn/m1/498602-0-default'

export const login = (data: API.LoginReq) => {
  return request({
    url: `${baseUrl}/auth/login`,
    method: 'POST',
    data
  }) as Promise<API.LoginRes>
}
