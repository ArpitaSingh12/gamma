# Design Guidelines: Gamma International Tanzania Ltd

## Design Approach
**Selected Framework**: Design System-based approach with premium B2B refinements, drawing inspiration from professional corporate trade sites and international commodity exporters. The design balances authoritative professionalism with approachable global connectivity, reflecting Gamma's position as a trusted bridge between African producers and international buyers.

## Core Design Principles
1. **Trust & Authority**: Clean, structured layouts that communicate reliability and professionalism to international buyers
2. **Information Clarity**: Product specifications and certifications presented in scannable, digestible formats
3. **Global Sophistication**: Premium aesthetic that honors African heritage while appealing to worldwide partners
4. **Seamless Navigation**: Logical flow from company overview → products → partnership → contact

## Typography System

**Primary Font**: Inter or DM Sans (Google Fonts)
- Headlines (H1): 48px-56px, font-weight 700
- Section Headers (H2): 36px-40px, font-weight 600
- Subsections (H3): 24px-28px, font-weight 600
- Body Text: 16px-18px, font-weight 400, line-height 1.6
- Small Text/Captions: 14px, font-weight 400

**Secondary Font**: Poppins for taglines and accent text
- Company tagline: 28px-32px, font-weight 500

## Layout & Spacing System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 between major elements, gap-4 for related items
- Container: max-w-7xl with px-6 padding
- Content blocks: max-w-6xl for text-heavy sections, max-w-prose for long-form content

## Component Library

### Homepage Components

**Hero Section** (80vh minimum)
- Large hero image showing African farms, cashew processing, or shipping operations
- Company logo prominently displayed
- Headline: "Connecting Continents through Trade"
- Subheadline: Brief description of premium agro-commodities from Tanzania to the world
- Primary CTA: "View Our Products" (blurred background button)
- Secondary CTA: "Partner With Us"
- Trust indicators: "90+ Years Combined Expertise" | "15+ Countries" | "360° Supply Chain"

**Featured Products Grid** (3-column on desktop, 1-column mobile)
- Product cards with high-quality imagery of each commodity
- Product name, brief description, key specification highlight
- "Learn More" link to detailed product page
- Cards: Cashew Nuts, Coffee, Pulses, Sesame Seeds, Timber, Liquor

**Global Presence Section**
- World map visualization showing sourcing regions and export destinations
- Key stats in 4-column grid: Years of Experience, Countries Served, Product Categories, Container Capacity
- Company locations highlighted

**Why Choose Gamma** (2-column layout)
- Left: List of USPs with icons
  - 360° sourcing & logistics
  - On-ground quality control
  - Verified supplier network
  - Export documentation support
  - Ethical trade practices
- Right: Image of team or operations

**Call-to-Action Section**
- Centered content with background image
- "Ready to Partner with Africa's Trusted Export Company?"
- Contact button with blurred background overlay

### Product Pages Structure

**Product Header**
- Product name (H1)
- Hero image of the specific product (cashews, coffee beans, etc.)
- Brief introduction paragraph

**Specifications Panel** (2-column grid)
- Left column: Quality specs (grades, moisture, purity, etc.)
- Right column: Packaging & logistics (bag sizes, container capacity, MOQ)
- Each spec with icon and clear labeling

**Season & Availability Card**
- Crop season timeline
- Availability months
- Origin regions

**Certifications Section** (horizontal badge layout)
- Certification logos/badges: ISO, USFDA, BRC, SGS, Phytosanitary, Fair Trade, EcoCert
- Displayed as trust badges with icons

**Container Loading Reference** (visual table)
- 20ft vs 40ft comparison
- Weight and unit breakdown
- Visual container icon

### About Us Page

**Company Story Section**
- Vision and Mission statements in elegant cards
- Company description with emphasis on partnerships and sourcing network
- Regional presence breakdown

**Team Expertise Highlight**
- "90+ Years Combined Expertise" showcase
- Global operations map showing offices in Dubai, Ghana, India, Germany, USA, Mauritius

**Values Section** (4-column grid, stacks to 1 on mobile)
- Integrity, Quality, Innovation, Sustainability
- Each with icon and brief description

### Partner With Us Page

**Partnership Benefits** (alternating 2-column layout)
- Each benefit section alternates image left/right
- USPs expanded with supporting details
- Images showing farm operations, quality control, logistics

**Process Flow** (horizontal timeline on desktop, vertical on mobile)
- Sourcing → Quality Control → Documentation → Logistics → Delivery
- Each step with icon and description

**Partner CTA Section**
- Form preview or direct "Get in Touch" button
- Contact information sidebar

### Contact Page

**Contact Information Panel** (2-column layout)
- Left: Contact form (Name, Email, Company, Message, Product Interest dropdown)
- Right: Office details, phone, email, embedded Google Maps showing Rita Towers location

**Office Locations** (if applicable)
- Cards for each operational base with address and contact

## Images

**Required Images**:
1. **Hero Image**: Wide landscape shot of African cashew farms or export operations, conveying scale and authenticity (minimum 1920x800px)
2. **Product Images**: High-quality photos of each commodity - raw cashew nuts, cashew kernels, coffee beans (green and roasted), pulses varieties, sesame seeds, timber planks, liquor bottles (minimum 800x600px each)
3. **Global Operations**: Professional photo of shipping containers, port operations, or quality control processes (1200x800px)
4. **About/Team**: Office or team photo showing professionalism (1200x800px)
5. **Background Patterns**: Subtle agricultural textures or African-inspired geometric patterns for section backgrounds

All images should convey quality, scale, and professional trade operations while maintaining authenticity to Tanzanian/African context.

## Navigation

**Header**:
- Logo (left-aligned)
- Navigation menu (center/right): Home | About Us | Products (dropdown mega-menu) | Partner With Us | Contact
- CTA button: "Request Quote"
- Sticky header on scroll

**Footer** (3-column layout, stacks on mobile):
- Column 1: Company info, brief description, social media icons
- Column 2: Quick links (Products, About, Partner, Blog)
- Column 3: Contact info, newsletter signup
- Bottom bar: Copyright, Privacy Policy, Terms

## Responsive Behavior
- Desktop (lg): Multi-column layouts as specified
- Tablet (md): 2-column maximum, reduced spacing
- Mobile: Single column, stacked navigation, touch-friendly buttons (minimum 44px height)

## Key Interactions
- Smooth scroll to sections
- Hover states on product cards (subtle lift effect)
- Form validation feedback
- Mobile menu slide-in drawer
- Minimal animations - focus on clarity over decoration

This design prioritizes trust, clarity, and professional presentation suitable for international B2B buyers in the commodity export industry.