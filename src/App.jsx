import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Content from "./components/Content";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";

function App() {
  const [Bg, setBg] = useState(0)
  if (Bg === 1){
    document.body.style.backgroundColor = "red";
    document.getElementById("root").style.backgroundColor = "red";
  }
  if (Bg === 0){
    document.body.style.backgroundColor = "#d49d85";
    document.getElementById("root").style.backgroundColor = "#d49d85";
  }
  useEffect(() => setBg(0),[])
  return (
    <>
    <div />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/card" element={<Card />}/>
          <Route path="/card2" element={<Card2/>}/>
          <Route path="/card3" element={<Card3/>}/>
          <Route path="/checkthehomepagesourcecode" element={<Content />}/>
          <Route path="/part2" element={<Part2 />}/>
          <Route path="/part3" element={<Part3 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App