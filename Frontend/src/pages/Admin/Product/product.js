import AdminSidebar from "../../../components/AdminSidebar"
import {useNavigate} from 'react-router-dom'
import Producttable from "./components/producttable"
import './product.css'

const Products = () => {
  const navigate = useNavigate();
  const AddProduct=()=>{
    navigate('../Product/components/AddProduct')
  }
  return(
  <div className="product-image">
    <div className="product">
      <AdminSidebar/>
      <div>
        <div className="text-center" ><br/><br/><br/>
        <div className="col-2" style={{marginLeft:"70px", width:"85%"}}>
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1">
                <i className="fa fa-cubes"></i>
              </div>
              <h3 className="card-title">
                Products<hr/>
              </h3><br/>
              <form className="d-flex" style={{marginLeft:"50px"}}>
                <button className="btn btn-outline-success" onClick={AddProduct} type="submit">Add Product</button>
              </form><br/>
              <Producttable/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

)}

export default Products