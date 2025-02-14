import { useState, useEffect } from 'react'
import { useNavigate, } from 'react-router-dom'
import './App.css'

function Home() {
  const navigate = useNavigate();
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
      <div>
      </div>
      <p style={{display:'none'}}>I promise that I'll make you a proper gift for Brazilian Couple's Day T.T</p>
      <h1>To My Beautiful Fianceé</h1>
      <div className="card">
        <button onClick={() => navigate('/card')}>
          Continue
        </button>
      </div>
    </>
  )
}

export default Home
