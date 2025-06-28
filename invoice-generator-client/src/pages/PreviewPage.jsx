import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { templates } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import InvoicePreview from '../components/InvoicePreview';
import { deleteInvoice, saveInvoice } from '../service/InvoiceService';
import { Loader2 } from 'lucide-react';
// import { baseUrl } from '/src/context/AppContext.jsx';
import { toast } from 'react-hot-toast';
import html2canvas from 'html2canvas'
import { uploadInvoiceThumbnail } from '../service/cloudinaryService';
import { generatePdfFromElement } from '../util/pdfUtils';

const PreviewPage = () => {
  const previewRef = useRef();
  const {selectedTemplate, setSelectedTemplate, invoiceData, baseUrl} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [downloading, setDownloading] = useState(false);

  const handleSaveAndExit = async () => {
     try{
        setLoading(true);
        //TODO: create thumbnail url
        const canvas = await html2canvas(previewRef.current, { //basically an image 
          scale: 2,
          useCORS: true,
          backgroundColor: "#fff",
          scrollY: -window.scrollY,
        });
        const imageData = canvas.toDataURL("image/png");
        const thumbnailUrl = await uploadInvoiceThumbnail(imageData);

        const payload = {
          ...invoiceData,
          thumbnailUrl: thumbnailUrl,
          template : selectedTemplate,
        }
        const response = await saveInvoice(baseUrl, payload);
        console.log(response.status);
        if(response.status === 200){
           console.log("Saving invoice with values: ", payload);
           toast.success("Invoice saved successfully.");
           navigate("/dashboard");
        } else {
          // throw new Error("Save Failed");
          toast.error("Something went wrong");
          console.error("Error occured: ", )
        }
     } catch(error) {
        console.error(error);
        toast.error("Failed to save invoice", error.message);
     } finally {
       setLoading(false);
     }
  }

  const handleDelete = async () => {
    
    try{
      const response = await deleteInvoice(baseUrl, invoiceData.id);
      if(response.status === 204){
        toast.success("Invoice deleted successfully");
        navigate('/dashboard');
      } else {
        toast.error("Unable to delete invoice");
      } 
    } catch(error){
        toast.error("Failed to delete invoice", error.message);
    }
  }

  const handleDownlaodPdf = async () => {
    if(!previewRef.current) return;

    try{
      setDownloading(true);
      await generatePdfFromElement(previewRef.current, `invoice${Date.now()}.pdf`)
    } catch (error){
      toast.error("Failed to generate invoice", error.message);
    } finally {
      setDownloading(false);
    }
  }

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
            <button className="btn btn-primary d-flex align-items-center justify-content-center" 
                    onClick={handleSaveAndExit} 
                    disabled={loading}>
                      {loading && <Loader2 className="me-2 spin-animation" size={18}/>}
                      {loading ? "Saving..." : "Save and Exit" }
            </button>
            {invoiceData.id && <button className="btn btn-danger" onClick={handleDelete}>Delete Invoice</button>}
            <button className="btn btn-secondary">Back to Dashboard</button>
            <button className="btn btn-info">Send Email</button>
            <button className="btn btn-success d-flex align-items-center jutify-content-center"
                    disabled={loading}
                    onClick={handleDownlaodPdf}> {downloading && (
                      <Loader2 className="me-2 spin-animation" size={18} />
                    )}
                    {downloading ? "Downloading..." : "Downlaod PDF"}</button>
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