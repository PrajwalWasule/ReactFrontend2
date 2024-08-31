
import {useState } from "react"
function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className="fixed inset-x-0 bottom-9 flex justify-center px-2">

  



      <div className="flex flex-wrap justify-centre gap-3
      shadow-lg bg-white px-3 py2 rounded-3xl">
<button
onClick={()=> setcolor("red")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{backgroundColor:"red"}}>Red</button>
<button
onClick={()=> setcolor("green")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{backgroundColor:"green"}}>Green</button>
<button
onClick={()=> setcolor("grey")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{backgroundColor:"grey"}}>Grey</button>
<button
onClick={()=> setcolor("blue")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{backgroundColor:"blue"}}>Blue</button>

      </div>
    </div>
    </div>
  )
}

export default App