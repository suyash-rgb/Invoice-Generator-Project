package com.suyash.invoicegeneratorapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.suyash.invoicegeneratorapi.entity.Invoice;
import com.suyash.invoicegeneratorapi.repository.InvoiceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;

    public Invoice saveInvoice(Invoice invoice){
        return invoiceRepository.save(invoice);
    }

    public List<Invoice> fetchInvoices(){
        return invoiceRepository.findAll();
    }

    public void removeInvoice(String invoiceId){
        Invoice existingInvoice = invoiceRepository.findById(invoiceId)
               .orElseThrow(()-> new RuntimeException("Invoice not found: "+invoiceId));
        invoiceRepository.delete(existingInvoice);
    }
}
