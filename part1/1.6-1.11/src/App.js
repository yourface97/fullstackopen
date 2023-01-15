import React from "react"
import {useState} from "react"

const Button = ({name, onClick}) => {
  return(
  <>
    <button onClick={onClick}>{name}</button>
  </>
  )
}

const Feedback = ({incGood, incNeutral, incBad}) => {
  const name = ['good', 'neutral', 'bad']
  return(
    <>
      <h1>give feedback</h1>
      <div>
        <Button name={name[0]} onClick={incGood}/>
        <Button name={name[1]} onClick={incNeutral}/>
        <Button name={name[2]} onClick={incBad}/>
      </div>
    </>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  return(
    <>
      <h1>statistics</h1>
      <p>good {good} <br />
      neutral {neutral} <br />
      bad {bad}</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const incGood = () => {
    setGood(good+1);
  }

  const incNeutral = () => {
    setNeutral(neutral+1);
  }

  const incBad = () => {
    setBad(bad+1);
  }

  return (
    <div>
      <Feedback incGood={incGood} incNeutral={incNeutral} incBad={incBad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  );
}

export default App;
