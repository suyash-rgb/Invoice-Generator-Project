import axios from "axios";

export const saveInvoice = (baseUrl, payload) => {
   return axios.post(`${baseUrl}/invoices`, payload)
}
