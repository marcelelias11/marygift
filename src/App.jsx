import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Card from "./components/Card";
import Content from "./components/Content";

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
          <Route path="/checkthehomepagesourcecode" element={<Content />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App