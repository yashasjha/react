// in {} we can only pass evaluated expressions and cant pass loops or any other evaluation
import Test from "./test"
function App() {
  const username = "yeezus"
  return (
    <>
    <Test/>
    <h1>this is crazy with vite {username}</h1>    
    </>
  )
}

export default App
