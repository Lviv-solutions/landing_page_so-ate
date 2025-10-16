# So-Eat Landing Page - Project Structure

## Overview

This project has been organized into a modular structure for better maintainability and scalability.

## Directory Structure

```
app/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Main hero section
│   ├── FeaturesSection.tsx # Services/features grid
│   ├── AboutSection.tsx # About us section
│   ├── StatisticsSection.tsx # Key statistics
│   ├── CTASection.tsx   # Call-to-action section
│   └── Footer.tsx       # Site footer
├── constants/           # Application constants
│   └── index.ts        # All constants and data
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── globals.css         # Global styles and theme
├── layout.tsx          # Root layout with fonts
└── page.tsx            # Main home page
```

## Components

### Header.tsx

- Navigation bar with company logo
- Responsive navigation menu
- Uses theme colors

### HeroSection.tsx

- Main landing section
- Call-to-action buttons
- Hero image placeholder

### FeaturesSection.tsx

- Grid of service cards
- Responsive layout (1-2-3 columns)
- Feature image placeholders

### AboutSection.tsx

- Company information
- Feature list with bullet points
- Two-column layout

### StatisticsSection.tsx

- Key metrics display
- Four-column responsive grid
- Dynamic data from constants

### CTASection.tsx

- Call-to-action section
- Gradient background
- Centered content

### Footer.tsx

- Multi-column footer
- Dynamic sections from constants
- Contact information
- Copyright notice

## Constants & Types

### constants/index.ts

Contains all static data:

- Navigation items
- Statistics data
- Footer sections
- Contact information
- Company information
- About features

### types/index.ts

TypeScript interfaces for:

- Service items
- Statistics
- Navigation items
- Footer sections
- Contact information

## Theme Colors

The application uses a custom color palette:

- **Primary**: #8B5261 (coral/salmon)
- **Secondary**: #31241A (dark brown)
- **Gradient**: #966192 (pink/purple)
- **Accent colors**: Various shades for hover states

## Features

1. **Modular Architecture**: Each section is a separate component
2. **Type Safety**: Full TypeScript support with interfaces
3. **Responsive Design**: Mobile-first approach
4. **Arabic Support**: RTL layout and Cairo font
5. **Theme Consistency**: Centralized color system
6. **Maintainable Code**: Separated concerns and reusable components

## Usage

The main page (`page.tsx`) imports and renders all components in order:

```tsx
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
// ... other imports

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatisticsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
```

This structure makes it easy to:

- Modify individual sections
- Add new components
- Update content through constants
- Maintain consistent styling
- Scale the application
