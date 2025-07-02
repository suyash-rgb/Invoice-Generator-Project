# QuickInvoice

## Project Overview
![Alt text]()
**QuickInvoice** is a lightweight, customizable invoice generation platform built for freelancers and small businesses. It allows users to create, preview, and deliver professional invoices effortlessly—all within a clean and modern UI. With real-time previews, branded templates, and integrated email delivery, QuickInvoice helps users save time and get paid faster.

---

## Features

- 🔒 **Secure Authentication** via Clerk (Gmail login)
- 🧾 **Real-Time Invoice Preview** while editing
- 🎨 **Curated Template Gallery** with multiple styles
- ☁️ **Logo Upload Support** via Cloudinary integration
- 📤 **One-Click Email Sending** using Brevo SMTP
- 📥 **Download as PDF** or save invoices for later reuse
- 🧠 **Smart History** with dashboard previews of saved invoices

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


## Third-Party Integrations

QuickInvoice integrates several trusted third-party services to deliver a seamless and scalable experience:

### 🔐 Clerk – Authentication & User Management
- Provides secure user sign-up, sign-in, and session handling.
- Supports multiple authentication methods including OAuth and email/password.
- Enables account lifecycle event tracking via webhooks.

### ☁️ Cloudinary – Logo & Media Uploads
- Handles image uploads (e.g., company logos) with CDN-optimized delivery.
- Offloads storage and ensures fast rendering in invoice previews and PDFs.

### ✉️ Brevo SMTP – Email Delivery
- Sends invoices directly to client inboxes using SMTP relay.
- Supports personalized email templates and attachments.
- Credentials are injected securely via environment variables.

These services allow QuickInvoice to focus on invoice generation while outsourcing authentication, media handling, and email infrastructure to battle-tested providers.

## Installation

To install and run the QuickInvoice application locally, follow these steps:

---

### 🛠 Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/your-username/invoice-generator-api.git
   ```

2. Navigate to the backend project directory:
   ```bash
   cd invoice-generator-api
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
git clone https://github.com/your-username/invoice-generator-client.git
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

## License

This project is licensed under the [MIT License](LICENSE).

## Testing

To run the tests for the QuickInvoice application, use the following command:

```
npm run test
```

This will execute the test suite and report the results.
