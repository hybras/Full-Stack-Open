import React from 'react'

const Header = (props: { course: String }) => (<div>
  <h1>{props.course}</h1>
</div>)

const Part = (props: { name: String, exercise: number }) => (
  <p>{props.name} {props.exercise}</p>
)

const Footer = (props: { total_exercises: number }) => (
  <p>Number of exercises {props.total_exercises}</p>
)


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Part name={part1.name} exercise={part1.exercises} />
      <Part name={part2.name} exercise={part2.exercises} />
      <Part name={part3.name} exercise={part3.exercises} />
      <Footer total_exercises={part1.exercises + part2.exercises + part3.exercises}></Footer>

    </div>
  )
}

export default App