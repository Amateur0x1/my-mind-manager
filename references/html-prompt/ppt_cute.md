# PPT Template - Pastel Cute

Friendly, playful, modern, approachable. Soft pastel colors with rounded corners and gentle shadows.

## Format Rules

```
# Title = New Slide
## H2 = Slide Heading
### H3 = Subheading
Other content = Slide content
```

## ⚠️ CRITICAL: Viewport & Aspect Ratio

**All slides MUST use fixed 3:4 aspect ratio (1080px × 1440px).**

```css
/* Container - Fixed 3:4 Aspect Ratio */
.slide-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
}

.slide {
    width: 1080px;
    height: 1440px;
    /* Scale to fit viewport while maintaining ratio */
    transform: scale(min(calc(100vw / 1080), calc(100vh / 1440)));
    transform-origin: center center;
    overflow: hidden;
}
```

**Never use 100vh/100vw directly. Always use 1080×1440 with scale transform.**

---

## Content Density Limits

| Slide Type | Maximum Content |
|------------|-----------------|
| Title slide | 1 heading + 1 subtitle |
| Content slide | 1 heading + 4-6 bullet points |
| Grid slide | 1 heading + 6 cards max (2x3) |

**Too much content? → Split into multiple slides. Never scroll.**

---

## Required CSS

```css
/* Base Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Plus Jakarta Sans', 'Nunito', sans-serif;
    background: #f5f5f5;
}

/* Fixed 3:4 Container */
.slide-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide {
    width: 1080px;
    height: 1440px;
    position: relative;
    overflow: hidden;
    transform-origin: center;
}

/* Scale to fit */
@media (min-aspect-ratio: 3/4) {
    .slide { transform: scale(calc(100vh / 1440)); }
}
@media (max-aspect-ratio: 3/4) {
    .slide { transform: scale(calc(100vw / 1080)); }
}

/* Content wrapper */
.slide-content {
    width: 100%;
    height: 100%;
    padding: 120px 80px;
    display: flex;
    flex-direction: column;
}
```

---

## Typography

- **Display Font:** Plus Jakarta Sans (700/800) - Google Fonts
- **Body Font:** Plus Jakarta Sans (400/500) - Google Fonts
- **Accent Font:** Nunito (600) - rounded, friendly

---

## Color Palette

```css
:root {
    /* Background */
    --bg-primary: #fdf6f8;
    --bg-gradient: linear-gradient(135deg, #fff5f7 0%, #f5f0ff 50%, #f0f8ff 100%);
    --bg-card: rgba(255, 255, 255, 0.95);
    
    /* Pastel Accents */
    --pastel-pink: #ffb5c5;
    --pastel-lavender: #c5b4e3;
    --pastel-mint: #b5ead7;
    --pastel-peach: #ffdac1;
    --pastel-sky: #a8d8ea;
    --pastel-yellow: #ffeaa7;
    
    /* Text */
    --text-primary: #5a5a6e;
    --text-secondary: #8b8b9e;
    --text-dark: #3a3a4e;
    
    /* Effects */
    --shadow-soft: 0 8px 30px rgba(255, 181, 197, 0.25);
    --shadow-card: 0 12px 40px rgba(167, 139, 250, 0.15);
    --radius-large: 32px;
    --radius-medium: 20px;
}
```

---

## Signature Elements

### Soft Card (1080px width optimized)
```css
.soft-card {
    background: var(--bg-card);
    border-radius: var(--radius-large);
    box-shadow: var(--shadow-card);
    padding: 48px;
}
```

### Pill Badge
```css
.pill {
    display: inline-flex;
    align-items: center;
    padding: 16px 32px;
    border-radius: 100px;
    font-weight: 600;
    font-size: 24px;
}
.pink { background: var(--pastel-pink); color: white; }
.mint { background: var(--pastel-mint); color: #3a6e5a; }
.lavender { background: var(--pastel-lavender); color: white; }
```

### Gradient Title
```css
.gradient-title {
    font-size: 80px;
    font-weight: 800;
    background: linear-gradient(135deg, var(--pastel-pink), var(--pastel-lavender));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
}
```

### Floating Shapes (CSS only)
```css
.shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
}
.shape-1 {
    width: 400px;
    height: 400px;
    background: var(--pastel-pink);
    top: -150px;
    right: -100px;
    opacity: 0.5;
}
.shape-2 {
    width: 300px;
    height: 300px;
    background: var(--pastel-lavender);
    bottom: -100px;
    left: -80px;
    opacity: 0.4;
}
```

---

## Layout Examples (1080×1440)

### Title Slide
```html
<div class="slide-container">
    <section class="slide" style="background: var(--bg-gradient);">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="slide-content" style="justify-content: center; align-items: center; text-align: center;">
            <h1 class="gradient-title">Welcome</h1>
            <p style="font-size: 32px; color: var(--text-secondary); margin-top: 24px;">
                Let's create something beautiful
            </p>
        </div>
    </section>
</div>
```

### Content with Pills
```html
<div class="slide-container">
    <section class="slide">
        <div class="slide-content">
            <h2 style="font-size: 56px; color: var(--text-dark); margin-bottom: 48px;">
                Our Features
            </h2>
            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                <span class="pill pink">Fast</span>
                <span class="pill mint">Secure</span>
                <span class="pill lavender">Easy</span>
            </div>
        </div>
    </section>
</div>
```

### Card Grid (2x2)
```html
<div class="slide-container">
    <section class="slide">
        <div class="slide-content">
            <h2 style="font-size: 56px; margin-bottom: 40px;">Services</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                <div class="soft-card">
                    <h3 style="font-size: 32px;">Design</h3>
                    <p style="color: var(--text-secondary); margin-top: 16px;">Beautiful interfaces</p>
                </div>
                <div class="soft-card">
                    <h3 style="font-size: 32px;">Develop</h3>
                    <p style="color: var(--text-secondary); margin-top: 16px;">Clean code</p>
                </div>
                <div class="soft-card">
                    <h3 style="font-size: 32px;">Deploy</h3>
                    <p style="color: var(--text-secondary); margin-top: 16px;">Cloud native</p>
                </div>
                <div class="soft-card">
                    <h3 style="font-size: 32px;">Scale</h3>
                    <p style="color: var(--text-secondary); margin-top: 16px;">Grow fast</p>
                </div>
            </div>
        </div>
    </section>
</div>
```

---

## Animation Effects

### Gentle Fade
```css
@keyframes gentleFade {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}
.fade-in {
    animation: gentleFade 0.6s ease-out forwards;
}
```

### Soft Bounce
```css
@keyframes softBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}
.bounce {
    animation: softBounce 2s ease-in-out infinite;
}
```

### Staggered Reveal
```css
.stagger-1 { animation-delay: 0.1s; opacity: 0; }
.stagger-2 { animation-delay: 0.2s; opacity: 0; }
.stagger-3 { animation-delay: 0.3s; opacity: 0; }
```

---

## Preset Variations

### Variant 1: Ocean Breeze
```css
--pastel-pink: #a8d8ea;
--pastel-lavender: #aa96da;
--pastel-mint: #fcbad3;
```

### Variant 2: Sunset Dream
```css
--pastel-pink: #ffb5c5;
--pastel-lavender: #ffdac1;
--pastel-mint: #ffeaa7;
```

### Variant 3: Lavender Field
```css
--pastel-pink: #d4a5ff;
--pastel-lavender: #a5d4ff;
--pastel-mint: #a5ffd4;
```

---

## Responsive Scale

```css
/* Auto scale to fit any viewport */
.slide {
    transform: scale(min(calc(100vw / 1080), calc(100vh / 1440)));
}

/* For very small screens */
@media (max-width: 540px) {
    .slide-content { padding: 60px 40px; }
    .gradient-title { font-size: 56px; }
}
```
