import React, { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const GiveFeedback = ({ onClicks }) => (<div>
  <h1>Give Feedback</h1>
  <Button text="good" onClick={onClicks[0]} />
  <Button text="neutral" onClick={onClicks[1]} />
  <Button text="bad" onClick={onClicks[2]} />
</div>)

const Statistics = ({ good, bad, neutral }) => (<div>
  <p>Good: {good}</p>
  <p>Neutral: {neutral}</p>
  <p>Bad: {bad}</p>
</div>)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <GiveFeedback onClicks={[() => setGood(good + 1), () => setNeutral(neutral + 1), () => setBad(bad + 1)]} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App