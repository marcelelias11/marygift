import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import song from "../assets/song.mp3"

function Content() {
  const navigate = useNavigate();
  const [Bg, setBg] = useState(0)
  if (Bg === 1){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    document.getElementById("root").style.backgroundColor = "red";
  }
  if (Bg === 0){
    document.body.style.backgroundColor = "#d49d85";
    document.getElementById("root").style.backgroundColor = "#d49d85";
  }
  useEffect(() => setBg(1),[])
  return (
    <>
      <audio id="audio" src={song} loop autoPlay />
      <div className="content">
      <div className="card">
        <p className="love2">I don’t really have the words to express my feelings at this moment. 
          Being with you is unlike everything else I’ve ever felt before. In some ways, I still see you as my friend. 
          This is partly the reason I want to marry you, since I’ve never been in a relationship with such a strong sense of friendship
           and partnership, but it also makes me wonder. Should I feel more? Should I feel less? Am I being a good enough boyfriend?
            A good enough fianceé? Was I too hasty in proposing to you?<br /><br />
These are all questions that come to my head, making me doubt everything. But when I stop thinking and just feel, it all feels good.
It all feels right. Being with you is awesome. It’s uplifting. Being with you makes me feel like I have a partner to face whatever 
the world throws at me.<br /><br />
Part of me still can’t believe this is real. I still can’t believe that someone like you has shown up in my life, especially after I 
had given up hope. I still fear losing you. I still fear going back to being alone. But I have faith in our love, and I have faith 
that we will persevere.<br /><br />

I’m sorry that this turned into kind of a rant. I can’t fake words. I can’t just say some sappy cliché stuff and pretend it’s 
what I really feel. I wish I had nothing but good vibes and positive words to put here. All I know is that, no matter the doubts 
that come to my head, no matter the insecurities that come to my heart, no matter the thoughts that plague me, one thing is certain.<br /><br />

I love you. And I’m grateful to have you in my life. You make all the bad stuff, all the pain and failure feel like it was 
worth it in the end. I wouldn’t change an instant of my past, no matter how bad it was or how small the change could be, 
because I know that “small” change could lead us to never meeting or never dating, and I can’t accept that.<br /><br />

You’re the best partner I’ve ever had, Maryanna Alexandria Evans. And I hope that we can stay that way for the rest of our lives. 
You’re not just a cutie that I like eyeballing and having sex with, nor just someone whom I exchange cute and cuddly words with. 
You’re a friend. And that’s something that is really important to me.<br /><br />

From your fianceé (and hopefully future husband),<br /><br />
Marcelo Elias de Araújo Júnior</p>
      </div>
      </div>
    </>
  )
}

export default Content
