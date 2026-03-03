

# Ultra-Luxury Animated Portfolio Website

## Design Philosophy
A cinematic, dark-themed personal portfolio that feels like navigating a premium digital product — minimal, elegant, and visually striking with refined animations throughout.

## Color & Typography
- **Base**: Deep dark backgrounds (#0a0a0a to #111) with subtle gradients
- **Accents**: Refined neon/gradient highlights (violet-to-cyan or similar luxury palette) with soft glows
- **Typography**: Clean, modern sans-serif with generous spacing and hierarchy
- **Overall feel**: High contrast, atmospheric depth, sophisticated restraint

## Sections & Features

### 1. Hero Section
- Full-viewport cinematic hero with animated gradient text for name/title
- Ambient background motion — slow-moving abstract light orbs or blurred gradient shapes
- Strong CTA button with magnetic hover effect and subtle glow
- Smooth fade-in entrance animation on load

### 2. Navigation
- Minimal fixed top nav with frosted glass effect
- Smooth scroll to sections with active state indicators
- Subtle appear/hide on scroll behavior

### 3. About Section
- Clean two-column layout (text + visual element)
- Scroll-triggered fade-in and slide-in reveals
- Soft 3D card tilt effect on the profile/visual card

### 4. Skills / Expertise Section
- Elegant grid of skill cards with hover micro-interactions
- Subtle glow borders and 3D tilt on hover
- Staggered reveal animation on scroll

### 5. Projects / Work Section
- Featured project cards with large visuals
- 3D tilt effect and light mouse-follow interactions on cards
- Smooth hover transitions revealing project details
- Parallax depth between card layers

### 6. Experience / Timeline
- Vertical timeline with scroll-triggered reveals
- Each milestone fades and slides in as user scrolls
- Subtle connecting line animation

### 7. Contact Section
- Clean contact form or CTA area
- Animated gradient border effects
- Social links with refined hover animations

### 8. Footer
- Minimal footer with floating subtle elements
- Soft ambient glow accents

## Animations & Interactions
- **Scroll animations**: Intersection Observer-based fade-in, slide-in, and scale reveals per section
- **Parallax**: Gentle depth movement on background elements during scroll
- **Mouse-follow**: Subtle light/glow that follows cursor on hero and card sections
- **3D tilt**: Cards respond to mouse position with refined perspective transforms
- **Micro-interactions**: Button hover glows, link underline animations, smooth transitions
- **Floating elements**: Slow-drifting abstract shapes in background for atmospheric depth

## Responsive Design
- Fully responsive across all breakpoints
- Touch-friendly interactions on mobile (tilt/mouse effects gracefully disabled)
- Performance-optimized animations using CSS transforms and will-change

## Technical Approach
- Pure CSS animations + lightweight custom React hooks for scroll/mouse tracking
- No heavy animation libraries — keeping bundle size minimal for performance
- CSS custom properties for the glow/gradient system
- Intersection Observer API for scroll-triggered reveals

