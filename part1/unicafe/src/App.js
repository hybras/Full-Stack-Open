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

const Statistic = ({ name, val }) =>
(<tr>
  <td>{name}</td>
  <td>{val}</td>
</tr>)


const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (<div><p>No Feedback Given</p></div>)
  }
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
        <Statistic name="Good" val={good} />
        <Statistic name="Neutral" val={neutral} />
        <Statistic name="Bad" val={bad} />
        <Statistic name="All" val={all} />
        <Statistic name="Avg" val={avg} />
        <Statistic name="Positive" val={pos} />
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