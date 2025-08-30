import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import sunset from "../assets/sunset.jpg"
import song from "../assets/themeofourlove.mp3"
import styled from "styled-components";

function Part3() {
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
  if (Bg === 2){
    document.body.style.backgroundColor = "plum";
    document.body.style.color = "white";
    document.getElementById("root").style.backgroundColor = "plum";
  }
  useEffect(() => setBg(2),[])
  return (
    <>
      <audio id="audio" src={song} loop autoPlay />
      <div className="content">
      
      <div className="card">
      
        <p className="love2"> I'm sorry this was late.<br/><br/>
            I don't know what else to say. We have been through rough waves lately. And they seem to be getting rougher.<br/><br/>
            
            But honestly? I'm glad I went through these rough waves with you. Sometimes we clash, sometimes we don't match, and yet 
            we're still here for each other. We're still helping each other. We're still supporting each other. We have no idea what 
            we're doing, but we're doing it together<br/><br/>
            
            You're still the love of my life, the one that brings me joy, and the one that brings me light &lt;333<br/><br/>
            
            Yes, we had been fighing. But I have faith we can sit down and talk. Sit down and truly listen to each other from now on, 
            not just let our feelings get in the way.<br/><br/>
            
            Happy 20th birthday, Mary. I'm sorry for not saying much more. Thank you for being a part of my life. Thank you for being 
            here for me. Thank you for not letting me lose myself<br/><br/>
            
            I hope we can grow past this rough spot &lt;333<br/><br/>
            
            With love,<br/>
            Ya girl, Bonnie Elias de Araújo (hopefully one day Bonnie Evans Araújo &lt;333)
            </p>
            <p>P.S.: I managed to compose the song after all &lt;333</p>
      </div>
      </div>
    </>
  )
}

export default Part3
