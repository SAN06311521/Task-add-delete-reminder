import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <h5>Copyright &copy; 2021</h5>
      <h6>Made with &hearts; by <a href="https://san06311521.github.io/my-portfolio/" target="_blank">Sanya Jain</a></h6>
        <Link to='/about'>About</Link>
      
    </footer>
  )
}

export default Footer;