import {useState} from 'react'

export function useFromStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const savedInStorage = localStorage.getItem(key)
      if(!savedInStorage) return initialValue
      return JSON.parse(savedInStorage)
    } catch {
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function
        ? value(storedValue)
        : value
      setStoredValue(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {}
  }

  return [storedValue, setValue]
}