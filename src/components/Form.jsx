import { useState } from 'react'
import Input from './Input'

const Form = () => {
  const [myField, setMyField] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    console.log(myField)
    setMyField('')
  }

  return (
    <div>
      <h1>My form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input value={myField} onChange={event => setMyField(event.target.value)} />
        </label>
        <label>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={event => setIsChecked(event.target.checked)}
          />
        </label>
        <Input genre='number' type='nice' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
