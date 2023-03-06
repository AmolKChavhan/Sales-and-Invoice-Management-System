import '../components/AddCompany.css'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import usersService from '../../../../services/users.service';


const AddCompany = () =>{
  const[companyName,setCompanyName] = useState('');
    const[companyDetails,setCompanyDetails] = useState('');
    const[email,setEmail] = useState('');
    const[companyContact,setCompanyContact] = useState('');
    const[address,setAddress] = useState('');
  const navigate = useNavigate();

  const saveCompany = (e)=>{
    e.preventDefault();

    const companyinfo = {companyName,companyDetails,email,companyContact,address}
    usersService.addCompany(companyinfo)
    .then(response=>{
      navigate('/components/company');
      console.log('company added successfully '+ response.data);
    })
    .catch(error=>{
      console.log("Something went wrong "+ error);
    })
  }

  return(
  <div className="addcompany-image"><br/><br/><br/>
  <div className="text-center" >
    <div className="col-2" style={{marginLeft:"300px", width:"60%"}}>
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1">
            <i className="fa fa-building-o"></i>
          </div>
          <div className='product-form'>
            <div>
              <center><h1>Add Company</h1></center><hr/>
              <div>
                <br/>
                <form>
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Company Name</label>
                      <input type="text" className="form-control" name="company name"
                      placeholder='Enter Company Name'
                      value={companyName}
                      onChange={(e)=>setCompanyName(e.target.value)}
                      />
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Company Description</label>
                      <textarea type="text" className="form-control"  name="compDescription"
                      placeholder='Enter Company Description'
                      value={companyDetails}
                      onChange={(e)=>setCompanyDetails(e.target.value)}
                      />
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Contact No.</label>
                      <input type="number" className="form-control"  name="contact"
                       placeholder='Enter Contact No.'
                       value={companyContact}
                       onChange={(e)=>setCompanyContact(e.target.value)}
                      />
                    </div>
                    
                    <div className="col">
                      <label for="txt" className="form-label">Email Id</label>
                      <input type="email" className="form-control"  name="email"
                      placeholder='Enter Email'
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Address</label>
                      <input type="text" className="form-control"  name="address"
                      placeholder='Enter Address'
                      value={address}
                      onChange={(e)=>setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <br/>
                  <button type="button" className="btn btn-primary" onClick={(e)=>saveCompany(e)}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

)}

export default AddCompany