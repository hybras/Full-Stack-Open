import React, { useState } from 'react'

const rand_in_range = (maxExclusive) => Math.trunc(Math.random() * maxExclusive)

const zip = (a, b) => a.map((k, i) => [k, b[i]])

const Anecdote = ({ title, text, votes }) => (<div><h2>{title}</h2>{text}<p>has {votes} votes</p></div>)

const Winner = ({ anecdotes_with_votes }) => {

  const winner = anecdotes_with_votes.sort((a, b) => { return a.vote - b.vote })[anecdotes_with_votes.length - 1]
  console.log(anecdotes_with_votes)
  const { anec, vote } = winner

  return Anecdote({ title: "Anecdote with the most votes", text: anec, votes: vote })
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const new_idx = () => rand_in_range(anecdotes.length)

  const [selected, setSelected] = useState(new_idx())
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const as_obj = zip(anecdotes, votes).map(([anec, vote]) => { return { anec, vote } })

  const inc_vote = () => {
    const new_votes = [...votes]
    new_votes[selected] += 1
    setVotes(new_votes)
  }

  return (
    <div>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} title="Anecdote of the Day" />
      <button onClick={inc_vote}>Vote!</button>
      <button onClick={() => setSelected(new_idx())}>Next Anecdote</button>
      <Winner anecdotes_with_votes={as_obj} />
    </div>
  )
}

export default App