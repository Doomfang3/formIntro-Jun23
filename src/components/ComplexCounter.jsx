import { useState } from 'react'
import Counter from './Counter'

const ComplexCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter count={count} setPizza={setCount} />
      <p>{count}</p>
      <Counter count={count} setPizza={setCount} />
    </>
  )
}

export default ComplexCounter
