import React, { useState } from "react";

// function getAnswer({Answers}) {
//     const randomAnswer =  Answers[Math.floor(Math.random() * Answers.length)];
//     console.log(randomAnswer)
    
//   }
  

const Eightball = ({Answers}) => {
    
    const randomAnswer = () => Answers[Math.floor(Math.random() * Answers.length)];
  
    const showAnswer = () => {
        setAnswer(randomAnswer().msg)
        setColour(randomAnswer().color)

    }
    const restartGame = () => {
        setAnswer("Think of a question")
        setColour("black")

    }
        
       
         
    const [Answer, setAnswer] = useState("Think of a question");
    const [Colour, setColour] = useState("black");


    return (
        <div >
    
            <div onClick={showAnswer} class="circle" style={{ background: Colour}} > <div style={{color: 'white'}}>{Answer}</div> </div>
            <button onClick={restartGame}>Restart</button>
            
        </div>
    )

}

export default Eightball;