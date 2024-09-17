import Part from "../Part/Part"


const Content = (props) => {
    return (
      <div>
        <Part part={props.part[0]} exercises={props.exercises[0]} />
        <Part part={props.part[1]} exercises={props.exercises[1]} />
        <Part part={props.part[2]} exercises={props.exercises[2]} />
      </div>
    )
  }

export default Content