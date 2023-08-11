import './App.css'
import Grid from './components/Grid/Grid'

function App() {
  return (
    <>
      <h1 className='header'>Tic Tac Toe</h1>
      <Grid numberOfCards={9}/>
    </>
  )
}

export default App
