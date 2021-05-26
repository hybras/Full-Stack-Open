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

export default Course