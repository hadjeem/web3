import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = (e)=> {
    if(e.target.className === 'good'){
       setGood(good + 1) 
    } 
    else if(e.target.className === 'neutral'){
        setNeutral(neutral + 1)
    }
    else setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} value='good' />
      <Button onClick={handleGood} value='neutral' />
      <Button onClick={handleGood} value='bad' />
      <h1>statistics</h1>
      <Statistics {...{good, neutral, bad}} />
    </div>
  )
}

export default App;