import React from "react"
export default function Quizresult(props){
    return(
        <>
        <div class="card card2" style={{width: "22rem", height:"14rem"}}>
  <div class="card-body">
    <h1>Quiz Finesh</h1>
    <h2 class="card-title"> your Marks : {props.Marks}</h2>
    <h2 class="card-title"> Motal Marks : {props.totalMarks}</h2>

    <a href="#" class="btn btn-primary" onClick={props.tryagain}>Restart</a>
  </div>
</div>
       
        </>
    )
}