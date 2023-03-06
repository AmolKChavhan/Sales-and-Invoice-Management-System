// import './product.css'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import usersService from '../../../../services/users.service';


const UpdateProduct = () =>{
  const{id} = useParams()
    const[productId,setProductId] = useState('');
    const[category,setProductCategory] = useState('');
  const[productName,setProductName] = useState('');
  const[mfgDate,setMfgDate] = useState('');
  const[expDate,setExpDate] = useState('');
  const[costPerItem,setCostPerItem] = useState('');
  const[totalStock,setTotalStock] = useState('');
  const[companyId,setCompanyId] = useState('');
  const[companyData,setCompanyData] = useState([]);
  const[companyName,setCompanyName] = useState('Received Nothing. Something Went Wrong');

  const navigate = useNavigate();

  const Product = (e)=>{
    e.preventDefault();

  const[companyName,setCompanyName] = useState('Received Nothing. Something Went Wrong');
    const productDetails = {productId,category,productName,mfgDate,expDate,costPerItem,totalStock,companyId,companyName}
    usersService.updateProduct(productDetails)
    .then(response=>{
      navigate('/components/products');
      console.log('product added successfully '+ response.data);
    })
    .catch(error=>{
      console.log("Something went wrong "+ error);
    })
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
// =====================================
        usersService.getAllCompany()
        .then((response)=>{
          console.log(response.data);
          setCompanyData(response.data);
        })
        .catch((error)=>{
          console.log("Somwthing went wrong "+error)
        })
  },[])
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
              <center><h1>Update Product</h1></center><hr/>
              <div>
                <br/>
                <form>
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Product Category</label>
                      <select className="form-control" id='category'
                                onChange={(e)=>{
                                    setProductCategory(e.target.value)
                                }}
                                >
                            <option value=''>SELECT CATEGORY</option>
                            <option value='FOOD'>FOOD</option>
                            <option value='BOOK'>BOOK</option>
                            <option value='MOBILE'>MOBILE</option>
                            <option value='COMPUTER'>COMPUTER</option>
                        </select>
                    </div>

                    <div className="col">
                      <label for="txt" className="form-label">Product Name</label>
                      <input type="text" className="form-control"  name="product name"
                      placeholder='Enter Product Name'
                      value={productName}
                      onChange={(e)=>setProductName(e.target.value)}
                     />
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Manufacture Date</label>
                      <input type="date" className="form-control"  name="mdate"
                      placeholder='Enter Manufacture Date'
                      value={mfgDate}
                      onChange={(e)=>setMfgDate(e.target.value)}
                     />
                    </div>

                    <div className="col">
                      <label for="date" className="form-label">Expiry Date</label>
                      <input type="date" className="form-control"  name="edate"
                      placeholder='Enter Expiry Date'
                      value={expDate}
                      onChange={(e)=>setExpDate(e.target.value)}
                     />
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Cost Per Item</label>
                      <input type="number" className="form-control"  name="costperitem"
                      placeholder='Enter Cost Per Item'
                      value={costPerItem}
                      onChange={(e)=>setCostPerItem(e.target.value)}
                     />
                    </div>

                    <div className="col">
                      <label for="txt" className="form-label">Total Stock</label>
                      <input type="number" className="form-control"  name="stock"
                      placeholder='Enter Total Stock'
                      value={totalStock}
                      onChange={(e)=>setTotalStock(e.target.value)}
                     />
                    </div>
                  </div>
                  <br/>
                  
                  <div className="row">
                    <div className="col">
                      <label for="txt" className="form-label">Company Name</label>
                     <select className="form-select" id='company'
                                    onChange={(e)=>{
                                        setCompanyId(e.target.value)
                                    }}>
                    <option>Select Company</option>
                    {
                      companyData.map((company)=>{
                        return <option value={company.companyId.companyName} >{company.companyName}</option>
                      })}
                  </select>
                    </div>
                  </div>
                  <br/>
                  <button type="button" className="btn btn-primary" onClick={Product}>Upadte Product</button>
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

export default UpdateProduct