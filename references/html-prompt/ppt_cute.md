# PPT Template - Pastel Cute

Friendly, playful, modern, approachable. Soft pastel colors with rounded corners and gentle shadows.

## Format Rules

```
# Title = New Slide
## H2 = Slide Heading
### H3 = Subheading
Other content = Slide content
```

## ⚠️ CRITICAL: Content Density Limits

Every slide MUST fit in the viewport. No scrolling within slides.

| Slide Type | Maximum Content |
|------------|-----------------|
| Title slide | 1 heading + 1 subtitle |
| Content slide | 1 heading + 4-6 bullet points |
| Grid slide | 1 heading + 6 cards max (2x3) |

**Too much content? → Split into multiple slides. Never scroll.**

---

## Required Base CSS

```css
/* VIEWPORT FITTING - MANDATORY */
html, body {
    height: 100%;
    overflow: hidden;
}
html {
    scroll-snap-type: y mandatory;
}
.slide {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    position: relative;
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
    --bg-card: rgba(255, 255, 255, 0.9);
    
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
    --shadow-soft: 0 4px 20px rgba(255, 181, 197, 0.3);
    --shadow-card: 0 8px 32px rgba(167, 139, 250, 0.15);
    --radius-large: 24px;
    --radius-medium: 16px;
}
```

---

## Signature Elements

### Soft Card
```css
.soft-card {
    background: var(--bg-card);
    border-radius: var(--radius-large);
    box-shadow: var(--shadow-card);
    backdrop-filter: blur(10px);
}
```

### Pill Badge
```css
.pill {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    background: var(--pastel-pink);
    color: white;
    font-weight: 600;
}
```

### Gradient Text
```css
.gradient-text {
    background: linear-gradient(135deg, var(--pastel-pink), var(--pastel-lavender));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

### Floating Shapes (CSS only)
```css
.shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
    filter: blur(60px);
}
.shape-1 {
    width: 300px;
    height: 300px;
    background: var(--pastel-pink);
    top: -100px;
    right: -100px;
}
.shape-2 {
    width: 200px;
    height: 200px;
    background: var(--pastel-lavender);
    bottom: -50px;
    left: -50px;
}
```

### Soft Button
```css
.soft-btn {
    background: linear-gradient(135deg, var(--pastel-pink), var(--pastel-lavender));
    border: none;
    border-radius: var(--radius-medium);
    padding: 1rem 2rem;
    color: white;
    font-weight: 600;
    box-shadow: var(--shadow-soft);
    transition: transform 0.2s, box-shadow 0.2s;
}
.soft-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 181, 197, 0.4);
}
```

---

## Layout Examples

### Title Slide
```html
<section class="slide">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="slide-content" style="text-align: center;">
        <h1 class="gradient-text" style="font-size: clamp(2rem, 5vw, 3.5rem);">
            Welcome
        </h1>
        <p style="color: var(--text-secondary); margin-top: 1rem; font-size: 1.25rem;">
            Let's create something beautiful
        </p>
    </div>
</section>
```

### Content Slide with Pills
```html
<section class="slide">
    <div class="slide-content">
        <h2 style="color: var(--text-dark);">Our Features</h2>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
            <span class="pill" style="background: var(--pastel-pink);">Fast</span>
            <span class="pill" style="background: var(--pastel-mint);">Secure</span>
            <span class="pill" style="background: var(--pastel-lavender);">Easy</span>
        </div>
    </div>
</section>
```

### Card Grid
```html
<section class="slide">
    <div class="slide-content">
        <h2>Services</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem;">
            <div class="soft-card" style="padding: 2rem;">
                <h3>Design</h3>
                <p style="color: var(--text-secondary);">Beautiful interfaces</p>
            </div>
            <div class="soft-card" style="padding: 2rem;">
                <h3>Develop</h3>
                <p style="color: var(--text-secondary);">Clean code</p>
            </div>
            <div class="soft-card" style="padding: 2rem;">
                <h3>Deploy</h3>
                <p style="color: var(--text-secondary);">Cloud native</p>
            </div>
        </div>
    </div>
</section>
```

---

## Animation Effects

### Gentle Bounce
```css
@keyframes gentleBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
.bounce {
    animation: gentleBounce 2s ease-in-out infinite;
}
```

### Soft Fade
```css
@keyframes softFadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
.fade-in {
    animation: softFadeIn 0.6s ease-out forwards;
}
```

### Pulse
```css
@keyframes softPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
.pulse {
    animation: softPulse 3s ease-in-out infinite;
}
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
