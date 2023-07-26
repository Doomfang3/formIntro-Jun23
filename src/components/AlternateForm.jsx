const AlternateForm = () => {
  const handleSubmit = event => {
    event.preventDefault()

    console.log(event)

    const formData = new FormData(event.currentTarget)

    const myField = formData.get('myField')

    console.log(myField)
    //event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='myField' />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AlternateForm
