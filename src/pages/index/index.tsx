import React from 'react'
import { View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
// @ts-ignore
import { login } from '@/api/users'
import './index.less'

function Index() {
  const handleLogin = async () => {
    const data = {
      username: 'changeme',
      password: 'changeme112',
    }
    const res = await login(data) as API.LoginRes
    console.log(res.access_token)
  }
  return (
    <View className='nutui-react-demo'>
      <View className='index'>欢迎使用 NutUI React 开发 Taro 多端项目。</View>
      <View className='index'>
        <Button type='primary' className='btn !bg-yellow-500' onClick={handleLogin}>
          NutUI React Button
        </Button>
        <View className=' text-red text-xs'>Test</View>
      </View>
    </View>
  )
}

export default Index
