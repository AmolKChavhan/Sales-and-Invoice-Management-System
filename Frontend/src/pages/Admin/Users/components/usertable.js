import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import usersService from "../../../../services/users.service";
import {useNavigate} from 'react-router-dom'

const Usertable = () =>{

  const navigate = useNavigate();
  const[user,setUser] = useState([]);
  const getUsers=()=>{
        usersService.getAllUser()
        .then((response)=>{
          setUser(response.data);
        })
        .catch((error)=>{
          console.log('something went wrong', error);
        })
  }

  const deleteUser=(id)=>{
    usersService.deleteUser(id)
    .then(response=>{
      console.log('deleted successfully ' + response.data);
      getUsers();
    })
    .catch((error)=>{
      console.log('something went wrong '+error);
    })
  }
 
  useEffect(()=>{
   getUsers()
  },[])

  console.log(user)
  return(
  <div>
    <table className="table" style={{width:"90%", marginLeft:"50px"}}>
      <thead className="table-success">
        <tr style={{textAlign:"center"}}>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Contact No.</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      
      <tbody>

        {user.map((users)=>{
          return(
            <tr style={{textAlign:"center", color:"white"}}>
              <th scope="row">{users.userId}</th>
              <td>{users.firstName}</td>
              <td>{users.lastName}</td>
              <td>{users.contactNo}</td>
              <td>
              <div className="d-flex">
                <Link className="btn btn-outline-primary" to={`/Users/components/ShowUser/${users.userId}`} style={{marginLeft:"140px", marginRight:"50px"}}>View</Link>
                <Link className="btn btn-outline-warning" to={`/Users/components/UpdateUser/${users.userId}`} type="button" style={{marginRight:"40px"}}>Update</Link>&nbsp;
                <button className="btn btn-outline-danger" onClick={()=>{
                  deleteUser(users.userId);
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

export default Usertable