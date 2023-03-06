import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import usersService from "../../../../services/users.service";
import {useNavigate} from 'react-router-dom'

const Companytable = () =>{
  const navigate = useNavigate();
  const[company,setCompany] = useState([]);

  const getCompany=()=>{
        usersService.getAllCompany()
        .then((response)=>{
          setCompany(response.data);
        })
        .catch((error)=>{
          console.log('something went wrong', error);
        })
  }

  const deleteCompany=(id)=>{
    usersService.deleteCompany(id)
    .then(response=>{
      console.log('deleted successfully ' + response.data);
      getCompany();
    })
    .catch((error)=>{
      console.log('something went wrong '+error);
    })
  }
 
  useEffect(()=>{
    getCompany()
  },[])

  console.log(company)
  return(
  <div>
    <table className="table" style={{width:"90%", marginLeft:"50px"}}>
      <thead className="table-success">
        <tr style={{textAlign:"center"}}>
          <th scope="col">Company Id</th>
          <th scope="col">Company Name</th>
          <th scope="col">Contact No.</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      
      <tbody>
      {company.map((company)=>{
        return(
        <tr style={{textAlign:"center", color:"white"}}>
          <th scope="row">{company.companyId}</th>
          <td>{company.companyName}</td>
          <td>{company.companyContact}</td>
          <td>
            <div className="d-flex">
            <Link className="btn btn-outline-primary" to={`/Company/components/ShowCompany/${company.companyId}`} type="button" style={{marginLeft:"100px", marginRight:"30px"}}>View</Link>
            <Link className="btn btn-outline-warning" to={`/Company/components/UpdateCompany/${company.companyId}`} type="button" style={{marginRight:"30px"}}>Update</Link>&nbsp;
              <button className="btn btn-outline-danger" onClick={()=>{
                  deleteCompany(company.companyId);
                }} type="button">Delete</button>
            </div>
          </td>
        </tr>
        )
      })}
      </tbody>
    </table>
  </div>
        
)}

export default Companytable