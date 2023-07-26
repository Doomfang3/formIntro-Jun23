const Input = ({ genre, type }) => {
  return (
    <input
      type={genre}
      style={type === 'nice' ? { backgroundColor: 'teal' } : { backgroundColor: 'tomato' }}
    />
  )
}

export default Input
