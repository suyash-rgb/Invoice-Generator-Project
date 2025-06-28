import React, { useEffect, useState, useContext } from 'react';
import {AppContext} from '../context/AppContext.jsx';
import { toast } from 'react-hot-toast';
import { getAllInvoices } from '../service/InvoiceService';
import { Plus } from 'lucide-react';
import { formatDate } from '../util/formatInvoiceData.js';

const Dashboard = () => {

  const [invoices, setInvoices] = useState([]);
  const {baseUrl} = useContext(AppContext);

  useEffect(()=>{
    const fetchInvoices = async () => {

      try{
        const response = await getAllInvoices(baseUrl);
        setInvoices(response.data);
      } catch(error){
        toast.error("Failed to load the invoices", error);
      }
    }
    fetchInvoices();
  }, [baseUrl]);

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-5 g-4">
        {/* Create New Invoice card */}
        <div className="col">
          <div className="card h-100 d-flex justify-content-center align-items-center border border-2 border-light shadow-sm cursor-pointer" style={{minHeight: '270px'}}>
             <Plus size={48}/>
             <p className="mt-3 fw-medium">Create New Invoice</p>
         
          </div>
        </div>

        {/* Render the existing invoices */}
        {invoices.map((invoice, idx) => (
          <div className="col" key={idx}>
            <div className="card h-100 shadow-sm cursor-pointer" style={{minHeight: '270px'}}>
               {invoice.thumbnailUrl && (
                 <img src={invoice.thumbnailUrl} 
                      alt="Invoice thumbnail" 
                      className="card-img-top" 
                      style={{height: '200px', objectFit: 'cover'}}
                  />
               )}

               <div className="card-body">
                   <h6 className="card-title mb-1"> </h6>
                   <small className="text-muted">
                    Last Updated: {formatDate(invoice.lastUpdatedAt)}
                   </small>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
  )
}

export default Dashboard