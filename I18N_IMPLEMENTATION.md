# Internationalization (i18n) Implementation Guide

## Overview
This project now includes comprehensive internationalization support with LTR/RTL layout switching for Arabic, English, Spanish, and French languages.

## Features Implemented

### 1. Language Support
- **English (en)** - Default language, LTR layout
- **Arabic (ar)** - RTL layout with proper Arabic typography
- **Spanish (es)** - LTR layout
- **French (fr)** - LTR layout

### 2. Components Updated
- ✅ Header component with language switcher
- ✅ Footer component with translations
- ✅ Navigation menus
- ✅ Product cards and listings
- ✅ Cart popup
- ✅ Category components
- ✅ Brand listings
- ✅ Search functionality
- ✅ All typography elements (h1-h6, p, span, div, etc.)

### 3. RTL Support
- Comprehensive CSS for RTL layout
- Automatic text direction switching
- Icon and button adjustments
- Flexbox and grid layout corrections
- Form element alignment
- Navigation and menu RTL support

### 4. Language Switcher
- Flag-based language selection
- Dropdown with country flags:
  - 🇺🇸 English (USA flag)
  - 🇸🇦 Arabic (Saudi Arabia flag)
  - 🇪🇸 Spanish (Spain flag)
  - 🇫🇷 French (France flag)
- Persistent language selection (localStorage)
- Automatic page direction switching

## File Structure

```
src/
├── i18n/
│   ├── index.ts                 # Main i18n configuration
│   └── locales/
│       ├── en.json             # English translations
│       ├── ar.json             # Arabic translations
│       ├── es.json             # Spanish translations
│       └── fr.json             # French translations
├── components/
│   ├── LanguageSwitcher.vue    # Language selection component
│   └── TranslateWrapper.vue    # Reusable translation wrapper
├── composables/
│   └── useLanguage.ts          # Language management composable
├── plugins/
│   └── globalTranslations.ts   # Global translation mixin
├── assets/styles/
│   ├── rtl.css                 # Component-specific RTL styles
│   └── global-rtl.css          # Global RTL typography styles
└── directives/
    └── translate.ts            # Translation directive
```

## Usage Examples

### 1. Using Translation Function in Components
```vue
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <h1>{{ t('header.market') }}</h1>
  <p>{{ t('products.addToCart') }}</p>
</template>
```

### 2. Using Global Translation Mixin
```vue
<template>
  <h1>{{ $t('header.market') }}</h1>
  <div :dir="$direction">
    <p>{{ $translateText('common.loading', 'Loading...') }}</p>
  </div>
</template>
```

### 3. Using TranslateWrapper Component
```vue
<template>
  <TranslateWrapper 
    tag="h1" 
    translation-key="header.market" 
    fallback="Market"
    class-name="my-heading"
  />
</template>
```

### 4. Reactive Categories with Translations
```javascript
const categories = computed(() => [
  {
    name: t('categories.electronics'),
    alt: t('categories.electronics'),
    link: "/electronics"
  }
])
```

## Translation Keys Structure

### Header Section
```json
{
  "header": {
    "market": "Market",
    "restaurants": "Restaurants",
    "grocery": "Grocery",
    "login": "Login",
    "search": "Search for stores and products"
  }
}
```

### Categories
```json
{
  "categories": {
    "electronics": "Electronics",
    "healthBeauty": "Health & Beauty",
    "pets": "Pets"
  }
}
```

### Common Elements
```json
{
  "common": {
    "loading": "Loading...",
    "error": "Error occurred",
    "save": "Save",
    "cancel": "Cancel"
  }
}
```

## RTL Layout Features

### Automatic Direction Switching
- Document direction changes automatically
- All text elements align to the right in Arabic
- Flexbox containers reverse direction
- Icons and arrows flip appropriately

### Typography Adjustments
- All heading elements (h1-h6) align right in RTL
- Paragraph and span elements follow RTL direction
- Form inputs and buttons align properly
- Lists and navigation items reverse order

### Component-Specific RTL
- Header navigation reverses order
- Search bar adjusts input alignment
- Cart popup aligns content properly
- Product cards maintain proper layout
- Footer sections align correctly

## Language Persistence
- Selected language is saved to localStorage
- Page refreshes maintain language selection
- Document attributes update automatically
- Direction and language attributes sync

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Mobile responsive design maintained
- Touch-friendly language switcher
- Proper font rendering for Arabic text

## Performance Considerations
- Lazy loading of translation files
- Minimal bundle size impact
- Efficient re-rendering on language change
- Cached translations in memory

## Accessibility
- Proper lang attributes on HTML elements
- Screen reader compatible
- Keyboard navigation support
- High contrast flag icons
- ARIA labels for language switcher

## Future Enhancements
- Additional language support
- Date and number formatting
- Currency localization
- Time zone handling
- Pluralization rules
- Context-aware translations

## Testing
- Language switching functionality
- RTL layout verification
- Translation key coverage
- Component rendering in all languages
- Mobile responsiveness across languages

## Maintenance
- Regular translation updates
- New component integration
- RTL style adjustments
- Performance monitoring
- User feedback integration