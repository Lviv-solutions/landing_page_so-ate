# 🍽️ So-Eat - Restaurant Management Platform

A cutting-edge, multilingual landing page for So-Eat restaurant management platform. Built with modern web technologies to showcase an integrated solution for restaurant owners.

![So-Eat Platform](https://img.shields.io/badge/Platform-Restaurant%20Management-orange)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

## 🌟 Features

### 🌍 **Internationalization**
- **Bilingual Support**: Complete Arabic (RTL) and English (LTR) localization
- **Dynamic Language Switching**: Seamless language toggle with persistent preferences
- **Cultural Adaptation**: Proper date formats, number formatting, and cultural considerations

### 🎨 **Modern Design & UX**
- **Responsive Design**: Mobile-first approach with perfect adaptation across all devices
- **Beautiful UI**: Clean, modern interface with consistent design system
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Dark/Light Mode**: Adaptive theme support (future enhancement)

### ⚡ **Performance & Optimization**
- **Next.js 15**: Latest framework with App Router and Server Components
- **Turbopack**: Ultra-fast build tool for development and production
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Next.js Image component with lazy loading
- **SEO Optimized**: Meta tags, structured data, and proper heading hierarchy

### 🎭 **Interactive Elements**
- **Framer Motion**: Smooth, performant animations and transitions
- **3D Elements**: Three.js integration for immersive experiences
- **Micro-interactions**: Delightful hover effects and loading states
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

### 🏗️ **Architecture & Development**
- **TypeScript**: Full type safety with strict mode enabled
- **Component-Based**: Reusable, maintainable React components
- **Custom Hooks**: Shared logic with custom React hooks
- **Error Boundaries**: Graceful error handling and recovery
- **Testing Ready**: Structure prepared for unit and integration tests

## 🛠️ Tech Stack

### **Core Framework**
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript 5.8](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling & UI**
- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### **Development & Build**
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing

### **Internationalization**
- **Custom i18n Implementation** - Lightweight, performant localization
- **RTL/LTR Support** - Proper text direction handling
- **Locale-based Routing** - URL-based language switching

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm/yarn/pnpm** - Package manager of your choice

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lviv-solutions/landing_page_so-ate.git
   cd landing_page_so-ate/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### 🔧 Development

- **Hot Reload**: Changes are automatically reflected in the browser
- **TypeScript**: Full type checking during development
- **Linting**: ESLint runs automatically on save
- **Fast Refresh**: React Fast Refresh for instant feedback

### 📁 Project Structure

```
so-eat/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── components/        # React components
│   ├── hooks/            # Custom React hooks
│   ├── constants/        # Application constants
│   └── types/           # TypeScript type definitions
├── public/
│   ├── locales/         # Translation files
│   │   ├── en/         # English translations
│   │   └── ar/         # Arabic translations
│   └── images/         # Static images
├── tailwind.config.js   # Tailwind CSS configuration
├── next.config.js      # Next.js configuration
└── package.json       # Dependencies and scripts
```

### 🌐 Internationalization

The application supports two languages:

- **English (en)**: Default language, LTR layout
- **Arabic (ar)**: RTL layout with proper text direction

Translation files are located in `public/locales/[locale]/common.json`.

### 🎨 Customization

#### Adding New Translations
1. Add keys to both `en/common.json` and `ar/common.json`
2. Use the `useTranslation` hook in components:
   ```tsx
   const { t } = useTranslation();
   return <h1>{t("section.title")}</h1>;
   ```

#### Styling
- Modify `tailwind.config.js` for theme customization
- Add global styles in `app/globals.css`
- Use Tailwind utility classes for component styling

## 📦 Build & Deployment

### Production Build

```bash
npm run build
npm start
```

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Lviv-solutions/landing_page_so-ate)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy automatically on every push to main

### Other Deployment Options

- **Netlify**: Drag and drop the `out` folder after `npm run build`
- **AWS Amplify**: Connect your GitHub repository
- **Docker**: Use the included Dockerfile for containerization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Lviv Solutions** - Development team
- **Next.js Team** - Amazing framework
- **Tailwind CSS** - Beautiful utility-first CSS
- **Framer Motion** - Smooth animations

## 📞 Contact

- **Website**: [so-eat.com](https://so-eat.com)
- **Email**: info@so-eat.com
- **Phone**: +966 50 123 4567

---

<div align="center">
  <strong>Built with ❤️ by Lviv Solutions</strong>
</div>
