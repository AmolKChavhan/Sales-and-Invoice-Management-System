
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import usersService from '../../services/users.service';
import "./signin.css"


const Signin=()=>{
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();
    
    const AuthUser=(e)=>{
        e.preventDefault();

    const signInUser = {userName,password}
    usersService.signinUser(signInUser)
    .then(response =>{
        console.log("signin successfull",response.data)
        window.localStorage.setItem("userId",response.data.userId);
        if(response.data.role==='ADMIN'){
            console.log("Admin sign in");
            navigate('/components/AdminDashboard');
        }else{
            console.log("user sign in")
            navigate('/components/UserDashboard')
        }
    })
    .catch(error => {
        alert("Please Enter correct details")
        console.log("Sign in failed!!!!!",error)
    })
}
return(
<div className='signindiv'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><h2> Sales and Invoice Management System </h2></a>
        </div>
    </nav>
    {/* Sign-in Page */}
    <div className="text-center" style={{marginTop:"150px"}}>
        <div className="col-2" style={{marginLeft:"520px", width:"30%"}}>
            <div className="card bg-dark text-light">
                <div className="card-body text-center">
                    <div className="h1">
                        <i className="fa fa-user-circle-o"></i>
                    </div>
                    <h3 className="card-title">
                        Sign-in<hr/>
                    </h3>
                    <div className="admin">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type={"text"}
                                className="form-control"
                                id="username"
                                placeholder="Enter username"
                                name="username"
                                value={userName}
                                style={{width:"60%", marginLeft:"80px"}}
                                onChange={(e)=> setUserName(e.target.value)}/>
                            </div>
                            
                            <div className="form-group">
                                <br/>
                                <label htmlFor="pwd">Password</label>
                                <input type="password"
                                className="form-control"
                                id="pwd"
                                placeholder="Enter password"
                                name="pwd"
                                value={password}
                                style={{width:"60%", marginLeft:"80px"}}
                                onChange={(e)=> setPassword(e.target.value)}/>
                            </div>
                            <br/>
                            <button className="btn btn-success" onClick={(e)=>AuthUser(e)} >Sigin-in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

)}

export default Signin