const Counter = ({ count, setPizza }) => {
  return <button onClick={() => setPizza(count => count + 1)}>count is {count}</button>
}

export default Counter
