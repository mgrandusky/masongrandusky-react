# Mason Grandusky - Professional Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing Mason Grandusky's 20+ years of experience in web development and security engineering.

![Website Preview](https://github.com/user-attachments/assets/c7564b3d-730e-40dc-bbb3-9705bf4c46a9)

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for optimal performance
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Smooth Navigation**: Single-page application with smooth scrolling between sections
- **Type-Safe**: Full TypeScript implementation with strict mode enabled
- **Optimized Build**: Production-ready with code splitting and optimized assets
- **Accessible**: Semantic HTML and ARIA labels for better accessibility
- **SEO Ready**: Proper meta tags and Open Graph support

## 📋 Sections

The website includes the following sections:

1. **Hero/About** - Professional introduction and call-to-action
2. **Skills & Expertise** - Showcasing technical skills in web design, development, and security
3. **Professional Highlights** - Career achievements and experience managing large-scale projects
4. **Project Portfolio** - Featured projects including BB Shines Car Wash and Paro
5. **Client Testimonials** - Reviews highlighting problem-solving, communication, and technical excellence
6. **Professional Approach** - Three-step methodology for project delivery
7. **Contact** - Call-to-action for new projects and consultations

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9
- **Build Tool**: Vite 7.3
- **Styling**: Tailwind CSS 3.x
- **Linting**: ESLint with TypeScript support
- **Package Manager**: npm

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/mgrandusky/masongrandusky-react.git

# Navigate to project directory
cd masongrandusky-react

# Install dependencies
npm install
```

## 🚦 Development

```bash
# Start development server
npm run dev

# The site will be available at http://localhost:5173/
```

## 🏗️ Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🧹 Linting

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx          # Main header with navigation
│   │   ├── Footer.tsx          # Footer with links and copyright
│   │   └── Navigation.tsx      # Responsive navigation component
│   ├── Sections/
│   │   ├── Hero.tsx            # Hero/About section
│   │   ├── Skills.tsx          # Skills & Expertise section
│   │   ├── Experience.tsx      # Professional Highlights
│   │   ├── Portfolio.tsx       # Project Portfolio
│   │   ├── Testimonials.tsx    # Client Testimonials
│   │   └── Contact.tsx         # Professional Approach & Contact
│   └── UI/
│       ├── Button.tsx          # Reusable button component
│       ├── Card.tsx            # Card component for content
│       └── Section.tsx         # Section wrapper component
├── types/
│   └── index.ts                # TypeScript type definitions
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
└── index.css                   # Global styles with Tailwind
```

## 🎨 Customization

### Colors

The primary color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Customize your brand colors here
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
  },
}
```

### Content

Content can be updated in the respective section components under `src/components/Sections/`.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 TypeScript Configuration

The project uses strict TypeScript configuration for maximum type safety:

- Strict mode enabled
- No unused locals/parameters
- Verbatim module syntax
- Proper type imports

## 🚀 Deployment

The built files in the `dist` folder can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

## 📄 License

© 2026 Mason Grandusky. All rights reserved.

## 👨‍💻 Author

**Mason Grandusky**
- Web Design and Development Professional
- 20+ Years of Experience
- Specializing in Security Engineering and Scalable Web Solutions

