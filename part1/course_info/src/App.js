import React from 'react'

const Header = ({ course }) => (<div>
  <h2>{course.name}</h2>
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
    {parts.map(it => <Part key={it.id} name={it.name} exercise={it.exercises} />)}
  </div>)
}

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Footer course={course} />
  </div>
)


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (<div>
    <h1>Wed Dev Curriculum</h1>
    {courses.map(it => <Course key={it.id} course={it} />)}
  </div>)
}

export default App