import React, { useContext, useRef } from 'react'
import { templates } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import InvoicePreview from '../components/InvoicePreview';

const PreviewPage = () => {
  const previewRef = useRef();
  const {selectedTemplate, setSelectedTemplate, invoiceData} = useContext(AppContext);

  return (
    <div className="previewpage container-fluid d-flex flex-column p-3 min-vh-100">
      
      {/* Action Buttons */}
      <div className="d-flex flex-column align-items-center mb-4 gap-3">
         
         {/* List of Template buttons */}
         <div className="d-flex gap-2 flex-wrap justify-content-center">
            {templates.map(({id, label})=> (
              <button 
                  key={id}
                  onClick={() => setSelectedTemplate(id)} 
                  style={{ minWidth: "100px", height: "38px" }}
                  className= {`btn btn-sm rounded-pill p-2 ${selectedTemplate ===id ? 'btn-warning' : 'btn-outline-secondary'}`}
                >
              {label}
              </button>
            ))}
         </div>

         {/* List of Action buttons */}
         <div className="d-flex flex-wrap justify-content-center gap-2">
            <button className="btn btn-primary d-flex align-items-center justify-content-center">Save and Exit</button>
            <button className="btn btn-danger">Delete Invoice</button>
            <button className="btn btn-secondary">Back to Dashboard</button>
            <button className="btn btn-info">Send Email</button>
            <button className="btn btn-success d-flex align-items-center jutify-content-centr">Download PDF</button>
         </div>

         {/* Display the invoice preview */}
         <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-start bg-light py-3">
            <div ref={previewRef} className="invoice-preview">
              <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} />
            </div>
         </div>


      </div>
    </div>
  )
}

export default PreviewPage 