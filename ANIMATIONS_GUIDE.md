# Animation & Three.js Integration Guide

## Overview

The So-Eat landing page now includes advanced animations and Three.js integration to enhance user experience and guide users through the content.

## Features Implemented

### 1. Three.js Background (`ThreeBackground.tsx`)

- **Animated Stars**: 5000 floating particles in a sphere formation
- **Floating Orbs**: Subtle geometric shapes with sine wave animations
- **Performance Optimized**: Uses React Three Fiber for efficient rendering
- **Theme Colors**: Particles use brand colors (#f9dcc7, #966192)

### 2. Scroll Indicators

#### Scroll Progress Bar (`ScrollProgress.tsx`)

- **Top Progress Bar**: Shows reading progress across the page
- **Gradient Colors**: Uses brand gradient from primary to secondary
- **Smooth Animation**: Spring physics for natural movement
- **Fixed Position**: Always visible at the top

#### Scroll Down Indicator (`ScrollIndicator.tsx`)

- **Animated Arrows**: Bouncing double arrows to encourage scrolling
- **Auto-Hide**: Disappears after user scrolls 100px
- **Smooth Scroll**: Clicks scroll to features section smoothly
- **Hover Effects**: Scale animations on interaction

### 3. Section Animations

#### Animated Section Wrapper (`AnimatedSection.tsx`)

- **Intersection Observer**: Triggers animations when sections come into view
- **Fade In Up**: Sections slide up and fade in
- **Configurable Delays**: Staggered animations for better flow
- **Once Only**: Animations trigger once for performance

#### Hero Section Animations

- **Staggered Text**: Title, description, and buttons animate in sequence
- **Slide In**: Content slides from left, image from right
- **Button Interactions**: Scale animations on hover/tap
- **Breathing Effect**: Subtle opacity animation on hero image

#### Features Section Animations

- **Grid Stagger**: Cards animate in with staggered timing
- **Hover Effects**: Cards lift and change colors on hover
- **Scale Animations**: Smooth scaling on interaction
- **Gradient Backgrounds**: Dynamic color transitions

## Technical Implementation

### Dependencies Added

```json
{
  "three": "Latest",
  "@types/three": "Latest",
  "@react-three/fiber": "Latest",
  "@react-three/drei": "Latest",
  "framer-motion": "Latest"
}
```

### Performance Considerations

- **Suspense Boundaries**: Three.js components wrapped in Suspense
- **useFrame Optimization**: Efficient animation loops
- **Viewport Detection**: Animations only trigger when visible
- **Memory Management**: Proper cleanup of Three.js resources

### Animation Patterns Used

#### 1. Entrance Animations

```tsx
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

#### 2. Hover Interactions

```tsx
whileHover={{ scale: 1.05, y: -5 }}
whileTap={{ scale: 0.95 }}
```

#### 3. Continuous Animations

```tsx
animate={{ y: [0, 8, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

#### 4. Staggered Children

```tsx
variants={containerVariants}
transition={{ staggerChildren: 0.2 }}
```

## User Experience Enhancements

### 1. Visual Hierarchy

- **Progressive Disclosure**: Content reveals as user scrolls
- **Attention Direction**: Animations guide user's eye
- **Depth Perception**: Three.js background adds visual depth

### 2. Interaction Feedback

- **Immediate Response**: Hover states provide instant feedback
- **Smooth Transitions**: All state changes are animated
- **Loading States**: Graceful fallbacks for Three.js content

### 3. Accessibility

- **Reduced Motion**: Respects user's motion preferences
- **Focus Management**: Keyboard navigation preserved
- **Screen Reader Friendly**: Animations don't interfere with assistive tech

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **WebGL Support**: Required for Three.js background
- **Fallback Handling**: Graceful degradation for unsupported features

## Performance Metrics

- **60 FPS Target**: Smooth animations on modern devices
- **Lazy Loading**: Three.js only loads when needed
- **Bundle Size**: Optimized imports to minimize impact

## Customization Options

### Animation Timing

```tsx
// Adjust in AnimatedSection.tsx
transition={{ duration: 0.8, delay: 0.2 }}
```

### Three.js Particles

```tsx
// Modify in ThreeBackground.tsx
const sphere = generateSphere(5000, 1.5); // count, radius
```

### Scroll Behavior

```tsx
// Configure in ScrollIndicator.tsx
setIsVisible(scrollY < 100); // hide threshold
```

## Future Enhancements

1. **Parallax Scrolling**: Different scroll speeds for layers
2. **Mouse Interaction**: Three.js elements respond to cursor
3. **Loading Animations**: Skeleton screens during content load
4. **Micro-interactions**: Button ripples, form field focus effects
5. **Scroll-triggered Animations**: More complex scroll-based sequences

## Troubleshooting

### Common Issues

1. **Three.js Not Loading**: Check WebGL support
2. **Animation Lag**: Reduce particle count or animation complexity
3. **Layout Shift**: Ensure proper container sizing
4. **Memory Leaks**: Verify useFrame cleanup

### Debug Mode

Add to components for debugging:

```tsx
transition={{ duration: 0.8, ease: "easeOut" }}
// Add: onAnimationComplete={() => console.log('Animation done')}
```
