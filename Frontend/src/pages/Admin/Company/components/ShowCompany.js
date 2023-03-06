import '../components/AddCompany.css'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import usersService from '../../../../services/users.service';

const ShowCompany =()=>{
    const {id}= useParams();
    const[companyId,setCompanyId] = useState('Received Nothing. Something Went Wrong');
    const[companyName,setCompanyName] = useState('Received Nothing. Something Went Wrong');
    const[companyDetails,setCompanyDetails] = useState('Received Nothing. Something Went Wrong');
    const[email,setEmail] = useState('Received Nothing. Something Went Wrong');
    const[companyContact,setCompanyContact] = useState('Received Nothing. Something Went Wrong');
    const[address,setAddress] = useState('Received Nothing. Something Went Wrong');
  const navigate = useNavigate();

  const Company=()=>{
    navigate('/components/company')
}

useEffect(()=>{
        usersService.getCompany(id)
        .then((response)=>{
          console.log(response.data);
            setCompanyId(response.data.companyId);
            setCompanyName(response.data.companyName);
            setCompanyDetails(response.data.companyDetails);
            setEmail(response.data.email);
            setCompanyContact(response.data.companyContact);
            setAddress(response.data.address);
        })
        .catch((error)=>{
            console.log("Something went wrong",error)
        })
    }
    
,[])

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
              <center><h1>Company Details</h1></center><hr/>
              <div>
                <br/>
                <form>
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Company Name</label>
                      <input type="text" className="form-control" name="company name" value={companyName}/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Company Description</label>
                      <textarea type="text" className="form-control"  name="compDescription" value={companyDetails}/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Contact No.</label>
                      <input type="number" className="form-control"  name="contact" value={companyContact}/>
                    </div>
                    
                    <div className="col">
                      <label for="txt" className="form-label">Email Id</label>
                      <input type="email" className="form-control"  name="email" value={email}/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Address</label>
                      <input type="text" className="form-control"  name="address" value={address}/>
                    </div>
                  </div>
                  <br/>
                  <button type="button" className="btn btn-primary" onClick={Company}>Back</button>
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

export default ShowCompany