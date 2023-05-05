const globalData = {}

export const getGlobalData = (key) => {
  return globalData[key]
}

export const setGlobalData = (key, val) => {
  globalData[key] = val
}

export const removeGlobalData = (key) => {
  delete globalData[key]
}

export const clearGlobalData = () => {
  Object.keys(globalData).forEach((key) => {
    delete globalData[key]
  })
}

export const getAllGlobalData = () => {
  return globalData
}
