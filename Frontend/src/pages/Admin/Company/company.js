import AdminSidebar from "../../../components/AdminSidebar"
import {useNavigate} from 'react-router-dom'
import Companytable from "./components/companytable";
import './company.css'

const Company = () => {
  const navigate = useNavigate();
  const AddCompany=()=>{
    navigate('../Company/components/AddCompany')
  }
  return(
  <div className="user-image">
    <div className="company">
      <AdminSidebar/>
      <div>
        <div className="text-center" ><br/><br/><br/>
        <div className="col-2" style={{marginLeft:"70px", width:"85%"}}>
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1">
                <i className="fa fa-building-o"></i>
              </div>
              <h3 className="card-title">
                Company<hr/>
              </h3><br/>
              
              <form className="d-flex" style={{marginLeft:"50px"}}>
                <button className="btn btn-outline-success" onClick={AddCompany} type="submit">Add Company</button>
              </form><br/>
              <Companytable/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

)}

export default Company