import React from "react"
import {useState} from "react"

const Button = ({name, onClick}) => {
  return(
  <>
    <button onClick={onClick}>{name}</button>
  </>
  )
}

const Feedback = ({goodClick, neutralClick, badClick}) => {
  const name = ['good', 'neutral', 'bad']
  return(
    <>
      <h1>give feedback</h1>
      <div>
        <Button name={name[0]} onClick={goodClick}/>
        <Button name={name[1]} onClick={neutralClick}/>
        <Button name={name[2]} onClick={badClick}/>
      </div>
    </>
  )
}

const Statistics = ({clicks, average, positive}) =>{
  if(clicks.all === 0){
    return(
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return(
    <>
      <h1>statistics</h1>
      <p>
        good {clicks.good} <br />
        neutral {clicks.neutral} <br />
        bad {clicks.bad} <br />
        all {clicks.all} <br />
        average {average} <br />
        positive {positive}
      </p>
    </>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0, all: 0
  });
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  
  const handleGoodClick = () => {
    const newClicks = {...clicks, good: clicks.good + 1, all: clicks.all + 1};
    setAverage((newClicks.good-newClicks.bad)/(newClicks.all));
    setPositive((newClicks.good)/(newClicks.all));
    setClicks(newClicks);
  }

  const handleBadClick = () => {
    const newClicks = {...clicks, bad: clicks.bad + 1, all: clicks.all + 1};
    setAverage((newClicks.good-newClicks.bad)/(newClicks.all));
    setPositive((newClicks.good)/(newClicks.all));
    setClicks(newClicks);
  }

  const handleNeutralClick = () => {
    const newClicks = {...clicks, neutral: clicks.neutral + 1, all: clicks.all + 1};
    setAverage((newClicks.good-newClicks.bad)/(newClicks.all));
    setPositive((newClicks.good)/(newClicks.all));
    setClicks(newClicks);
  }

  return (
    <div>
      <Feedback goodClick={handleGoodClick} neutralClick={handleNeutralClick} badClick={handleBadClick}/>
      <Statistics clicks={clicks} average={average} positive={positive}/> 
    </div>
  );
}

export default App;
