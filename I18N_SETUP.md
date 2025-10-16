# Internationalization (i18n) Setup

## Overview

The So-Eat landing page now supports both Arabic (ar) and English (en) languages with full RTL/LTR support.

## Features Implemented

### 1. Language Support

- **Arabic (ar)**: Default language, RTL layout
- **English (en)**: Secondary language, LTR layout
- Automatic locale detection
- Manual language switching

### 2. Translation System

- Custom translation hook (`useTranslation`)
- JSON-based translation files
- Parameter interpolation support
- Fallback to Arabic if English fails

### 3. Components Updated

All components now use translations:

- `Header` - Navigation and company name
- `HeroSection` - Main title, description, and buttons
- `FeaturesSection` - Service titles and descriptions
- `AboutSection` - About content and feature list
- `StatisticsSection` - Statistic labels
- `CTASection` - Call-to-action content
- `Footer` - Footer sections and contact info

### 4. Language Switcher

- Toggle between Arabic and English
- Visual indication of current language
- Smooth transitions between languages

## File Structure

```
app/
├── components/
│   ├── LanguageSwitcher.tsx    # Language toggle component
│   ├── LocaleLayout.tsx        # Dynamic layout handler
│   └── [other components]      # All updated with i18n
├── hooks/
│   └── useTranslation.ts       # Custom translation hook
├── [locale]/
│   └── page.tsx               # Locale-specific pages
└── page.tsx                   # Main page with LocaleLayout

public/
└── locales/
    ├── ar/
    │   └── common.json        # Arabic translations
    └── en/
        └── common.json        # English translations

next.config.ts                 # Next.js i18n configuration
```

## Translation Files

### Arabic (`/public/locales/ar/common.json`)

Contains all Arabic translations organized by sections:

- `nav` - Navigation items
- `hero` - Hero section content
- `features` - Features section
- `about` - About section
- `statistics` - Statistics labels
- `cta` - Call-to-action
- `footer` - Footer content
- `company` - Company information

### English (`/public/locales/en/common.json`)

Mirror structure with English translations.

## Usage

### In Components

```tsx
"use client";
import { useTranslation } from "../hooks/useTranslation";

export default function MyComponent() {
  const { t, getArray, locale } = useTranslation();

  return (
    <div>
      <h1>{t("section.title")}</h1>
      <p>{t("section.description", { name: "So-Eat" })}</p>
      {getArray("section.items").map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}
```

### Translation Function Features

- `t(key)` - Get translation for key
- `t(key, params)` - Get translation with parameters
- `getArray(key)` - Get array of translations
- `locale` - Current locale
- `isLoading` - Loading state

### Parameter Interpolation

Use `{{paramName}}` in translation strings:

```json
{
  "welcome": "Welcome {{name}} to So-Eat"
}
```

```tsx
t("welcome", { name: "User" }); // "Welcome User to So-Eat"
```

## URL Structure

- `/` - Default (Arabic)
- `/ar` - Arabic explicitly
- `/en` - English

## RTL/LTR Support

The `LocaleLayout` component automatically:

- Sets `dir="rtl"` for Arabic
- Sets `dir="ltr"` for English
- Updates document language attribute
- Handles dynamic switching

## CSS Considerations

The global CSS includes:

- Cairo font for Arabic text
- RTL-aware spacing and layouts
- Direction-agnostic components

## Adding New Translations

1. Add the key-value pair to both language files
2. Use the translation key in components
3. Test both languages

## Browser Support

- Modern browsers with ES6+ support
- Automatic locale detection
- Fallback mechanisms for unsupported features

## Performance

- Translations loaded on demand
- Client-side switching (no page reload)
- Efficient caching of translation files
