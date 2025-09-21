# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a clean design, smooth animations, dark/light theme toggle, and a contact form with EmailJS integration.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with hamburger menu for navigation
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Integrated with EmailJS for sending emails
- **Modern UI**: Clean, professional design with Tailwind CSS
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Loading**: Built with Vite for optimal performance

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── netlify.toml
└── README.md
```

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the EmailJS configuration in `src/pages/Contact.jsx`:
     ```javascript
     const result = await emailjs.sendForm(
       'YOUR_SERVICE_ID', // Replace with your service ID
       'YOUR_TEMPLATE_ID', // Replace with your template ID
       formRef.current,
       'YOUR_PUBLIC_KEY' // Replace with your public key
     )
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **Contact Information** (`src/pages/Contact.jsx`):
   - Email address
   - Phone number
   - Location
   - Social media links

2. **About Section** (`src/pages/About.jsx`):
   - Bio and experience
   - Skills and technologies
   - Achievements and certifications

3. **Projects** (`src/pages/Projects.jsx`):
   - Project details
   - Images and descriptions
   - GitHub and live demo links

4. **Skills** (`src/pages/Skills.jsx`):
   - Technical skills
   - Proficiency levels
   - Soft skills

### Styling

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `index.html` and `tailwind.config.js`
- **Animations**: Modify animations in individual components

### Images

Replace placeholder images with your own:
- Profile photo in About section
- Project images in Projects section
- Favicon in `public/` directory

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

3. **Custom Domain** (Optional)
   - Add your custom domain in Netlify dashboard
   - Update DNS settings as instructed

### Other Platforms

The project can also be deployed to:
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist` folder

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service
- [Lucide React](https://lucide.dev/) - Icon library

## 📞 Support

If you have any questions or need help, feel free to reach out:

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

---

Made with ❤️ by Your Name
