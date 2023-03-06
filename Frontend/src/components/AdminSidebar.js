
import "./Sidebar.css"

const AdminSidebar = () => {
  return (
  <div>
    {/* The sidebar */}
    <div className="sidebar" >
      <div>
        <b><center><a><i className="fa fa-buysellads"></i><br/>ADMIN</a></center></b> 
      </div><hr/>
      <a href="AdminDashboard"><i className="fa fa-tachometer"></i> Dashboard</a>
      <a href="users"><i className="fa fa-users"></i> Users</a>
      <a href="products"><i className="fa fa-cubes"></i> Products</a>
      <a href="company"><i className="fa fa-building"></i> Company</a>
      <a href="reports"><i className="fa fa-list-alt"></i> Reports</a>
      <a href="/"><i className="fa fa-sign-out"></i> Sign-Out</a>
    </div>
  </div>
)}

export default AdminSidebar
