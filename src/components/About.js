
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div>
      <h4>This is a Task tracker app by which you can set the reminder, add, and delete them.</h4>
      <h5>Uses basic practicing of react components, routing, and others.</h5>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About;