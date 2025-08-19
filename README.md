# NüHome Shopify Theme

A premium, minimalist Shopify theme designed for wellness-focused kitchen appliances. Built with Shopify's Online Store 2.0 framework and optimized for conversion using consumer psychology principles.

## 🎯 Features

### Design System

- **Clean, Minimalist Aesthetic**: Premium design with rounded sans-serif fonts (Inter & Nunito)
- **Color Palette**:
  - Background: #f4f8f9 (white), #dff5f1 (mint green), #eef6f9 (pastel blue)
  - Accents: #6ec1b6 (teal/mint)
  - Text: #222 (titles), #666 (body)
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Fast Loading**: Optimized assets and lazy loading

### Consumer Psychology Features

- **Trust Badges**: Payment security, shipping, and returns badges below ATC buttons
- **Low Stock Urgency**: Dynamic banners for inventory scarcity
- **Product Taglines**: Pulled from metafields for emotional appeal
- **Testimonials Slider**: Customer reviews with ratings
- **Newsletter Capture**: 10% off incentive for email signups

### Homepage Sections

1. **Hero**: Welcome message with CTA
2. **Why NüHome**: Value propositions (Smart Design, Wellness First, Reliable Shipping)
3. **Featured Products**: Products from `frontpage` collection with taglines
4. **Bestsellers**: Products from `bestsellers` collection
5. **Testimonials**: Customer reviews slider
6. **Newsletter**: Email capture with incentive
7. **Footer**: Links, social media, payment icons

### Technical Features

- **Shopify Online Store 2.0**: Sections Everywhere support
- **Shopify CLI Compatible**: Works with `shopify theme push`, `theme serve`, `theme validate`
- **SEO Optimized**: Meta tags, structured data, social sharing
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Optimized images, lazy loading, minimal JavaScript

## 🚀 Setup Instructions

### Prerequisites

- Shopify CLI installed
- A Shopify store (development or live)

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd nuhome
   ```

2. **Connect to your Shopify store**:

   ```bash
   shopify theme dev --store=your-store.myshopify.com
   ```

3. **Push the theme to your store**:
   ```bash
   shopify theme push
   ```

### Configuration

1. **Create Required Collections**:

   - `frontpage`: For featured products
   - `bestsellers`: For bestseller products

2. **Set Up Menus**:

   - `main-menu`: Main navigation
   - `footer`: Footer links

3. **Configure Social Media** (in theme settings):

   - Instagram URL
   - TikTok URL
   - X (Twitter) URL
   - Pinterest URL

4. **Add Product Metafields**:

   - Create a metafield `custom.tagline` for products
   - This will display emotional value propositions on product cards

5. **Customize Theme Settings**:
   - Upload your logo
   - Adjust colors and typography
   - Configure section content

## 📁 File Structure

```
nuhome/
├── config/
│   ├── settings_schema.json    # Theme settings
│   └── settings_data.json      # Default settings
├── layout/
│   └── theme.liquid           # Main theme layout
├── sections/
│   ├── header.liquid          # Header with navigation
│   ├── hero.liquid            # Hero section
│   ├── why-nuhome.liquid      # Value propositions
│   ├── featured-products.liquid # Featured products grid
│   ├── bestsellers.liquid     # Bestsellers section
│   ├── testimonials.liquid    # Customer reviews
│   ├── newsletter.liquid      # Email capture
│   └── footer.liquid          # Footer
├── snippets/
│   ├── product-card.liquid    # Product card component
│   ├── trust-badges.liquid    # Trust badges
│   ├── low-stock.liquid       # Low stock urgency
│   └── meta-tags.liquid       # SEO meta tags
├── templates/
│   ├── index.liquid           # Homepage
│   ├── product.liquid         # Product pages
│   ├── collection.liquid      # Collection pages
│   └── page.contact.liquid    # Contact page
└── assets/
    ├── base.css               # Main stylesheet
    └── global.js              # JavaScript functionality
```

## 🎨 Customization

### Colors

Edit the CSS custom properties in `assets/base.css`:

```css
:root {
  --color-background: #f4f8f9;
  --color-accent: #6ec1b6;
  --color-text-primary: #222222;
  /* ... */
}
```

### Typography

The theme uses Google Fonts (Inter & Nunito). You can change fonts in the theme settings or modify the CSS imports.

### Sections

All sections are customizable through the Shopify theme editor. Each section has its own settings and can be reordered or removed.

## 🔧 Development

### Local Development

```bash
# Start development server
shopify theme dev

# Watch for changes
shopify theme dev --watch

# Validate theme
shopify theme validate
```

### Deployment

```bash
# Push to development theme
shopify theme push

# Push to live theme
shopify theme push --live
```

## 📱 Responsive Design

The theme is fully responsive with breakpoints at:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Conversion Optimization

### Consumer Psychology Elements

1. **Primal Appeal**: Product images and descriptions focus on health/wellness
2. **Emotional Connection**: Taglines and testimonials create emotional bonds
3. **Efficiency Value**: Clear benefits and features highlighted
4. **Social Proof**: Customer reviews and ratings
5. **Urgency**: Low stock notifications
6. **Trust**: Security badges and guarantees

### Performance Optimization

- Lazy loading for images
- Minimal JavaScript
- Optimized CSS with CSS custom properties
- Efficient asset loading

## 🐛 Troubleshooting

### Common Issues

1. **Sections not appearing**: Ensure sections are added to the homepage in theme settings
2. **Products not showing**: Verify collections exist and contain products
3. **Styling issues**: Check browser console for CSS errors
4. **JavaScript errors**: Ensure all required assets are loaded

### Support

For issues or questions:

1. Check the Shopify documentation
2. Review the theme code comments
3. Test in different browsers and devices

## 📄 License

This theme is created for NüHome and follows Shopify's theme development best practices.

## 🔄 Updates

To update the theme:

1. Pull the latest changes: `git pull origin main`
2. Push to your store: `shopify theme push`
3. Test thoroughly before publishing

---

**NüHome Theme** - Elevate your everyday with premium kitchen appliances.
