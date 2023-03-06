import '../components/AddUser.css'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import usersService from '../../../../services/users.service';


const AddUser = () =>{
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[gender,setGender] = useState('');
    const[emailId,setEmail] = useState('');
    const[contactNo,setContactNo] = useState('');
    const[address,setAddress] = useState('');
    const[role,setRole] = useState('');
    const[userName,setUserName] = useState('');
    const[password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const saveUser = (e)=>{
    e.preventDefault();

    const userdetails = {firstName,lastName,gender,emailId,contactNo,address,role,userName,password}
    usersService.addUser(userdetails)
    .then(response=>{
      navigate('/components/users');
      console.log('user added successfully '+ response.data);
    })
    .catch(error=>{
      console.log("Something went wrong "+ error);
    })
  }
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
          <center><h1>Add User</h1></center><hr/>
          <div>
            <form>
              <div className="row">
                <div className="col">
                  <label for="txt" className="form-label">First Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="fname"
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    />
                </div>

                <div className="col">
                  <label for="txt" className="form-label">Last Name</label>
                  <input type="text" className="form-control"  name="lname"
                          placeholder='Enter Last Name'
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
                                <option value=''>SELECT</option>
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
                                }}
                                >
                            <option value=''>SELECT</option>
                            <option value='ADMIN'>ADMIN</option>
                            <option value='USER'>USER</option>
                        </select>
                </div>
              </div>
              <br/>
              
              <div className="row">
                <div className="col">
                  <label for="date" className="form-label">Email Id</label>
                  <input type="email" className="form-control"  name="email"
                        placeholder='Enter Email'
                        value={emailId}
                        onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                
                <div className="col">
                  <label for="txt" className="form-label">Contact No.</label>
                  <input type="number" className="form-control"  name="contactno"
                        placeholder='Enter Contact'
                        value={contactNo}
                        onChange={(e)=>setContactNo(e.target.value)}/>
                </div>
              </div>
              <br/>

              <div className="row">
                <div className="col">
                  <label for="txt" className="form-label">UserName</label>
                  <input type="text" className="form-control"  name="username"
                        placeholder='Enter UserName'
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                
                <div className="col">
                  <label for="txt" className="form-label">Password</label>
                  <input type="password" className="form-control"  name="password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                </div>
              </div>
              <br/>
              
              <div className="row">
                <div className="col">
                  <label for="txt" className="form-label">Address</label>
                  <input type="text" className="form-control"  name="address"
                        placeholder='Enter Address'
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}/>
                </div>
              </div>
              <br/><br/>
              <button type="button" className="btn btn-primary" 
              onClick={(e)=>saveUser(e)}>Submit</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>

)}

export default AddUser