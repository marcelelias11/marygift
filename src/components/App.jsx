import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components";
import Card from "./components";

function App() {
 

  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App