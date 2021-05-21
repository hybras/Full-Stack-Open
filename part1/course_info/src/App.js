import React from 'react'

const Header = ({ course }) => (<div>
  <h1>{course.name}</h1>
</div>)

const Part = ({ name, exercise }) => (
  <p>{name} {exercise}</p>
)

const Footer = ({ course }) => (
  <p>Number of exercises {course.parts.map(it => it.exercises).reduce((acc, it) => acc + it, 0)}</p>
)



const Content = ({ course }) => {
  const parts = course.parts
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