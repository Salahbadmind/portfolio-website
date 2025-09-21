# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form in your portfolio website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** in your dashboard
2. Find your **Public Key** in the API Keys section
3. Copy this key

## Step 5: Update Your Code

Open `src/pages/Contact.jsx` and replace the placeholder values:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',        // Replace with your Service ID
  'YOUR_TEMPLATE_ID',       // Replace with your Template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'         // Replace with your Public Key
)
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the test message

## Troubleshooting

### Common Issues:

1. **"Invalid service ID"**: Double-check your Service ID
2. **"Invalid template ID"**: Verify your Template ID
3. **"Invalid public key"**: Make sure you're using the correct Public Key
4. **CORS errors**: Make sure your domain is added to EmailJS allowed origins

### Adding Your Domain to EmailJS:

1. Go to **Account** → **General**
2. Add your domain to **Allowed Origins**
3. For development: `http://localhost:5173`
4. For production: `https://yourdomain.com`

## Free Tier Limits

- 200 emails per month
- 2 email services
- 2 email templates
- 1,000 requests per month

## Upgrade Options

If you need more emails or features, EmailJS offers paid plans starting at $15/month.

## Security Note

Never commit your EmailJS keys to version control. Consider using environment variables for production:

```javascript
const result = await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

Then create a `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Remember to add `.env` to your `.gitignore` file!
