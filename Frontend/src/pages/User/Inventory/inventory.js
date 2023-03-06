import UserSidebar from "../../../components/UserSidebar";
import {useNavigate} from 'react-router-dom'
import Inventorytable from "./components/inventorytable";
import './inventory.css'


const Inventory = () => {
  const navigate = useNavigate();
  const AddProduct=()=>{
    navigate('../Product/components/AddInventory')
  }
  return(
  <div className="product-image">
    <div className="product">
      <UserSidebar/>
      <div>
        <div className="text-center"><br/><br/><br/>
        <div className="col-2" style={{marginLeft:"70px", width:"85%"}}>
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1">
                <i className="fa fa-cubes"></i>
              </div>
              <h3 className="card-title">
                Inventory<hr/>
              </h3><br/>
              <form className="d-flex" style={{marginLeft:"50px"}}>
                <button className="btn btn-outline-success" onClick={AddProduct} type="submit">Add Product</button>
              </form><br/>
              <Inventorytable/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

)}

export default Inventory

