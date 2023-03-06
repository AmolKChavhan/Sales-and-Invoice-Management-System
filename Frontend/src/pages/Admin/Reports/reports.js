import AdminSidebar from "../../../components/AdminSidebar"
import './reports.css'


const Reports = () => {
  return(
  <div>
    <AdminSidebar/>
    <div className="report-image"><br/><br/><br/>
    <div className="text-center">
      <div className="col-2" style={{marginLeft:"320px", width:"75%"}}>
        <div className="card bg-dark text-light">
          <div className="card-body text-center">
            <div className="h1">
              <i className="fa fa-list-alt"></i>
            </div>
            <h3 className="card-title">
              Reports<hr/>
            </h3><br/><br/><br/>
            
            <table>
              <tr>
                <th>
                  <div className="text-center">
                    <div className="col-2" style={{marginLeft:"90px", width:"70%"}}>
                      <div className="card bg-secondary text-light">
                        <div className="card-body text-center">
                          <div className="h1">
                            <i className="fa fa-file-text"></i>
                          </div>
                          <h3 className="card-title">
                            Invoice Reports
                          </h3><br/><br/>
                          <a href="http://localhost:3000/Reports/components/InvoiceReport" className="btn btn-primary">Show Details</a><br/><br/>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                
                <th>
                  <div className="text-center">
                    <div className="col-2" style={{marginLeft:"100px", width:"70%"}}>
                      <div className="card bg-secondary text-light">
                        <div className="card-body text-center">
                          <div className="h1">
                            <i className="fa fa-th-large"></i>
                          </div>
                          <h3 className="card-title">
                            Product Reports
                          </h3><br/><br/>
                          <a href="http://localhost:3000/Reports/components/ProductReport" className="btn btn-primary">Show Details</a><br/><br/>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                
                <th>
                  <div className="text-center">
                    <div className="col-2" style={{marginLeft:"100px", width:"70%"}}>
                      <div className="card bg-secondary text-light">
                        <div className="card-body text-center">
                          <div className="h1">
                            <i className="fa fa-server"></i>
                          </div>
                          <h3 className="card-title">
                            Company Reports
                          </h3><br/><br/>
                          <a href="http://localhost:3000/Reports/components/CompanyReport" className="btn btn-primary">Show Details</a><br/><br/>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </table><br/><br/>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
        
)}

export default Reports