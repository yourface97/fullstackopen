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

const Statistics = ({good, neutral, bad, all, average, positive}) =>{
  return(
    <>
      <h1>statistics</h1>
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        all {all} <br />
        average {average} <br />
        positive {positive}
      </p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  
  const incGood = () => {
    setGood(good+1);
    setAll(all+1);
    setAverage((good-bad+1)/(all+1));
    setPositive((good+1)/(all+1));
  }

  const incNeutral = () => {
    setNeutral(neutral+1);
    setAll(all+1);
    setAverage((good-bad)/(all+1));
    setPositive((good)/(all+1));
  }

  const incBad = () => {
    setBad(bad+1);
    setAll(all+1);
    setAverage((good-bad-1)/(all+1));
    setPositive((good)/(all+1));
  }

  return (
    <div>
      <Feedback incGood={incGood} incNeutral={incNeutral} incBad={incBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/> 
    </div>
  );
}

export default App;
