import {useState} from "react"
function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-black rounded-3xl px-2 py-1">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor:"Red"}}>Red</button>
            <button onClick={() => setColor("#c292a1")} className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor:"#c292a1"}}>Mauve</button>
            <button onClick={() => setColor("White")} className="outline-none px-4 py-1 rounded-full text-black"style={{backgroundColor:"White"}}>White</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white"style={{backgroundColor:"Blue"}}>Blue</button>
          </div>
        </div>
    </div>
  )
}

export default App
