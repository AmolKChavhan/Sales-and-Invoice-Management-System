import '../components/AddUser.css'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import usersService from '../../../../services/users.service';

const ShowUser = () =>{
    const {id}= useParams();
    const[userId,setUserId] = useState('Received Nothing. Something Went Wrong');
    const[firstName,setFirstName] = useState('Received Nothing. Something Went Wrong');
    const[lastName,setLastName] = useState('Received Nothing. Something Went Wrong');
    const[gender,setGender] = useState('Received Nothing. Something Went Wrong');
    const[email,setEmail] = useState('Received Nothing. Something Went Wrong');
    const[contact,setContact] = useState('000000000');
    const[address,setAddress] = useState('Received Nothing. Something Went Wrong');
    const[role,setRole] = useState('Received Nothing. Something Went Wrong');
    const[userName,setUserName] = useState('Received Nothing. Something Went Wrong');
    const[password, setPassword] = useState('Received Nothing. Something Went Wrong');

    const navigate = useNavigate();
   
    const User=()=>{
        navigate('/components/users')
    }

    useEffect(()=>{
        
            usersService.getUser(id)
            .then((response)=>{
                setUserId(response.data.userId);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setGender(response.data.gender);
                setEmail(response.data.emailId);
                setContact(response.data.contactNo);
                setRole(response.data.role);
                setUserName(response.data.userName);
                setAddress(response.data.address);
                setPassword(response.data.password);
            })
            .catch((error)=>{
                console.log("Something went wrong",error)
            })
        }
        
    ,[])

    return(
    <div className="adduser-image"><br/><br/>
    <div className="text-center">
        <div className="col-2" style={{marginLeft:"300px", width:"60%"}}>
        <div className="card bg-dark text-light">
            <div className="card-body text-center">
            <div className="h1">
                <i className="fa fa-user-secret"></i>
            </div>
            <div className='user-form'>
            <center><h1>User Details</h1></center><hr/>
            <div>
                <form>
                <div className="row">
                    <div className="col">
                    <label for="txt" className="form-label">First Name</label>
                    <input type="text" className="form-control" name="fname" value={firstName}/>
                    </div>

                    <div className="col">
                    <label for="txt" className="form-label">Last Name</label>
                    <input type="text" className="form-control"  name="lname" value={lastName}/>
                    </div>
                    
                </div>
                <br/>
                
                <div className="row">
                    
                    <div className="col">
                    <label for="txt" className="form-label">Gender</label>
                    <input type="txt" className="form-control"  name="gender" value={gender}/>
                    </div>

                    <div className="col">
                    <label for="txt" className="form-label">Role</label>
                    <input type="text" className="form-control"  name="role" value={role}/>
                    </div>
                </div>
                <br/>
                
                <div className="row">
                    <div className="col">
                    <label for="date" className="form-label">Email Id</label>
                    <input type="email" className="form-control"  name="email" value={email}/>
                    </div>
                    
                    <div className="col">
                    <label for="txt" className="form-label">Contact No.</label>
                    <input type="number" className="form-control"  name="contactno" value={contact}/>
                    </div>
                </div>
                <br/>
                
                <div className="row">
                   
                    <div className="col">
                    <label for="txt" className="form-label">UserName</label>
                    <input type="text" className="form-control"  name="username" value={userName}/>
                    </div>

                    <div className="col">
                  <label for="txt" className="form-label">Password</label>
                  <input type="text" className="form-control"  name="password" value={password}/>
                </div>
                </div>
                <br/>
                
                <div className="row">
                    <div className="col">
                    <label for="txt" className="form-label">Address</label>
                    <input type="text" className="form-control"  name="address" value={address}/>
                    </div>
                </div>
                <br/><br/>
                <button type="button" className="btn btn-primary" onClick={User}>Back</button>
                </form>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

)}

export default ShowUser