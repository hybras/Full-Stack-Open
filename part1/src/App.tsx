import React from 'react'


class Course {
  name: String = ""
  parts: { name: String, exercises: number }[] = []
}

const Header = (props: { course: Course }) => (<div>
  <h1>{props.course.name}</h1>
</div>)

const Part = (props: { name: String, exercise: number }) => (
  <p>{props.name} {props.exercise}</p>
)

const Footer = (props: { course: Course }) => (
  <p>Number of exercises {props.course.parts.map(it => it.exercises).reduce((acc, it) => acc + it, 0)}</p>
)



const Content = (props: { course: Course }) => {
  const parts = props.course.parts
  return (<div>
    <Part name={parts[0].name} exercise={parts[0].exercises} />
    <Part name={parts[1].name} exercise={parts[1].exercises} />
    <Part name={parts[2].name} exercise={parts[2].exercises} />
  </div>)
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Footer course={course} />

    </div>
  )
}

export default App