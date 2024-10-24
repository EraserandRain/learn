import './App.css'


const App = () => {
  const handleClick =async () => {
    const res = await fetch('http://localhost:8000/print')
    const data = await res.json()
    console.log(data.message)
  }
  return (
    <>
      <p>Halo</p>
      <button onClick={handleClick}>Read excel</button>
    </>
  )
}

export default App
