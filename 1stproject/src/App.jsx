 import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    
        
     
       <div className="w-full h-screen duration-200 "style={{backgroundColor: color}} >
        <div className="fixed flex  flex-wrap justify-center  bottom-11 inset-x-0 px-2 py-3">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"brown"}} onClick={()=> setColor("brown")}>Brown</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"orange"}} onClick={()=> setColor("orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"pink"}} onClick={()=> setColor("pink")}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"purple"}}onClick={()=> setColor("purple")} >Purple</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"black "
              
            }} onClick={()=> setColor("black") }>Black</button>
          </div>
        </div>
        <h1 className="uppercase font-bold text-xl justify-center text-center flex "   >this is me Sunil kunwar. i am learning react with vite </h1>
       </div>
    
  )
}

export default App
