# Food Ordering App 🍕

A mobile-first food ordering app built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- **Top Bar**: Fixed header with location indicator and account access
- **Food Card**: Large, rounded cards displaying food items with image, name, description, price, and quantity controls
- **Carousel Navigation**: Swipe between food items using invisible left/right zones
- **Progress Indicators**: Visual dots showing current position with direct navigation
- **Shopping Cart**: Floating cart button with badge displaying total items
- **Mobile-First Design**: Optimized for mobile devices, responsive across all screen sizes
- **Clean Architecture**: Reusable React components with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
├── app/
│   ├── globals.css        # Global styles with Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page with carousel logic
├── components/
│   ├── TopBar.tsx         # Header with location and account
│   ├── FoodCard.tsx       # Food item display card
│   └── CartButton.tsx     # Floating cart button with badge
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Components

### TopBar
- Displays location with icon
- Account access button
- Fixed positioning at top

### FoodCard
- Food item image
- Name and description
- Price display
- Quantity controls (increment/decrement)
- Responsive design

### CartButton
- Floating button (bottom-right)
- Item count badge
- Click handler for cart interaction

## Technologies

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework
- **PostCSS**: CSS processing

## Sample Data

The app includes 5 sample food items:
- Margherita Pizza
- Burger Deluxe
- Caesar Salad
- Sushi Roll
- Pasta Carbonara

## Customization

### Adding New Food Items

Edit the `foodItems` array in `app/page.tsx`:

```typescript
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Your Food Name',
    price: 12.99,
    image: 'https://your-image-url.jpg',
    description: 'Your description'
  },
  // ... more items
];
```

### Styling

Modify Tailwind classes in components or extend the configuration in `tailwind.config.ts`.

## License

ISC