# 🎨 Personal Portfolio Website

A modern, responsive portfolio and resume website built with Next.js, React, and TypeScript. Deployed automatically to GitHub Pages.

## ✨ Features

- 🎯 **Responsive Design** - Mobile-first approach, works on all devices
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 📝 **Multiple Sections**:
  - Hero/Landing section
  - About me
  - Featured projects
  - Blog (ready to add posts)
  - Resume/CV
  - Contact form
- 🎨 **Modern UI** - Clean, professional design with smooth interactions
- 🚀 **Automated Deployment** - GitHub Actions CI/CD pipeline to GitHub Pages
- 📱 **SEO Optimized** - Built-in metadata and Open Graph tags

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS3 with CSS Variables
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/melisdamla/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio) in your browser.

## 🚀 Deployment

The portfolio is automatically deployed to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
npm run build
npm start
```

### View Live Site

Your portfolio will be available at: `https://melisdamla.github.io/portfolio/`

## 📝 Customization

### Update Your Information

1. **Hero Section** - Edit `components/Hero.tsx`
2. **About Section** - Edit `components/About.tsx`
3. **Projects** - Edit `components/Projects.tsx`
4. **Contact** - Edit `components/Contact.tsx`
5. **Resume** - Edit `app/resume/page.tsx`
6. **Blog** - Edit `app/blog/page.tsx`

### Change Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #333333;
  --accent-color: #ff6b6b;
  --background: #ffffff;
  --text-color: #222222;
  --border-color: #e0e0e0;
}
```

### Add Custom Domain

1. Update the `cname` field in `.github/workflows/deploy.yml`
2. Add DNS records pointing to GitHub Pages
3. Enable custom domain in repository settings

## 📂 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── blog/
│   │   └── page.tsx        # Blog page
│   └── resume/
│       └── page.tsx        # Resume page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects section
│   └── Contact.tsx         # Contact form
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Next Steps

1. **Update your profile information** in each component
2. **Add your projects** with images and links
3. **Write blog posts** in the blog section
4. **Update your resume** with your experience and skills
5. **Customize the design** with your preferred colors
6. **Set up form handling** for the contact form (consider using services like Formspree)

## 📧 Contact Form Integration

To enable email notifications for contact form submissions, you can integrate with:

- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [EmailJS](https://www.emailjs.com/)
- Your own backend API

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📞 Support

Have questions? Feel free to open an issue or reach out through the contact form on the website.

---

**Happy coding! 🚀**
