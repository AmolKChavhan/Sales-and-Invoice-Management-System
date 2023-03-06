import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './pages/Hompage/home';
import Signin from './pages/SigninPage/signin'
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

import Users from './pages/Admin/Users/users';
import Usertable from './pages/Admin/Users/components/usertable';
import AddUser from './pages/Admin/Users/components/AddUser';
import ShowUser from './pages/Admin/Users/components/ShowUser';
import UpdateUser from './pages/Admin/Users/components/UpdateUser';

import Products from './pages/Admin/Product/product';
import Producttable from './pages/Admin/Product/components/producttable';
import AddProduct from './pages/Admin/Product/components/AddProduct';
import ShowProduct from './pages/Admin/Product/components/ShowProduct';
import UpdateProduct from './pages/Admin/Product/components/UpdateProduct';

import Company from './pages/Admin/Company/company';
import Companytable from './pages/Admin/Company/components/companytable';
import AddCompany from './pages/Admin/Company/components/AddCompany';
import ShowCompany from './pages/Admin/Company/components/ShowCompany';
import UpdateCompany from './pages/Admin/Company/components/UpdateCompany';


import Reports from './pages/Admin/Reports/reports';
import InvoiceReport from './pages/Admin/Reports/components/InvoiceReport';
import ShowInvoiceReport from './pages/Admin/Reports/components/showInvoiceReport';
import ProductReport from './pages/Admin/Reports/components/ProductReport';
import CompanyReport from './pages/Admin/Reports/components/CompanyReport';

import Inventory from './pages/User/Inventory/inventory';
import AddInventory from './pages/User/Inventory/components/AddInventory';

import Invoice from './pages/User/Invoice/invoice';
import Receipt from './pages/User/Invoice/components/Receipt';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages/SigninPage/Signin' element={<Signin/>}/>
      <Route path='/components/AdminDashboard' element={<AdminDashboard/>}/>
      <Route path='/components/UserDashboard' element={<UserDashboard/>}/>

      <Route path='/components/users' element={<Users/>}/>
      <Route path='/Users/components/Usertable' element={<Usertable/>}/>
      <Route path='/Users/components/AddUser' element={<AddUser/>}/>
      <Route path='/Users/components/ShowUser/:id' element={<ShowUser/>}/>
      <Route path='/Users/components/UpdateUser/:id' element={<UpdateUser/>}/>
      
      <Route path='/components/products' element={<Products/>}/>
      <Route path='/Product/components/Producttable' element={<Producttable/>}/>
      <Route path='/Product/components/AddProduct' element={<AddProduct/>}/>
      <Route path='/Product/components/ShowProduct/:id' element={<ShowProduct/>}/>
      <Route path='/Product/components/UpdateProduct/:id' element={<UpdateProduct/>}/>

      <Route path='/components/company' element={<Company/>}/>
      <Route path='/Company/components/Companytable' element={<Companytable/>}/>
      <Route path='/Company/components/AddCompany' element={<AddCompany/>}/>
      <Route path='/Company/components/ShowCompany/:id' element={<ShowCompany/>}/>
      <Route path='/Company/components/UpdateCompany/:id' element={<UpdateCompany/>}/>

      <Route path='/components/reports' element={<Reports/>}/>
      <Route path='/Reports/components/InvoiceReport' element={<InvoiceReport/>}/>
      <Route path='/Reports/components/showInvoiceReport/:id' element={<ShowInvoiceReport/>}/>
      <Route path='/Reports/components/ProductReport' element={<ProductReport/>}/>
      <Route path='/Reports/components/CompanyReport' element={<CompanyReport/>}/>

      <Route path='/components/inventory' element={<Inventory/>}/>
      <Route path='/Product/components/AddInventory' element={<AddInventory/>}/>

      <Route path='/components/invoice' element={<Invoice/>}/>
      
      
      <Route path='/Invoice/components/Receipt/:id' element={<Receipt/>}/>

    </Routes>
    </BrowserRouter>
)}

export default App;
