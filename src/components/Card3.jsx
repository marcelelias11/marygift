import { useState, useEffect } from 'react'
import heart from "../assets/Heart.png"
import { useNavigate } from 'react-router-dom'
import harp2 from "../assets/harp2.wav"
import './App.css'


function Card3() {
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
      <audio id="audio" src={harp2} autoPlay />
      <h1>Happy Birthday!</h1>
      <div className="card">
        <img className="heart" src={heart} onClick={()=> navigate("/part3")}></img>
        <p className='love' onClick={()=> navigate("/part2")}>I love you, honey</p>
      </div>
    </>
  )
}

export default Card3
