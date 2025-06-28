import axios from "axios";

export const saveInvoice = (baseUrl, payload) => {
   return axios.post(`${baseUrl}/invoices`, payload)
}

export const getAllInvoices = (baseUrl) => {
   return axios.get(`${baseUrl}/invoices`)
}
