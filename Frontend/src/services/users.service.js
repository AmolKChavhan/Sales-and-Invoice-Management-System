import httpClient from '../http-common';

    // Signin 
const signinUser = (data) =>{
  return httpClient.post('/signin', data);
} 
/*====================================================*/
    //user starts
    const getAllUser = ()=>{
      return httpClient.get('');
    }

    //add
    const addUser=(data)=>{
      return httpClient.post('/addUser',data)
    }

    //view
    const getUser = (id)=>{
      return httpClient.get(`/getUser/${id}`,);
    }

    //update
    const updateUser=(data)=>{
      return httpClient.put('/updateUser',data);
    }

    //delete
    const deleteUser=(id)=>{
      return httpClient.delete(`/deleteUser/${id}`);
    }

    //user ends
/*====================================================*/
    //company
    const getAllCompany = ()=>{
      return httpClient.get('/getAllCompany');
    }

    //add
    const addCompany=(data)=>{
      return httpClient.post('/addCompany',data)
    }

    //view
    const getCompany = (id)=>{
      return httpClient.get(`/getCompany/${id}`);
    }

    //update
    const updateCompany=(data)=>{
      return httpClient.put('/updateCompany',data);
    }

    //delete
    const deleteCompany=(id)=>{
      return httpClient.delete(`/deleteCompany/${id}`);
    }

    //company ends
/*====================================================*/

    //product starts
    const getAllProduct=()=>{
      return httpClient.get('/getAllProduct');
    }
    
    //add
    const addProduct = (data) =>{
      return httpClient.post('/addProduct',data);
    }

    //view
    const getProduct = (id)=>{
      return httpClient.get(`/getProduct/${id}`);
    }

    //update
    const updateProduct=(data)=>{
      return httpClient.put('/updateProduct',data);
    }

    //delete
    const deleteProduct=(id)=>{
      return httpClient.delete(`/deleteProduct/${id}`);
    }

    //product ends
/*====================================================*/

    //invoice starts
    const getAllInvoice=()=>{
      return httpClient.get('/getAllInvoiceReport');
    }

    // view specific
    const getInvoice=(id)=>{
      return httpClient.get(`/getInvoiceReport/${id}`);
    }

    // delete
    const deleteInvoice=(id)=>{
      return httpClient.delete(`/deleteInvoiceId/${id}`);
    }

    // genrate
    const generateInvoice=()=>{
      return httpClient.post('/addInvoiceId');
    }

    // add
    const addInvoice=(data)=>{
      return httpClient.post('/addInvoice',data);
    }

    // view 
    const getInvoiceProduct=(id)=>{
      return httpClient.get(`/getInvoiceReport/${id}`);
    }

    // delete
    const deleteInvoicePrd=(data)=>{
      return httpClient.delete('/deleteInvoiceProduct',data);
    }

    //grandTotal
    const getGrandTotal = (id)=>{
      return httpClient.get(`/getGrandTotal/${id}`);
    }

    //invoice ends


export default {signinUser,getAllUser,addUser,getUser,updateUser,deleteUser,
                addCompany,getAllCompany,getCompany,updateCompany,deleteCompany,
                addProduct,getAllProduct,getProduct,updateProduct,deleteProduct,
                getAllInvoice,getInvoice,deleteInvoice,generateInvoice,addInvoice,
                getInvoiceProduct,deleteInvoicePrd,getGrandTotal}
