# QuickInvoice

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

To install and run the QuickInvoice application, follow these steps:

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