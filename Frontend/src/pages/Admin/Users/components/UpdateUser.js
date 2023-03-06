import '../components/AddUser.css'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import usersService from '../../../../services/users.service';

const UpdateUser = () =>{
    const {id}= useParams();
    const[userId,setUserId] = useState('Received Nothing. Something Went Wrong');
    const[firstName,setFirstName] = useState('Received Nothing. Something Went Wrong');
    const[lastName,setLastName] = useState('Received Nothing. Something Went Wrong');
    const[gender,setGender] = useState('Received Nothing. Something Went Wrong');
    const[emailId,setEmail] = useState('Received Nothing. Something Went Wrong');
    const[contactNo,setContactNo] = useState('000000000');
    const[address,setAddress] = useState('Received Nothing. Something Went Wrong');
    const[role,setRole] = useState('Received Nothing. Something Went Wrong');
    const[userName,setUserName] = useState('Received Nothing. Something Went Wrong');
    const[password, setPassword] = useState('Received Nothing. Something Went Wrong');

    const navigate = useNavigate();
   
    const User=(e)=>{
        e.preventDefault();
        const userdetails = {userId,firstName,lastName,gender,emailId,contactNo,address,role,userName,password}
        usersService.updateUser(userdetails)
        .then((response)=>{
            console.log('update successfull'+response.data);
            navigate('/components/users');
        })
        .catch((error)=>{
            console.log("Something went wrong",error)
        })
    }

    useEffect(()=>{
        
            usersService.getUser(id)
            .then((response)=>{
                setUserId(response.data.userId);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setGender(response.data.gender);
                setEmail(response.data.emailId);
                setContactNo(response.data.contactNo);
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
            <center><h1>Update User Details</h1></center><hr/>
            <div>
                <form>
                <div className="row">
                    <div className="col">
                    <label for="txt" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="firstName"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                         />
                    </div>

                    <div className="col">
                    <label for="txt" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control"  
                        name="lname" 
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}/>
                    </div>
                </div>
                <br/>
                
                <div className="row">
                <div className="col">
                    <label for="txt" className="form-label">Gender</label>
                    <select className="form-control" id='gender'
                            onChange={(e)=>{
                                setGender(e.target.value)
                            }}>
                        <option value='MALE'>MALE</option>
                        <option value='FEMALE'>FEMALE</option>
                        <option value='OTHERS'>OTHERS</option>
                    </select>
                    </div>
                    
                <div className="col">
                    <label for="txt" className="form-label">Role</label>
                    <select className="form-control" id='role'
                                onChange={(e)=>{
                                    setRole(e.target.value)
                                }}>
                            <option value='ADMIN'>ADMIN</option>
                            <option value='USER'>USER</option>
                        </select>
                    </div>
                    
                   
                </div>
                <br/>
                
                <div className="row">
                    <div className="col">
                    <label for="date" className="form-label">Email Id</label>
                    <input 
                        type="email" 
                        className="form-control"  
                        name="email" 
                        value={emailId}
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    
                    <div className="col">
                    <label for="txt" className="form-label">Contact No.</label>
                    <input 
                        type="number" 
                        className="form-control"  
                        name="contactno" 
                        value={contactNo}
                        onChange={(e)=>setContactNo(e.target.value)}/>
                    </div>
                </div>
                <br/>
                
                <div className="row">
                    <div className="col">
                    <label for="txt" className="form-label">UserName</label>
                    <input 
                        type="text" 
                        className="form-control"  
                        name="username" 
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}/>
                    </div>

                    <div className="col">
                  <label for="txt" className="form-label">Password</label>
                  <input 
                    type="text" 
                    className="form-control"  
                    name="password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                </div>
                <br/>
                
                <div className="row">
                    <div className="col">
                    <label for="txt" className="form-label">Address</label>
                    <input 
                        type="text" 
                        className="form-control"  
                        name="address" 
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                </div>
                <br/><br/>
                <button type="button" className="btn btn-primary" onClick={User}>Update User Details</button>
                </form>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

)}

export default UpdateUser