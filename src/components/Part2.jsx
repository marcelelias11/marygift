import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import sunset from "../assets/sunset.jpg"
import song from "../assets/inkspot.mp3"
import styled from "styled-components";

function Part2() {
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
      <img className="sunset" src={sunset} alt="Sunset" />
      <div className="content">
      
      <div className="card">
      
        <p className="love2"> Yeah, lazy, I know hun. But I didn't just do this out of laziness.<br/><br/>
            I wanted to take us back to the past, when we were a lot more uncertain, a lot more scared.
            Seeing the ups and downs we've had since then, the history we built. Back then it was all promises, all expectations.
            Now? We've lived something, and we're still together.<br/><br/>
            
            I swear one of these days I will give you a better gift, a proper one, the one you deserve. I will give you a worthy gift,
            made with the love you deserve. But for now, I will piggyback on the last gift.<br/><br/>
            
            Last time, I wrote more about myself. This time, to spice it up (ooo), I will write more about you &lt;333<br/><br/>
            
            Your smile is so beautiful, so precious, so caring. Your laughter is infectious. Your jokes and silliness make me laugh
            everytime. Your kindness is inspiring. There is so much good in you. Your patience is amazing.<br/><br/>
            
            Our relationship now is a lot more rough. A lot more wobbly. But you're doing an amazing job already hun. You do your
            best to improve, to ask for feedback, to love and care properly, and even when you feel hurt, you take what I said
            into consideration and try to do something better. I love you, even if I have trouble showing it sometimes. Sometimes
            I'd rather protect myself then let myself be vulnerable. But I do love you deeply, and care for you very much.<br/><br/>
            
            I hope our love grows and grows as time goes by. I will do my best for this to be the case &lt;333<br/><br/>
            
            With love,<br/>
            Ya mans, Marcelo Elias de Araújo Júnior (hopefully one day Marcelo Evans Araújo &lt;333)
            </p>
            <p className='mobilewarn'>P.S.: This page has a cool background on the PC version &lt;333</p>
      </div>
      </div>
    </>
  )
}

export default Part2
