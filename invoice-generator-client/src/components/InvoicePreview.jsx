import React, { forwardRef } from 'react'
import Template1 from '../templates/Template1/Template1';
import { formatInvoiceData } from '../util/formatInvoiceData';

const InvoicePreview = forwardRef(({invoiceData, template}, ref) => {
  
    const formattedData = formatInvoiceData(invoiceData); 
     
    return (
    <div ref={ref} className="invoice-preview container py-2 px-2 overflow-x-auto">
        <Template1 data={formattedData} />
    </div>
  )
});

export default InvoicePreview