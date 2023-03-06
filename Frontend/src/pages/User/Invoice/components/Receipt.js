import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import usersService from '../../../../services/users.service';
import '../invoice.css'

const Receipt = () =>{
  const{id} = useParams();
  const[invoiceData,setInvoiceData] = useState([]);
  const[orderDate,setOrderDate] = useState('');
  const[userName,setUserName] = useState('');
  const[grandTotal,setGrandTotal] = useState('');


  const getAllInvoiceProducts=()=>{
    usersService.getInvoiceProduct(id)
    .then((response)=>{
      console.log("***************in get product ***********")
      console.log(response.data);
      setInvoiceData(response.data);
      setOrderDate(response.data[0].orderId.orderDate)
      setUserName(response.data[0].userId.firstName)
      console.log("***************in get product ***********")
    })
    .catch((error)=>{
      console.log("something went wrong "+error);
    })

    usersService.getGrandTotal(id)
    .then((response)=>{
      console.log(response.data);
      setGrandTotal(response.data);
    })
    .catch((error)=>{
      console.log("something went wrong "+error);

    })

    
  }
  useEffect(()=>{
    getAllInvoiceProducts();
  },[])
  return(
  <div className="invoice-image"><br/><br/>
  <div className="invoice">
    <div className="text-center">
      <div className="col-2" style={{marginLeft:"80px", width:"70%"}}>
        <div className="card bg-dark text-light">
          <div className="card-body text-center">
            <div className="h1">
              <i className="fa fa-file-text"></i>
            </div>
            <h3 className="card-title">
              Invoice<hr/>
            </h3>

            <h4>Order Details</h4><br/>
            <form>
              <div class="row">
                <div class="col">
                  <label for="txt" class="form-label">Order Id</label>
                  <input type="number" class="form-control" placeholder="Order Id" name="orderid" value={id}/>
                </div>
                
                <div class="col">
                  <label for="txt" class="form-label">Order Date</label>
                  <input type="date" class="form-control" placeholder="Order Date" name="orderdate" value={orderDate} />
                </div>
              </div>
              
              <div class="row">
                <div class="col">
                  <label for="txt" class="form-label">Order Status</label>
                  <input type="text" class="form-control" placeholder="Order Status" name="orderstatus" value='PAID' />
                </div>
                
                <div class="col">
                  <label for="txt" class="form-label">User Name</label>
                  <input type="text" class="form-control" placeholder="Username" name="username" value={userName}/>
                </div>
              </div>
            </form><hr/>
            
            <h4>Order Items</h4><br/>
            <div>
              <table class="table">
                <thead class="table-success">

                  <tr>
                    <th scope="col">Product Id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Total Item</th>
                    <th scope="col">Cost Per Unit</th>
                    <th scope="col">Total Cost</th>
                  </tr>
                </thead>
                
                <tbody style={{color:"white"}}>
                  {invoiceData.map((items)=>{
                    return(
                      <tr>
                        <th scope="row">{items.productId.productId}</th>
                        <td>{items.productId.productName}</td>
                        <td>{items.totalItem}</td>
                        <td>{items.productId.costPerItem}</td>
                        <td>{items.totalCost}</td>
                        
                      </tr>
                      
                    )
                  })}
                  <tr>
                    <td></td>  
                    <td></td>  
                    <td></td>  
                    <td>Grand Total =</td>  
                    <td>{grandTotal}</td>  
                  </tr>
                </tbody><hr/>
                
              </table>

              <div>
                <center><button class="btn btn-danger" type="button">Print</button></center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

)}

export default Receipt