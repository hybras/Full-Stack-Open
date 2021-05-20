import React from 'react'

const Header = (props: { course: String }) => (<div>
  <h1>{props.course}</h1>
</div>)

const Part = (props: { part: String, exercise: number }) => (
  <p>{props.part} {props.exercise}</p>
)

const Footer = (props: { total_exercises: number }) => (
  <p>Number of exercises {props.total_exercises}</p>
)


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
      <Footer total_exercises={exercises1 + exercises2 + exercises3}></Footer>

    </div>
  )
}

export default App