import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import usersService from "../../../../services/users.service";
import {useNavigate} from 'react-router-dom'

const Producttable = () =>{
  const navigate = useNavigate();
  const[product,setProduct] = useState([]);
  const getProduct=()=>{
        usersService.getAllProduct()
        .then((response)=>{
          setProduct(response.data);
        })
        .catch((error)=>{
          console.log('something went wrong', error);
        })
  }

  const deleteProduct=(id)=>{
    usersService.deleteCompany(id)
    .then(response=>{
      console.log('deleted successfully ' + response.data);
      getProduct();
    })
    .catch((error)=>{
      console.log('something went wrong '+error);
    })
  }

  const delProduct=(id)=>{
    usersService.deleteProduct(id)
    .then(response=>{
      console.log('deleted successfully ' + response.data);
      getProduct();
    })
    .catch((error)=>{
      console.log('something went wrong '+error);
    })
  }
  useEffect(()=>{
    getProduct()
  },[])

  console.log(product)
  return(
  <div>
    <table className="table" style={{width:"90%", marginLeft:"50px"}}>
      <thead className="table-success">
        <tr style={{textAlign:"center"}}>
          <th scope="col">Product Id</th>
          <th scope="col">Product Category</th>
          <th scope="col">Product Name</th>
          <th scope="col">Company Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      
      <tbody>
      {product.map((product)=>{
        return(
          <tr style={{textAlign:"center", color:"white"}}>
          <th scope="row">{product.productId}</th>
          <td>{product.category}</td>
          <td>{product.productName}</td>
          <td>{product.companyId.companyName}</td>
          <td>
            <div className="d-flex">
              
            <Link className="btn btn-outline-primary" type="button" to={`/Product/components/ShowProduct/${product.productId}`} style={{marginLeft:"60px", marginRight:"30px"}}>View</Link>
            <Link className="btn btn-outline-warning" type="button" to={`/Product/components/UpdateProduct/${product.productId}`} style={{marginRight:"30px"}}>Update</Link>&nbsp;
              <button className="btn btn-outline-danger" onClick={()=>{
                  delProduct(product.productId);
                }} type="button">Delete</button>
            </div>
            </td>
        </tr>
        )
      })}
      </tbody>
    </table>
  </div>
        
)}

export default Producttable