import {useEffect, useState } from "react"
import { questions } from "./data/question"
import Progress from "./data/progress"
import Quizresult from "./compunents/restartpage"

export default function App() {
  const [status, setStatus] = useState(false)
  const [currentQuestion, SetCurrentQuestion] = useState(0)
  const [clickedOption, setClickedOption]= useState(0)
  const [marks, setMarks] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [persent, setpersent] = useState(10)

  
  //next question
  const nextquestion=()=>{
    updatescore();
    if (persent  +10 >100) return;
    setpersent(persent +10);

  if(currentQuestion <= questions.length ){
  SetCurrentQuestion(currentQuestion + 1)
  setClickedOption(0)
  }else{
  
  showResult(true)
 
  }
  
   
}
const updatescore = () =>{
  if(clickedOption === questions[currentQuestion]?.answer){
    setMarks(marks +1)
  }
}

const reset =()=>{
  setShowResult(false)
  SetCurrentQuestion(0)
  setClickedOption(0)
  setMarks(0)
  setpersent(10)
}
if(currentQuestion === questions.length-1){
  
  return(
    <>
    <Quizresult Marks ={marks} totalMarks ={questions.length } tryagain={reset}/>

    
    </>
  )
  }


  return (
   
    <>
      {
        status ? (
          <>
          <div className="container mt-5">
            <div className="card card1" >
              <div className="card-header card_header">
              <h1> Quiz App </h1>
              </div>
              <div>
              <p className="question.count" 
              style={{ backgroundColor:"black",color:"white",fontSize:"22px"}}
              >Q.No: {currentQuestion+1}&nbsp; Out Of &nbsp; {questions.length}</p>
              <span className="question.marks " 
              style={{ backgroundColor:"black",color:"white",fontSize:"22px"}}
              >Marks: {marks}</span>

              </div>
            
              
                <>
                <div className="card-header ">
                  <span className="Question-number">{currentQuestion +1}:</span>
                 <span className="question-txt">{questions[currentQuestion]?.question}</span> 
                </div>
                <ul className="list-group list-group-flush option">
                  {
                    questions[currentQuestion]?.options.map((option, index)=>(
                      
                      <li style={{border:"2px solid black"}} className=
                      {
                        clickedOption === (index +1) ?
                      "list-group-item active " : "list-group-item"
                    }
                    key={index}
                    onClick={()=> setClickedOption(index + 1)}
                    >{option}</li>
                    ))
                  }
                
                </ul>

                </>

                     

          <Progress persent={persent + '%'}/>
                <button className="btn btn-primary btn1 mt-3" style={{width:"8rem"}}
                onClick={()=>nextquestion()}>Next</button>
          </div>
            </div>

              
          </>
      
        ) :














          (
            <div className="card card2" style={{ width: "14rem", height: "11rem" }}>
              <div className="card-body">
                <h2 className="card-title">Online Quiz Start</h2>
                <button className="btn btn-primary" onClick={() => setStatus(true)}>Start</button>
              </div>
            </div>
          )
      }
      </>

)
}