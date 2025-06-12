package com.suyash.invoicegeneratorapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.suyash.invoicegeneratorapi.entity.Invoice;

public interface InvoiceRepository extends MongoRepository<Invoice, String> {

}
