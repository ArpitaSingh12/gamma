# Gamma International Tanzania Ltd - Corporate Website

Professional corporate website for Gamma International Tanzania Ltd, a leading exporter of premium agro-commodities from Tanzania to global markets.

## Project Overview

This is a full-stack JavaScript website built for Gamma International Tanzania Ltd, showcasing their export business and facilitating international trade inquiries.

## Features

### Public Pages
- **Homepage**: Hero section with animated image effects, featured products, global presence stats, and company USPs
- **About Us**: Company vision, mission, story, and values
- **Products**: 
  - Agricultural Products: Raw Cashew Nuts & Kernels, Coffee (Arabica & Robusta), Pulses & Seeds (chickpeas, pigeon peas, mung beans, sesame)
  - Imports: Premium Liquor from India & Mauritius
- **Blog**: Industry insights, trade news, and educational articles with category filtering
- **Partner With Us**: Partnership benefits and process overview
- **Contact**: Working contact form with Google Maps integration

### Key Functionality
- **Contact Form**: Functional form that sends inquiries via API endpoint (ready for email integration)
- **Blog System**: Dynamic blog posts with detailed article pages
- **Multi-Language Support**: Language switcher supporting English, Swahili, French, Arabic, and Chinese
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, structured content, and semantic HTML

### Design Features
- Theme colors matched to company logo (terracotta/orange-brown tones)
- Animated hero section with smooth transitions
- Hover effects on product cards
- Interactive Google Maps embed
- Professional typography and spacing

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- Wouter for routing
- React Query for data fetching
- Lucide React icons

### Backend
- Express.js
- TypeScript
- Drizzle ORM (schema defined, ready for database integration)

## Product Categories

### Agricultural Products
1. **Raw Cashew Nuts & Cashew Kernels**
   - Outturn: 50-55 LBS+
   - Grades: W180-W450
   - Origin: Masasi, Newala, Mtwara, Tandahimba

2. **Coffee (Arabica & Robusta)**
   - Arabica: AAA, AA, A grades
   - Robusta: FAQ 12-18
   - Origin: Kilimanjaro, Mbeya, Bukoba

3. **Pulses & Seeds**
   - Chickpeas, Pigeon Peas, Kidney Beans, Green Mung Beans
   - Premium Sesame Seeds (White & Brown)
   - Purity: 98-99.95%

### Imports
- **Premium Liquor**: Whisky, Rum, Vodka, Gin from India and Mauritius

## Company Information

**Gamma International Tanzania Ltd**
- Head Office: 24th Floor, Rita Towers, Dar es Salaam, Tanzania
- Phone: +255 668 960 061
- Email: info@gammaimternationaltz.com
- Global Presence: Dubai, Ghana, India, Germany, USA, Mauritius

## Future Enhancements
- Email service integration for contact form
- Database for storing inquiries
- Admin panel for blog management
- Timber products section (prepared but hidden)
- Newsletter subscription functionality
- Actual language translation implementation

## Development Notes
- Product data is currently hardcoded in components
- Blog posts are managed in `client/src/data/blogPosts.ts`
- Contact form validates and sends to API but currently just logs (ready for email service)
- Language switcher UI is ready but translations not implemented
