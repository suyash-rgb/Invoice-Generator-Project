import axios from "axios";

export const saveInvoice = (baseUrl, payload) => {
   return axios.post(`${baseUrl}/invoices`, payload);
}

export const getAllInvoices = (baseUrl) => {
   return axios.get(`${baseUrl}/invoices`);
}

export const deleteInvoice = (baseUrl, id) => {
   return axios.delete(`${baseUrl}/invoices/${id}`);
}

export const sendInvoice = (baseUrl, formData) => {
   return axios.post(`${baseUrl}/invoices/sendInvoice`, formData);
}