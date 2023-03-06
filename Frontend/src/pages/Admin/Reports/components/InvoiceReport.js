import { useEffect, useState } from 'react'
import '../reports.css'
import usersService from '../../../../services/users.service';
import { Link } from 'react-router-dom';

const InvoiceReport = () =>{
  const[invoiceDetails,setInvoiceDetails] = useState([]);
  const getInvoice = () =>{
    console.log("in method");
    usersService.getAllInvoice()
    .then((response)=>{
      console.log(response.data);
      setInvoiceDetails(response.data);
      console.log(invoiceDetails);
    })
    .catch((error)=>{
      console.log('something went wrong', error);
    })
  }

  const deleteInvoice=(id)=>{
    usersService.deleteInvoice(id)
    .then(response=>{
      console.log('deleted successfully ' + response.data);
      getInvoice();
    })
    .catch((error)=>{
      console.log('something went wrong '+error);
    })
  }

  useEffect(()=>{
    console.log("Use effect working");
    getInvoice();
  },[])

  return(
  <div className="report-image"><br/><br/><br/>
  <div className="text-center">
    <div className="col-2" style={{marginLeft:"150px", width:"80%"}}>
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1">
            <i className="fa fa-file-text"></i>
          </div>
          <h3 className="card-title">
            Invoice Reports<hr/>
          </h3><br/><br/>
          
          <table className="table" style={{width:"80%", marginLeft:"110px"}}>
            <thead className="table-success">
              <tr style={{textAlign:"center"}}>
                <th scope="col">Order Id</th>
                <th scope="col">Order Date</th>
                <th scope="col">Order Status</th>
                <th scope="col">User Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            
            <tbody>
              {invoiceDetails.map((invoiceDetail)=>{
                return(
                  <tr style={{textAlign:"center", color:"white"}}>
                    <th scope="row">{invoiceDetail.orderId}</th>
                    <td>{invoiceDetail.orderDate}</td>
                    <td>Paid</td>
                    <td>{invoiceDetail.firstName}</td>
                    <td>
                  <div className="d-flex">
                    <Link className="btn btn-outline-primary" to={`/Reports/components/showInvoiceReport/${invoiceDetail.orderId}`} style={{marginLeft:"140px", marginRight:"30px"}}>View</Link>
                    <button className="btn btn-outline-danger" onClick={()=>{
                        deleteInvoice(invoiceDetail.orderId);
                      }} type="button">Delete</button>
                  </div>
                </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>

)}

export default InvoiceReport