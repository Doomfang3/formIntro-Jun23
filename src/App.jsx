import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComplexCounter from './components/ComplexCounter'
import Form from './components/Form'
import AlternateForm from './components/AlternateForm'

function App() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <Form />
      <h1>Vite + React</h1>
      <div className='card'>
        <ComplexCounter />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <AlternateForm />
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
