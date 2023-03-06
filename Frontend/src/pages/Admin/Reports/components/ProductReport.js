import '../reports.css'

const ProductReport = () =>{
  return(
  <div className="report-image"><br/><br/><br/>
  <div className="text-center">
    <div className="col-2" style={{marginLeft:"110px", width:"85%"}}>
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1">
            <i className="fa fa-cubes"></i>
          </div>
          <h3 className="card-title">
            Product Reports<hr/>
          </h3><br/><br/>
          
          <table className="table" style={{width:"90%", marginLeft:"50px"}}>
            <thead className="table-success">
              <tr style={{textAlign:"center"}}>
                <th scope="col">Product Id</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Name</th>
                <th scope="col">Manufacture Date</th>
                <th scope="col">Expiry Date</th>
                <th scope="col">Company Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            
            <tbody>
              <tr style={{textAlign:"center", color:"white"}}>
                <th scope="row">1</th>
                <td>Noodles</td>
                <td>Maggi</td>
                <td>20/01/2022</td>
                <td>19/12/2022</td>
                <td>Nestlé Global</td>
                <td>
                  <div className="d-flex">
                    <button className="btn btn-outline-primary" type="button" style={{marginLeft:"40px", marginRight:"30px"}}>View</button>
                    <button className="btn btn-outline-danger" type="button">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>
        
)}

export default ProductReport