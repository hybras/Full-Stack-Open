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



const Content = (props: { parts: { name: String, exercises: number }[] }) =>
(<div>
  <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
  <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
  <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
</div>)


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Footer total_exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} />

    </div>
  )
}

export default App