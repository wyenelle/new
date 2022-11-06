import {useState} from 'react'


function useNormalCounter() {
  const [count,setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const setValue = () => {
    setCount(10)
  }

  return[count,increment,decrement,reset,setValue]
}

export default useNormalCounter