import { useEffect, useState } from 'react'
import '../reports.css'
import usersService from '../../../../services/users.service';
import { useParams } from 'react-router-dom';

const ShowInvoiceReport = () =>{
  const[invoiceDetails,setInvoiceDetails] = useState([]);
  const{id}=useParams();
  const[productId,setProductId] = useState('');
  const[productName,setProductName] = useState('');
  const[userName,setUserName] = useState('');
  const[costPerItem,setCostPerItem] = useState('');
  const[orderDate,setOrderDate] = useState('');
  const[grandTotal,setGrandTotal] = useState('');
  const[totalItem,setTotalItem] = useState('');
  const[totalCost,setTotalCost] = useState('');

  const getInvoice = () =>{
    console.log("in method");
    usersService.getInvoice(id)
    .then((response)=>{
      console.log(response.data);
      setInvoiceDetails(response.data);
    //   console.log(invoiceDetails);
    })
    .catch((error)=>{
      console.log('something went wrong', error);
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
          
          <table className="table" style={{}}>
            <thead className="table-success">
              <tr style={{textAlign:"center"}}>
                <th scope="col">Order Id</th>
                <th scope="col">Order Date</th>
                <th scope="col">Order Status</th>
                <th scope="col">User Name</th>
                <th scope="col">ProductId</th>
                <th scope="col">Product Name</th>
                <th scope="col">Cost/Item</th>
                <th scope="col">Total Item</th>
                <th scope="col">Total Cost</th>
              </tr>
            </thead>
            
            <tbody>
             {invoiceDetails.map((invoiceReport)=>{
                return(
                    <tr style={{textAlign:"center", color:"white"}}>
                        <th scope="row">{invoiceReport.orderId.orderId}</th>
                        <td>{invoiceReport.orderId.orderDate}</td>
                        <td>Paid</td>
                        <td>{invoiceReport.userId.firstName}</td>
                        <td>{invoiceReport.productId.productId}</td>
                        <td>{invoiceReport.productId.productName}</td>
                        <td>{invoiceReport.productId.costPerItem}</td>
                        <td>{invoiceReport.totalItem}</td>
                        <td>{invoiceReport.productId.costPerItem * invoiceReport.totalItem}</td>
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

export default ShowInvoiceReport    