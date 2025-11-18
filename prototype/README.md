# FoodApp - Mobile UI Prototype

A high-fidelity, interactive mobile food ordering application prototype with complete design system and functional flows.

## 🎨 Design System Overview

### Device Frame
- **Target Devices**: iPhone 14 (390×844px) / Android equivalent
- **Design Philosophy**: Mobile-first, touch-optimized interface
- **Grid System**: 4-8pt baseline grid for consistent spacing

---

## 📐 Design Tokens

### Color Palette

#### Brand Colors
```css
--primary: #FF6B6B          /* Main brand color - buttons, accents */
--primary-dark: #E85555     /* Hover/active states */
--primary-light: #FF9999    /* Light backgrounds */
--secondary: #4ECDC4        /* Secondary actions */
--accent: #FFE66D           /* Price badges, highlights */
```

#### Semantic Colors
```css
--success: #51CF66          /* Success states, confirmations */
--error: #FF6B6B            /* Error states, destructive actions */
--warning: #FFD43B          /* Warning messages */
--info: #4ECDC4             /* Informational messages */
```

#### Neutral Colors (8-step scale)
```css
--neutral-0: #FFFFFF        /* Pure white */
--neutral-50: #F8F9FA       /* Backgrounds */
--neutral-100: #F1F3F5      /* Light backgrounds */
--neutral-200: #E9ECEF      /* Borders, dividers */
--neutral-300: #DEE2E6      /* Disabled states */
--neutral-400: #CED4DA      /* Placeholder text */
--neutral-500: #ADB5BD      /* Secondary text */
--neutral-600: #868E96      /* Tertiary text */
--neutral-700: #495057      /* Body text */
--neutral-800: #343A40      /* Headings */
--neutral-900: #212529      /* Primary text */
```

### Spacing System (8pt Grid)

```css
--spacing-1: 4px            /* Micro spacing */
--spacing-2: 8px            /* Base unit */
--spacing-3: 12px           /* Small gaps */
--spacing-4: 16px           /* Default padding */
--spacing-5: 20px           /* Medium gaps */
--spacing-6: 24px           /* Large padding */
--spacing-8: 32px           /* Section spacing */
--spacing-10: 40px          /* Large sections */
--spacing-12: 48px          /* Extra large */
--spacing-16: 64px          /* Huge spacing */
```

### Typography

#### Font Family
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 
                'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 
                'Helvetica Neue', sans-serif
```

#### Type Scale
```css
--font-size-xs: 12px        /* Captions, labels */
--font-size-sm: 14px        /* Secondary text */
--font-size-base: 16px      /* Body text */
--font-size-lg: 18px        /* Subheadings */
--font-size-xl: 20px        /* Small headings */
--font-size-2xl: 24px       /* Headings */
--font-size-3xl: 30px       /* Large headings */
--font-size-4xl: 36px       /* Hero headings */
--font-size-5xl: 48px       /* Display headings */
```

#### Font Weights
```css
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

#### Line Heights
```css
--line-height-tight: 1.2    /* Headings */
--line-height-normal: 1.5   /* Body text */
--line-height-relaxed: 1.75 /* Long-form content */
```

### Border Radius
```css
--radius-xs: 4px            /* Small elements */
--radius-sm: 8px            /* Cards, inputs */
--radius-md: 12px           /* Buttons, cards */
--radius-lg: 16px           /* Large cards */
--radius-xl: 24px           /* Modals, sheets */
--radius-2xl: 32px          /* Hero elements */
--radius-full: 9999px       /* Circular elements */
```

### Shadows (Elevation)
```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04)
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06)
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08)
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.12)
--shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.16)
--shadow-2xl: 0 24px 48px rgba(0, 0, 0, 0.20)
```

### Transitions & Animations
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

---

## 🧩 Component Library

### Buttons

#### Primary Button
- **Min Height**: 52px (exceeds 44px accessibility requirement)
- **Background**: Gradient (primary → primary-dark)
- **Border Radius**: Full (9999px)
- **Font Weight**: Semibold (600)
- **Active State**: Scale(0.96) with ripple effect

#### Secondary Button
- **Min Height**: 48px
- **Border**: 2px solid neutral-300
- **Background**: White
- **Active State**: Scale(0.96) with background change

#### Icon Button
- **Size**: 44×44px (WCAG AA compliant)
- **Active State**: Scale(0.92) with background tint

### Chips (Filter/Selection)
- **Padding**: 12px 20px
- **Border**: 2px solid
- **Border Radius**: Full
- **Active State**: Filled with primary color
- **Transition**: Scale(0.94) on tap

### Cards

#### Food Card
- **Border Radius**: 24px (--radius-xl)
- **Shadow**: Large elevation (--shadow-lg)
- **Image Aspect**: 400px height, cover fit
- **Transition**: Transform with opacity fade

#### Cart Item Card
- **Background**: neutral-50
- **Border Radius**: 12px (--radius-md)
- **Layout**: Horizontal flex with 80×80px image

#### Address/Payment Card
- **Border**: 2px (changes to primary when selected)
- **Border Radius**: 12px
- **Background**: Tinted when selected
- **Radio Check**: 20×20px circle with inner dot

### Modals & Sheets

#### Bottom Sheet
- **Max Height**: 90vh (95vh for checkout)
- **Border Radius**: 24px 24px 0 0
- **Animation**: Slide up (translateY)
- **Handle**: 40×4px rounded bar
- **Backdrop**: rgba(0, 0, 0, 0.5)

#### Modal
- **Max Width**: 390px (device width)
- **Max Height**: 90vh
- **Border Radius**: 24px
- **Animation**: Scale + fade in
- **Backdrop**: rgba(0, 0, 0, 0.5)

### Navigation

#### Top Bar
- **Height**: Auto (with top padding for notch)
- **Border**: 1px solid neutral-200
- **Background**: White
- **Z-index**: 200 (sticky)

#### Bottom Navigation
- **Height**: Auto with padding
- **Items**: 5 equal-width tabs
- **Active State**: Primary color with transform
- **Min Tap Target**: 44px height

### Inputs

#### Text Input
- **Height**: 48px
- **Border**: 2px solid neutral-300
- **Border Radius**: 12px
- **Focus State**: Border changes to primary
- **Padding**: 0 16px

#### Search Input
- **Background**: neutral-100
- **Border**: None
- **Focus State**: Background darkens to neutral-200

---

## 🎯 Interaction Specifications

### Microinteractions

#### Tap/Click
- **Scale Transform**: 0.92 - 0.98 (element-dependent)
- **Duration**: 150ms cubic-bezier
- **Visual Feedback**: Background tint or scale

#### Swipe Gestures
- **Threshold**: 100px horizontal movement
- **Card Transform**: translateX + rotate (0.05deg per px)
- **Velocity**: Smooth with 250ms transition

#### Double Tap Favorite
- **Detection**: < 300ms between taps
- **Animation**: Heart beat with bounce easing
- **Duration**: 500ms

#### Quantity Change
- **Animation**: Scale pulse (1 → 1.2 → 1)
- **Duration**: 300ms bounce easing

#### Cart Badge
- **Animation**: Pop scale (0 → 1.2 → 1)
- **Duration**: 400ms bounce easing
- **Trigger**: On cart update

#### Toast Notification
- **Duration**: 2500ms visible
- **Animation**: Slide up + fade
- **Position**: Bottom center (100px from bottom)

### Loading States

#### Skeleton
- **Background**: Gradient shimmer
- **Animation**: 1.5s infinite ease-in-out
- **Colors**: neutral-200 → neutral-100 → neutral-200

### State Management

#### Empty States
- **Icon Size**: 64×64px
- **Opacity**: 0.5
- **Message**: centered with spacing

#### Error States
- **Color**: Error red
- **Icon**: Alert symbol
- **Action**: Retry button

#### Success States
- **Color**: Success green
- **Animation**: Pop with bounce
- **Duration**: 600ms

---

## 📱 User Flows

### 1. Browse Flow
- **Entry**: Home screen with featured item
- **Actions**: 
  - Swipe left/right or tap arrows to navigate
  - Double tap image to favorite
  - Adjust quantity with +/- buttons
  - Tap "Add to Cart"
- **Feedback**: Toast confirmation, badge update

### 2. Cart Flow
- **Entry**: Tap floating cart button (bottom-right)
- **Sheet Content**:
  - List of items with quantities
  - Item quantity adjustment
  - Remove item option
  - Subtotal, delivery, total
- **Actions**:
  - Adjust quantities
  - Remove items
  - Proceed to checkout
- **Validation**: Checkout button disabled if cart empty

### 3. Checkout Flow
- **Sections** (in order):
  1. **Delivery Address**: Select saved or add new
  2. **Delivery Time**: ASAP or Schedule
  3. **Payment Method**: Card / UPI / Wallet
  4. **Coupon**: Optional code entry
- **Actions**:
  - Select options (visual confirmation with radio checks)
  - Apply coupon (validates code)
  - Place order button
- **Validation**: All required fields checked

### 4. Order Tracking Flow
- **Entry**: Immediately after placing order
- **Display**:
  - Success confirmation with order number
  - Timeline with 4 stages:
    1. Order Confirmed ✓
    2. Preparing Food (active)
    3. Out for Delivery
    4. Delivered
  - Courier information with contact
  - ETA countdown
- **Animation**: Progressive timeline updates
- **Actions**: Track on map, close modal

### 5. Location Picker Flow
- **Entry**: Tap location pin in top bar
- **Options**:
  - Use current location (GPS)
  - Search by address
  - Select saved address
- **Display**: List of saved addresses with icons

### 6. Profile Flow
- **Entry**: Tap avatar in top bar
- **Menu Items**:
  - Edit Profile
  - Order History → Opens tracking modal
  - Manage Addresses
  - Payment Methods
  - Saved Items
  - Settings
  - Logout (destructive action)

### 7. Search & Filter Flow
- **Entry**: Tap search in bottom nav
- **Components**:
  - Search input (auto-focus)
  - Filter categories:
    - Food Type (All/Veg/Non-veg)
    - Price Range ($ / $$ / $$$)
    - Rating (4.5+ / 4.0+ / 3.5+)
    - Delivery Time (Fast / Standard)
    - Sort By (Relevance/Distance/Rating/Price)
- **Interaction**: Chip selection with visual feedback

---

## ♿ Accessibility Features

### WCAG AA Compliance

#### Tap Targets
- **Minimum Size**: 44×44px for all interactive elements
- **Spacing**: Adequate gaps between adjacent targets

#### Color Contrast
- **Text**: Minimum 4.5:1 ratio against backgrounds
- **UI Elements**: Minimum 3:1 ratio

#### Focus States
- **Indicator**: 2px outline with 2px offset
- **Color**: Primary brand color
- **Visible**: On keyboard navigation

#### Motion
- **Prefers Reduced Motion**: Respects user preference
- **Fallback**: Instant transitions (0.01ms)

#### Dynamic Text
- **Support**: Relative units (rem, em)
- **Scalability**: Layout adapts to text size changes

---

## 🚀 Running the Prototype

### Option 1: Simple HTTP Server

```bash
# Navigate to prototype directory
cd /workspaces/Food/prototype

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 2: Direct File Access
Simply open `index.html` in your browser (some features may be limited).

### Option 3: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## ⌨️ Keyboard Shortcuts (Desktop Testing)

- **← / →**: Navigate between food items
- **F**: Toggle favorite on current item
- **C**: Open cart
- **Escape**: Close all modals/sheets

---

## 📦 File Structure

```
prototype/
├── index.html          # Main HTML structure
├── styles.css          # Complete design system & styling
├── app.js              # Interactive functionality
└── README.md           # This file (documentation)
```

---

## 🎨 Design Handoff Assets

### For Developers

#### CSS Custom Properties
All design tokens are exported as CSS variables in `:root`:
- Copy directly from `styles.css` lines 1-60
- Use `var(--token-name)` in your code

#### Component Classes
Every component has a dedicated class:
- `.icon-btn` - Icon buttons
- `.chip` - Filter/selection chips
- `.food-card` - Main food display card
- `.bottom-sheet` - Bottom sheet modals
- `.modal` - Centered modals
- `.toast` - Toast notifications

#### Animation Keyframes
All animations are defined and reusable:
- `@keyframes heartBeat` - Favorite animation
- `@keyframes badgePop` - Cart badge update
- `@keyframes slideUp` - Bottom sheet entry
- `@keyframes fadeIn` - Backdrop fade
- `@keyframes pulse` - Active timeline dot

### For Designers

#### Figma Import
1. Use CSS-to-Figma plugins to import design tokens
2. Component structure matches common design patterns
3. 8pt grid system throughout

#### Export Assets
- Food images: 800×600px WebP/JPEG
- Icons: SVG (24×24px viewBox)
- Avatars: 100×100px circular

---

## 🔧 Customization Guide

### Changing Brand Colors

Edit in `styles.css` at `:root`:
```css
--primary: #YOUR_COLOR;
--secondary: #YOUR_COLOR;
--accent: #YOUR_COLOR;
```

### Adjusting Spacing

Modify the 8pt grid base unit:
```css
--spacing-2: 8px;  /* Change base unit here */
/* Other values scale automatically */
```

### Typography

Change the font family:
```css
--font-primary: 'Your Font', sans-serif;
```

---

## 📊 Performance Notes

### Optimizations
- CSS transitions use `transform` and `opacity` (GPU-accelerated)
- Minimal JavaScript DOM manipulation
- Lazy-loaded images with proper aspect ratios
- Reduced motion support for accessibility

### File Sizes
- HTML: ~12KB
- CSS: ~25KB
- JavaScript: ~15KB
- **Total**: ~52KB (extremely lightweight)

---

## 🌐 Browser Support

- **Safari**: iOS 14+ (full support)
- **Chrome**: Android 9+ (full support)
- **Modern Browsers**: All features supported
- **Fallbacks**: Graceful degradation for older browsers

---

## 📝 License & Credits

This is a prototype/demonstration project.

### Image Sources
- Food images from Unsplash (royalty-free)
- Icons: Feather Icons (MIT License)

---

## 💡 Future Enhancements

- [ ] Real-time order tracking with map integration
- [ ] Push notification system
- [ ] Advanced filters (dietary restrictions, allergens)
- [ ] Social sharing of favorite items
- [ ] Reorder from history
- [ ] Multiple restaurant support
- [ ] Review and rating system
- [ ] Voice search integration

---

**Built with ❤️ for mobile-first experiences**
