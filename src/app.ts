import React, { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
// 全局样式
import 'windi.css'
import './app.less'
import { setGlobalData, getAllGlobalData } from './utils/GlobalData'

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow

  useDidShow(() => {
    setGlobalData('user', { name: '张三' })
    console.log(getAllGlobalData(), Enums.CustomerType)
  })

  // 对应 onHide
  useDidHide(() => {})

  return props.children
}

export default App
