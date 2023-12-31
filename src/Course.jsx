const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Content = ({parts}) => {
  return (
    <ul>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
};

const Part = ({part}) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  );
};

const Header = props => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Total = ({parts}) => {
  const total = parts.map(part => part.exercises);
  const sum = total.reduce((s, p) => {
    return s + p;
  }, 0);
  return <p>Total {sum}</p>;
};

export default Course;
