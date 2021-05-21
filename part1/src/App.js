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

const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad
  const avg = (good - bad) / (good + neutral + bad)
  const pos = (good) / (good + neutral + bad)
  return (<div>
    <table>
      <thead>
        <tr>
          <th>Stat</th>
          <th>Val</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>All</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>Avg</td>
          <td>{avg}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{pos}</td>
        </tr>
      </tbody>
    </table>
  </div>)
}

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