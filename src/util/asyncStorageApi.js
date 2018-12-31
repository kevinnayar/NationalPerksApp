import { AsyncStorage } from 'react-native'

async function getValue(key) {
  return await AsyncStorage.getItem(key).then(value => {
    return value
  })
}

async function setValue(key, json) {
  const value = JSON.stringify(json)
  return await AsyncStorage.setItem(key, value)
}

async function mergeValue(key, json) {
  const value = JSON.stringify(json)
  return await AsyncStorage.mergeItem(key, value)
}

async function clearValue(key) {
  return await AsyncStorage.removeItem(key)
}

module.exports = {
  getValue,
  setValue,
  mergeValue,
  clearValue,
}
