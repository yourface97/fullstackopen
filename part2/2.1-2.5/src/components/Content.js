import Part from './Part';

const Content = ({parts}) => {
    const totalExercises = parts.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0)
    
    return(
      <>
        {parts.map(part => 
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <b>Total of {totalExercises} exercises</b>
      </>
    )
  }

  export default Content;