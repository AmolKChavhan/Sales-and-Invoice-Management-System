import UserSidebar from "../../../components/UserSidebar";
import {useNavigate} from 'react-router-dom'
import './invoice.css'
import { useEffect, useState } from "react";
import usersService from "../../../services/users.service";



const Invoice = () => {
  const[orderId,setOrderId] = useState('');
  const[orderDate,setOrderDate] = useState('');
  const[productId,setProductId] = useState('');
  const[totalItem,setTotalItem] = useState('');
  const[userId,setUserId] = useState('1');
  const[productData,setProductData] = useState([]);
  const[invoiceProduct,setInvoiceProduct] = useState([]);
  const navigate = useNavigate();
  
  const Receipt=()=>{
    navigate(`/Invoice/components/Receipt/${orderId}`)
  }

  const getInvoiceId=()=>{
    console.log("in rest api")
    usersService.generateInvoice()
    .then((response)=>{
       console.log(response.data);
      setOrderId(response.data.orderId);
      setOrderDate(response.data.orderDate);
      getAllInvoiceProducts();
    })
    .catch((error)=>{
      console.log("Something went wrong "+error);
    })

    usersService.getAllProduct()
    .then((response)=>{
      console.log(response.data);
      setProductData(response.data);
    })
    .catch((error)=>{
      console.log("Something went wrong "+error);
    })
  }

  const addInvoice=()=>{
    console.log("Inside add invoice********************");
    console.log("orderId"+orderId);
    console.log("totalItem"+totalItem);
    console.log("productId"+productId);
    console.log("Inside add invoice********************");
    //setUserId(window.localStorage.getItem("userId"));

    const invoiceAdd = {orderId,totalItem,userId,productId}
    usersService.addInvoice(invoiceAdd)
    .then((response)=>{
      console.log(response.data);
      getAllInvoiceProducts();
    })
    .catch((error)=>{
      console.log("something went wrong "+error);
    })
  }

  const getAllInvoiceProducts=()=>{
    usersService.getInvoiceProduct(orderId)
    .then((response)=>{
      console.log("***************in get product ***********")
      console.log(response.data);
      setInvoiceProduct(response.data);
      console.log("***************in get product ***********")
    })
    .catch((error)=>{
      console.log("something went wrong "+error);
    })
  }

  const deleteProduct=()=>{
    const productDel = {orderId,productId}
    usersService.deleteInvoicePrd(productDel)
    .then((response)=>{
      console.log("Deleted Successfully: "+response.data);
      getAllInvoiceProducts();
    })
    .catch((error)=>{
      console.log("something went wrong "+error);
    })
  }
  useEffect(()=>{ 

  },[])

  return(
  <div className="invoice-image"><br/><br/>
  <div className="invoice">
    <UserSidebar/>
    <div className="text-center">
      <div className="col-2" style={{marginLeft:"110px", width:"85%"}}>
        <div className="card bg-dark text-light">
          <div className="card-body text-center">
            <div className="h1">
              <i className="fa fa-file-text"></i>
            </div>
            <h3 className="card-title">
              Invoice
            </h3>
            <div>
              <button class="btn btn-danger" type="button" onClick={getInvoiceId}>Start</button>
              <hr/>

            </div>
            <h4>Order Details</h4>
            <form>
              <div class="row">
                <div class="col">
                  <label for="txt" class="form-label">Order Id</label>
                  <input type="number" class="form-control" placeholder="Order Id" name="orderid" value={orderId}/>
                </div>
                
                <div class="col">
                  <label for="txt" class="form-label">Order Date</label>
                  <input type="date" class="form-control" placeholder="Order Date" name="orderdate" value={orderDate}/>
                </div>
              </div>
              <br/>
              
              <h4>Add Items Into Cart</h4>
              <div class="row">
                <div class="col">
                  <label for="txt" class="form-label">Select Product</label>
                  
                  <select className="form-select" id='product'
                                    onChange={(e)=>{
                                        setProductId(e.target.value)
                                    }}>
                    <option>Select Product</option>
                    {
                      productData.map((product)=>{
                        return <option value={product.productId} >{product.productName}</option>
                      })}
                  </select>
                </div>
                
                <div class="col">
                  <label for="txt" class="form-label" >Enter Quantity</label>
                  <input type="number" 
                          class="form-control" 
                          name="totalItem" 
                          placeholder='Enter Quantity'
                          value={totalItem}
                          onChange={(e)=>setTotalItem(e.target.value)}/>
                </div>
              </div>
              <div>
                <br/>
                <center><button type="button" class="btn btn-primary" onClick={addInvoice}>Add Item</button></center>
              </div>
            </form><hr/>
            
            <h4>Order Item Details</h4><br/>
            <div>
              <table class="table">
                <thead class="table-success">
                  <tr>
                    <th scope="col">Product Id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price Per Unit</th>
                    <th scope="col">Total Unit</th>
                    <th scope="col">Total Cost</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                
                <tbody style={{color:"white"}}>
                  {
                    invoiceProduct.map((AllProducts)=>{
                      return(
                        <tr>
                          <th scope="row">{AllProducts.productId.productId}</th>
                          <td>{AllProducts.productId.productName}</td>
                          <td>{AllProducts.productId.costPerItem}</td>
                          <td>{AllProducts.totalItem}</td>
                          <td>{AllProducts.totalCost}</td>
                          <td>
                            <button class="btn btn-danger" type="button" onClick={deleteProduct}>Delete</button>
                          </td>
                        </tr>
                      )
                    })

                  }
                </tbody>
              </table>
              <div>
                <center><button class="btn btn-primary" onClick={Receipt} type="button">Save Sell Details</button></center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
)}
  
  export default Invoice
  