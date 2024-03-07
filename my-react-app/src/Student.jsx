import PropTypes from 'prop-types'
function Student(props){ {/*props is a js object*/}
  return(
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  ); 
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
export default Student