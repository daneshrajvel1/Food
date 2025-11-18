# FoodApp - Interaction Specification

## Document Overview
This document specifies all interactions, animations, and state transitions in the FoodApp mobile prototype.

---

## 1. Core Screen Interactions

### 1.1 Food Card Navigation

#### Lateral Button Navigation
- **Left Overlay**
  - Position: Left 30% of card height (top 70%)
  - Action: Navigate to previous food item
  - Visual: Transparent, subtle highlight on active
  - Feedback: Card fade + scale transition (250ms)

- **Right Overlay**
  - Position: Right 30% of card height (top 70%)
  - Action: Navigate to next food item
  - Visual: Transparent, subtle highlight on active
  - Feedback: Card fade + scale transition (250ms)

#### Swipe Gesture
- **Trigger**: Horizontal drag > 100px
- **Direction**: 
  - Right swipe → Previous item
  - Left swipe → Next item
- **Visual Feedback**:
  - Card follows finger: `translateX(distance) + rotate(distance * 0.05deg)`
  - Real-time transform during drag
  - Snap back animation if threshold not met
- **Completion**: 
  - Card opacity: 1 → 0 (150ms)
  - New card appears with opacity 0 → 1 + scale 0.95 → 1 (150ms)

### 1.2 Favorite Action

#### Single Tap
- **Target**: Heart icon button (48×48px, top-right of image)
- **States**:
  - Inactive: Outline heart, neutral-700 color
  - Active: Filled heart, error color
- **Animation**: 
  ```
  Scale: 1 → 1.3 → 0.9 → 1 (500ms bounce easing)
  Color: neutral-700 → error (instant)
  Fill: none → error (instant)
  ```
- **Feedback**: Toast message
  - "❤️ Added to favorites!" (active)
  - "Removed from favorites" (inactive)

#### Double Tap (Image)
- **Target**: Food image area
- **Detection**: 2 taps within 300ms
- **Action**: Toggle favorite state
- **Animation**: Same as single tap

### 1.3 Quantity Selector

#### Decrease Button (−)
- **Constraint**: Minimum value = 1
- **Disabled State**: Opacity 0.5 when value = 1
- **Active Animation**: Scale 0.88 (150ms)
- **Value Change**: Number pulses (scale 1 → 1.2 → 1, 300ms bounce)

#### Increase Button (+)
- **Constraint**: Maximum value = 99
- **Disabled State**: Opacity 0.5 when value = 99
- **Active Animation**: Scale 0.88 (150ms)
- **Value Change**: Number pulses (scale 1 → 1.2 → 1, 300ms bounce)

### 1.4 Add to Cart Button

#### Tap Interaction
- **Active State**: Scale 0.96 (250ms)
- **Ripple Effect**: 
  ```
  White circle: 0×0 → 300×300px (600ms)
  Opacity: 0.3 → 0
  Origin: Tap position
  ```
- **Success Flow**:
  1. Button press animation
  2. Cart badge increments (pop animation)
  3. Toast appears: "[quantity]x [item name] added to cart!"
  4. Quantity resets to 1

---

## 2. Navigation Interactions

### 2.1 Top Bar

#### Location Button
- **Target**: 44×44px pin icon (left)
- **Active**: Scale 0.92 + background tint (150ms)
- **Action**: Opens location picker modal
- **Modal Entry**: Scale 0.9 → 1 + fade in (250ms)

#### Avatar Button
- **Target**: 44×44px circular avatar (right)
- **Active**: Scale 0.92 (150ms)
- **Action**: Opens profile modal
- **Modal Entry**: Scale 0.9 → 1 + fade in (250ms)

### 2.2 Bottom Navigation

#### Tab Selection
- **Active State**:
  - Color: neutral-500 → primary
  - Icon fill: Solid fill appears
  - Transform: translateY(-2px)
  - Transition: 150ms ease
- **Tap Feedback**: Scale 0.92 (150ms)
- **Current Tab**: Remains highlighted

---

## 3. Floating Cart Button

### 3.1 Button States

#### Default
- Size: 60×60px circular
- Background: Primary gradient
- Shadow: XL elevation
- Position: Fixed bottom-right (24px margins)

#### Active (Tap)
- Scale: 0.92 (250ms)
- Maintains position

### 3.2 Cart Badge

#### Visibility
- Hidden when count = 0
- Visible when count > 0

#### Animation (On Update)
```
Entry: Scale 0 → 1.2 → 1 (400ms bounce)
Exit: Scale 1 → 0 (150ms)
```

#### Position
- Absolute: top -4px, right -4px
- Min-width: 24px, height: 24px
- Circular with padding

---

## 4. Bottom Sheet Interactions

### 4.1 Cart Sheet

#### Opening
- **Trigger**: Tap floating cart button
- **Animation**: 
  ```
  Backdrop: Fade in (250ms)
  Sheet: Slide up from bottom (250ms cubic-bezier)
  ```
- **Handle**: 40×4px gray bar, draggable
- **Max Height**: 90vh

#### Closing
- **Triggers**:
  - Tap backdrop
  - Tap close button (×)
  - Swipe down (not implemented in v1)
- **Animation**: Reverse of opening

#### Cart Items

**Quantity Adjustment**
- In-line +/− buttons (28×28px)
- Active: Scale 0.88 (150ms)
- Update: Immediate reflow + summary recalculation

**Remove Item**
- Text button: "Remove" (error color)
- Active: Opacity 0.6 (150ms)
- Action: Item fades out + removes + reflow (250ms)
- Feedback: Toast "[item name] removed from cart"

#### Empty State
- Icon: 64×64px cart (opacity 0.5)
- Text: "Your cart is empty"
- Checkout button: Disabled (opacity 0.5)

### 4.2 Checkout Sheet

#### Navigation
- **Entry From**: Cart sheet
- **Transition**: Cart slides down → Checkout slides up (600ms total, 300ms delay)
- **Back Button**: Returns to cart with reverse transition

#### Section Interactions

**Address Selection**
- Cards: 2px border (neutral-200 → primary on select)
- Background: white → primary-tint (4% opacity) on select
- Radio indicator: Circle with inner dot animation
- Tap: Scale 0.98 (150ms)

**Delivery Time Chips**
- Toggle between "ASAP" and "Schedule"
- Active: primary background + white text
- Inactive: white background + neutral text
- Tap: Scale 0.94 (150ms)

**Payment Selection**
- Same interaction as address selection
- 3 options: Card / UPI / Wallet

**Coupon Input**
- Input focus: Border neutral-300 → primary
- Apply button: Primary background, active scale 0.94
- Success: Toast "✨ Coupon applied! $5 discount"
- Error: Toast "❌ Invalid coupon code"

#### Place Order Button
- Full-width primary button
- Active: Scale 0.96 + ripple effect
- Success: Sheet closes → Order tracking modal opens (300ms delay)

---

## 5. Modal Interactions

### 5.1 Order Tracking Modal

#### Entry Animation
```
Backdrop: Fade in (250ms)
Modal: Scale 0.9 → 1 + fade 0 → 1 (250ms)
Success Icon: Pop scale 0 → 1.1 → 1 (600ms bounce)
```

#### Timeline Progress
- **Initial State**: 
  - Stage 1 (Order Confirmed): Completed ✓
  - Stage 2 (Preparing): Active (pulsing dot)
  - Stage 3 (Delivery): Inactive
  - Stage 4 (Delivered): Inactive

- **Dot Animation (Active)**:
  ```
  Pulse: Shadow 2px → 8px (2s infinite)
  Color: Primary
  ```

- **Timeline Connector**:
  - Completed sections: Primary color
  - Incomplete: Neutral-300

- **Simulated Progress**:
  - After 3s: Stage 2 → Completed, Stage 3 → Active
  - After 8s: Stage 3 → Completed, Stage 4 → Completed
  - Final toast: "🎉 Order delivered! Enjoy your meal!"

#### Courier Info
- Avatar: 48×48px circular
- Call button: 44×44px, scale 0.92 on tap
- Action: Toast "Opening dialer..." (demo)

### 5.2 Location Modal

#### Structure
- Current location button with GPS icon
- Divider: "OR"
- Search input (auto-focus on open)
- Saved addresses list

#### Interactions
- **Use Current Location**: 
  - Tap → Toast "📍 Using your current location..."
  - Modal closes
- **Search Input**: 
  - Focus: Border highlights
  - Type: Real-time filtering (not implemented in v1)
- **Saved Address**: 
  - Tap → Selects + closes modal
  - Active: Scale 0.98 + background tint

### 5.3 Profile Modal

#### Menu Items
- List of 8 options
- Each item: 44×56px height
- Active: Scale 0.98 + background tint (150ms)
- Icons: Left-aligned, 20×20px
- Chevron: Right-aligned, 16×16px

#### Special Actions
- **Order History**: Opens order tracking modal
- **Logout**: Destructive action (error color)

### 5.4 Search & Filters Modal

#### Header
- Back button: Left (44×44px)
- Search input: Auto-focus, neutral-100 background
- Focus state: Background darkens to neutral-200

#### Filter Chips
- Multi-group layout
- Active state: Primary background + white text
- Tap: Scale 0.94 (150ms)
- Selection: Toast "Filter applied"

#### Filter Groups
1. **Food Type**: All / Veg 🌱 / Non-veg 🍖
2. **Price Range**: All / $ / $$ / $$$
3. **Rating**: All / 4.5+ / 4.0+ / 3.5+
4. **Delivery Time**: All / Fast ⚡ / Standard 🕐
5. **Sort By**: Relevance / Distance / Rating / Price

---

## 6. Toast Notifications

### Appearance
- **Position**: Bottom center, 100px from bottom
- **Entry**: Slide up + fade in (250ms)
- **Display**: 2500ms
- **Exit**: Slide down + fade out (250ms)

### Style
- Background: neutral-900 (90% opacity)
- Color: white
- Border radius: 16px
- Padding: 16px 24px
- Shadow: XL
- Font: 14px medium

### Trigger Examples
- Add to cart success
- Favorite toggle
- Cart item removed
- Coupon applied/invalid
- Filter applied
- Location selected
- Navigation actions

---

## 7. Loading & Error States

### 7.1 Skeleton Loading
```
Background: Linear gradient shimmer
Colors: neutral-200 → neutral-100 → neutral-200
Animation: 1.5s infinite ease-in-out
Movement: 200% background-position sweep
```

### 7.2 Image Loading
- Placeholder: Neutral-100 → Neutral-200 gradient
- Aspect ratio: Maintained during load
- Fade in: 0 → 1 (250ms) on load complete

### 7.3 Empty States
- Icon: 64×64px, opacity 0.5
- Message: centered, neutral-500
- Action button (if applicable)

### 7.4 Error States
- Icon: Alert symbol, error color
- Message: error color text
- Retry button: secondary style

---

## 8. Accessibility Interactions

### 8.1 Keyboard Navigation
- **Tab**: Focus moves to next interactive element
- **Enter/Space**: Activates focused element
- **Escape**: Closes top-most modal/sheet
- **Arrow Keys**: Navigate food items (left/right)

### 8.2 Focus Indicators
- Outline: 2px solid primary
- Offset: 2px
- Border radius: Matches element

### 8.3 Reduced Motion
- User preference: `prefers-reduced-motion`
- Effect: All animations → 0.01ms instant transitions
- Maintains functionality without motion

---

## 9. Performance Specifications

### 9.1 Animation Performance
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid `width`, `height`, `top`, `left` animations
- Use `will-change` sparingly for active animations

### 9.2 Touch Response
- Target: <100ms from touch to visual feedback
- Achieved through CSS transitions (not JavaScript)

### 9.3 Smooth Scrolling
- Native momentum scrolling
- Overflow hidden on body when modals open

---

## 10. State Persistence

### 10.1 Session State (Demo)
- Current food item index
- Cart contents
- Favorite items set
- No persistence across page reloads (v1)

### 10.2 Future Enhancements
- localStorage for cart
- IndexedDB for offline support
- Session recovery

---

## Quick Reference: Animation Durations

| Element | Duration | Easing |
|---------|----------|--------|
| Button tap | 150ms | ease |
| Card transition | 250ms | ease |
| Modal open/close | 250ms | ease |
| Sheet slide | 250ms | cubic-bezier |
| Toast | 250ms | ease |
| Ripple effect | 600ms | ease-out |
| Heart beat | 500ms | bounce |
| Badge pop | 400ms | bounce |
| Quantity pulse | 300ms | bounce |
| Timeline pulse | 2000ms | infinite |
| Skeleton shimmer | 1500ms | infinite |

---

## Quick Reference: Interactive Sizes

| Element | Size | Notes |
|---------|------|-------|
| Icon button | 44×44px | WCAG AA minimum |
| Avatar button | 44×44px | WCAG AA minimum |
| Bottom nav item | 44px height | Full width divided by 5 |
| Floating cart | 60×60px | Larger for prominence |
| Cart badge | 24×24px min | Expands with content |
| Favorite button | 48×48px | Larger for easier tap |
| Quantity buttons | 36×36px | Within selector group |
| Chip | auto × 40px | Min height for comfort |
| Primary button | auto × 52px | Prominent action |
| Secondary button | auto × 48px | Standard action |

---

**Version**: 1.0  
**Last Updated**: November 2025  
**Status**: Complete for MVP prototype
