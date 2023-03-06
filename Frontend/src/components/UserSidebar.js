import "./Sidebar.css"

const UserSidebar = function () {

    return (
    <div>
      <div className="sidebar">
        <div>
          <b><center><a><i className="fa fa-user-circle-o"></i><br/>USER</a></center></b> 
        </div><hr/>
        <a href="UserDashboard"><i className="fa fa-tachometer"></i> Dashboard</a>
        <a href="invoice"><i className="fa fa-file-text"></i> Invoice</a>
        <a href="inventory"><i className="fa fa-cubes"></i> Inventory</a>
        <a href="/"><i className="fa fa-sign-out"></i> Sign-Out</a>
      </div>
    </div>
  )}
  
  export default UserSidebar