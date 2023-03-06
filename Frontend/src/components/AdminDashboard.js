import AdminSidebar from "./AdminSidebar"
import './Dashboard.css'

const AdminDashboard = () => {
    return (
    <div>
      <AdminSidebar/>
      <div>
        <div className="background-image"><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="text-center">
          <div className="col-2" style={{marginLeft:"450px", width:"60%"}}>
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1">
                  <i className="fa fa-handshake-o"></i>
                </div>
                <h3 className="card-title">
                  Welcome<br/>Admin</h3><br/><br/>
                  <p>
                    “Take the first step in faith.<br/>
                    You don’t have to see the whole staircase, just take the first step.”<br/><br/>
                    <b>– Martin Luther King Jr.</b>
                  </p><br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )}
  
  export default AdminDashboard
  