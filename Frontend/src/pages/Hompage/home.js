import {useNavigate} from 'react-router-dom'
import "./home.css"

const Home =()=> {
  const navigate = useNavigate();
  const Signin=()=>{
    navigate('../pages/SigninPage/Signin')
  }
  return (
  <div className='home'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><h2> Sales and Invoice Management System </h2></a>
        <form className="d-flex">
          <button className="btn btn-success" onClick={Signin} type="submit" style={{marginRight:"30px"}}>Sigin-in</button>
        </form>
      </div>
    </nav>
  </div>
    
)}

export default Home