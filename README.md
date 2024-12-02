# Jeremy L'homme - Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring
internationalization and a contact form with SendGrid integration.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Internationalization**: Supports multiple languages (English and French)
- **Responsive Design**: Mobile-first approach with a clean, modern UI
- **Contact Form**: Integrated with SendGrid for reliable email delivery
- **Animations**: Smooth transitions and animations using Framer Motion
- **UI Components**: Components built with Radix UI and shadcn/ui
- **Type Safety**: Full TypeScript support for robust development

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**:
  - Radix UI
  - shadcn/ui
  - Lucide Icons
- **Email**: SendGrid
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Development Tools**:
  - ESLint
  - Prettier
  - PostCSS
  - TypeScript

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/jeremylhomme/nexjs-portfolio.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Rename `.env.example` to `.env` and set your SendGrid API key and template ID:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_TEMPLATE_ID=your_template_id
```

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy!

## 📝 Environment Variables

Required environment variables:

- `SENDGRID_API_KEY`: Your SendGrid API key
- `SENDGRID_TEMPLATE_ID`: Your SendGrid email template ID

## 🌐 Internationalization

The site supports multiple languages:

- 🇬🇧 English
- 🇫🇷 French

Language files are located in the `messages` directory.

## 👤 Author

**Jeremy L'homme**

- Website: [jeremylhomme.fr](https://jeremylhomme.fr)
