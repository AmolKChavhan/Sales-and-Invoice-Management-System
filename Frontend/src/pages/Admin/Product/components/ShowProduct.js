import '../components/AddProduct.css'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import usersService from '../../../../services/users.service';

const ShowProduct = () =>{
    const {id}= useParams();
    const[productId,setProductId] = useState('Received Nothing. Something Went Wrong');
    const[category,setProductCategory] = useState('Received Nothing. Something Went Wrong');
    const[productName,setProductName] = useState('Received Nothing. Something Went Wrong');
    const[mfgDate,setMfgDate] = useState('Received Nothing. Something Went Wrong');
    const[expDate,setExpDate] = useState('Received Nothing. Something Went Wrong');
    const[costPerItem,setCostPerItem] = useState('Received Nothing. Something Went Wrong');
    const[totalStock,setTotalStock] = useState('Received Nothing. Something Went Wrong');
    const[companyName,setCompanyName] = useState('Received Nothing. Something Went Wrong');
    const navigate = useNavigate();

    const Product=()=>{
        navigate('/components/products');
    }

    useEffect(()=>{
        usersService.getProduct(id)
        .then((response)=>{
          console.log(response.data);
            setProductId(response.data.productId);
            setProductCategory(response.data.category);
            setProductName(response.data.productName);
            setCostPerItem(response.data.costPerItem);
            setMfgDate(response.data.mfgDate);
            setExpDate(response.data.expDate);
            setTotalStock(response.data.totalStock);
            setCompanyName(response.data.companyId.companyName);

        })
        .catch((error)=>{
            console.log("Something went wrong",error)
        })
    }
    
,[])

    return(
        <div className="addproduct-image"><br/><br/><br/>
  <div className="text-center">
    <div className="col-2" style={{marginLeft:"300px", width:"60%"}}>
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1">
            <i className="fa fa-cubes"></i>
          </div>
          <div className='product-form'>
            <div>
              <center><h1>Product Details</h1></center><hr/>
              <div>
                <br/>
                <form>
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Product Category</label>
                      <input type="text" className="form-control" name="product category" value={category}/>
                    </div>

                    <div className="col">
                      <label for="txt" className="form-label">Product Name</label>
                      <input type="text" className="form-control"  name="product name" value={productName}/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Manufacture Date</label>
                      <input type="date" className="form-control"  name="mdate" value={mfgDate}/>
                    </div>

                    <div className="col">
                      <label for="date" className="form-label">Expiry Date</label>
                      <input type="date" className="form-control"  name="edate" value={expDate}/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Cost Per Item</label>
                      <input type="number" className="form-control"  name="costperitem" value={costPerItem}/>
                    </div>

                    <div className="col">
                      <label for="txt" className="form-label">Total Stock</label>
                      <input type="number" className="form-control"  name="stock" value={totalStock}/>
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Company Name</label>
                      <input type="text" className="form-control"  name="companyname" value={companyName}/>
                    </div>
                  </div>
                  <br/>
                  <button type="button" className="btn btn-primary" onClick={Product}>Back</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

    )
}

export default ShowProduct