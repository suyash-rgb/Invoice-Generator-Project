# QuickInvoice

## Project Overview
![Alt text](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/1e0f8c54daf426d0f887d6f48fe468b46361cacb/images/thumb.png)
**QuickInvoice** is a lightweight, customizable invoice generation platform built for freelancers and small businesses. It allows users to create, preview, and deliver professional invoices effortlessly—all within a clean and modern UI. With real-time previews, branded templates, and integrated email delivery, QuickInvoice helps users save time and get paid faster.

---

## Features

- 🔒 **Secure Authentication** via Clerk (Gmail login)
  ![Alt text](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/243a54a367c1a8322b4b30bbba26551f61d2dcc9/images/auth1.png)
  ![Alt text](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/243a54a367c1a8322b4b30bbba26551f61d2dcc9/images/auth2.png)
- 🧾 **Real-Time Invoice Preview** while editing
- 🎨 **Curated Template Gallery** with multiple styles
  ![Alt text](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/621632dc7fdec8ba906ac61922704112b0f7d7b3/invoice-generator-client/src/assets/features1.png)
- ☁️ **Logo Upload Support** via Cloudinary integration
- 📤 **One-Click Email Sending** using Brevo SMTP
  ![Alt text](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/13746b3a20272e5a19f0712d0b38132ae4ee86fd/images/sendEmail.png)
- 📥 **Download as PDF** or save invoices for later reuse
- 🧠 **Smart History** with dashboard previews of saved invoices
  ![Alt text](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/652fc9799b995413c34141f23509944f0499d80b/invoice-generator-client/src/assets/features2.png)

## 📌 Importance of Invoicing Tools Across Modern Industrie

QuickInvoice isn’t just a convenience tool—it’s a **critical solution** for professionals and businesses seeking to streamline operations, improve cash flow, and enhance client communication.

### **🧑‍💻 IT & Freelancing**
- **Client Billing:** Simplifies payment workflows for freelance developers, designers, and consultants.
- **Project-Based Invoicing:** Easily generate line-item summaries with hours, rates, and taxes.
- **Branded Output:** Present polished, professional PDFs with your logo and contact info.

### **🏢 Small Businesses & Startups**
- **Quick Transactions:** Send invoices via email in seconds—no extra software or PDF generators needed.
- **Modern UI:** Built with intuitive interfaces that save time and reduce billing errors.
- **Secure Records:** Centralized invoice storage using robust backend and database integration.

### **🎨 Agencies & Creatives**
- **Service-Based Billing:** Ideal for marketing, photography, and design professionals.
- **Custom Templates:** Match the look and tone of your brand with flexible layouts.
- **Export & Archival:** Generate downloadable PDFs for audits, contracts, and reports.

### **💼 Finance & Professional Services**
- **Accurate Reporting:** Support for tax calculation and detailed line items per client.
- **Automated Sending:** Seamless integration with email services to deliver invoices instantly.
- **Client Portability:** Serve multiple clients with customizable company info per invoice.

### **🌍 Education, Nonprofits & More**
- **Workshops & Events:** Bill for sessions, training, and resource kits.
- **Grants & Donations:** Create records for disbursements or reimbursement tracking.
- **Simple Onboarding:** No steep learning curve—just login and invoice.

Invoicing is not just about getting paid—it's about how you present yourself. **QuickInvoice helps you look professional, stay organized, and get paid faster.**

## 🖼️Landing Page

![Langing Page1](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/90fcca54c869e9555a9a750fe48b9cea93dc625f/images/l1.png) <br><br>
![Langing Page2](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/90fcca54c869e9555a9a750fe48b9cea93dc625f/images/l2.png) <br><br>
![Langing Page3](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/90fcca54c869e9555a9a750fe48b9cea93dc625f/images/l3.png) <br><br>
![Langing Page4](https://github.com/suyash-rgb/Invoice-Generator-Project/blob/e0f8e17ab885ae480bf766881400126f6a930ccc/images/footer.png) <br><br>


## Technologies Used

### 🖥️ Frontend

- **React** – Component-based UI development
- **Vite** – Fast build tool and development server
- **Bootstrap 5** – Responsive layout and styling system
- **React Router DOM** – Client-side routing for navigating between views
- **Lucide Icons** – Lightweight, customizable icon library
- **Context API** – State management across components
- **EmailJS / Brevo Client** – Email delivery helpers (front-facing integration)
- **html2pdf.js** – Export invoice previews to downloadable PDFs

### ⚙️ Backend

- **Java & Spring Boot** – RESTful APIs and server-side logic
- **Jakarta Mail API** – Email delivery through Brevo SMTP
- **MongoDB** – NoSQL database for storing invoice data per user
- **Clerk Webhooks** – Account event handling (planned for lifecycle support)
- **CORS, Environment Variable Injection** – Config security and runtime flexibility

### 🧩 Infrastructure & Dev Tools

- **Cloudinary** – Handles company logo uploads and CDN delivery
- **Clerk** – Complete auth suite (signup, sessions, secure JWT)
- **Brevo SMTP** – Authenticated transactional email sending
- **Visual Studio Code** – Dev environment
- **Postman** – API testing and debugging


## 🧩 Third-Party Integrations

QuickInvoice integrates trusted third-party services to deliver a seamless and scalable experience:

### 🔐 [Clerk – Authentication & User Management](https://clerk.com/)
- Provides secure user sign-up, sign-in, and session handling.
- Supports multiple authentication methods including OAuth and email/password.
- Enables account lifecycle event tracking via webhooks.

### ☁️ [Cloudinary – Logo & Media Uploads](https://cloudinary.com/)
- Handles image uploads (e.g., company logos) with CDN-optimized delivery.
- Offloads storage and ensures fast rendering in invoice previews and PDFs.

### ✉️ [Brevo SMTP – Email Delivery](https://www.brevo.com/)
- Sends invoices directly to client inboxes using SMTP relay.
- Supports personalized email templates and attachments.
- Credentials are injected securely via environment variables.

These services allow QuickInvoice to focus on invoice generation while outsourcing authentication, media handling, and email infrastructure to battle-tested providers.

## 🧰 Prerequisites

Before installing and running QuickInvoice, ensure you have the following tools installed on your machine:

### 🖥️ General
- **Git** – For cloning repositories  
  [Download Git](https://git-scm.com/)
- **Node.js (v18 or above)** – Required for the React frontend  
  [Download Node.js](https://nodejs.org/)
- **Java 17+ & Maven** – Required to run the Spring Boot backend  
  [Java](https://adoptium.net/) | [Maven](https://maven.apache.org/install.html)

### 🗃️ Local Database
- **MongoDB & MongoDB Compass** – For running and interacting with your local database  
  [MongoDB Download](https://www.mongodb.com/try/download/community)  
  [Compass GUI](https://www.mongodb.com/products/compass)

> When deploying to production, you can switch to a cloud-based cluster using **MongoDB Atlas**. 

<br>

## Installation

To install and run the QuickInvoice application locally, follow these steps:

---

### 🛠 Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/suyash-rgb/Invoice-Generator-Project.git
   ```

2. Navigate to the backend project directory:
   ```bash
   cd invoicegeneratorapi
   ```

3. Configure your environment variables:
Create a .env file or set the following environment variables in your terminal (example for PowerShell):
   ```bash
   $env:BREVO_USERNAME = "your@email.com"
   $env:BREVO_PASSWORD = "your_smtp_api_key"
   $env:MONGO_URI = "your_mongodb_connection_string"
   ```

4. Build and run the Spring Boot app:
   ```bash
   mvn spring-boot:run
   ```

### 🎨 Frontend Setup

1. Clone the repository:
```
git clone https://github.com/suyash-rgb/Invoice-Generator-Project.git
```

2. Navigate to the project directory:
```
cd invoice-generator-client
```

3. Install the dependencies:
```
npm install
```

4. Start the development server:
```
npm run dev
```

The application will be available at `http://localhost:5173`.

## Usage

QuickInvoice is an easy-to-use invoice generator that allows you to create professional-looking invoices in minutes. Here's how you can use the application:

1. Enter your company details, such as name, address, and phone number.
2. Fill in the client's billing and shipping information.
3. Add the items you've provided, including the name, quantity, and amount.
4. Select a pre-designed template that matches your brand.
5. Review the invoice preview and make any necessary adjustments.
6. Save the invoice, download it as a PDF, or send it directly to your client via email.

## API

The QuickInvoice application uses the following API endpoints:

- `POST /api/invoices`: Save an invoice
- `GET /api/invoices`: Fetch all invoices for the current user
- `DELETE /api/invoices/{id}`: Delete an invoice
- `POST /api/invoices/sendInvoice`: Send an invoice via email

## Contributing

If you'd like to contribute to the QuickInvoice project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.


## Contact
For any inquiries, please reach out to [Suyash Baoney](mailto:suyashbaoney58@gmail.com).
