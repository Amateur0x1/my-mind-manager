# PPT Template - Dark Botanical

Elegant, sophisticated, artistic. Dark theme with warm accents and abstract shapes.

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

- **Display Font:** Cormorant (400/600) - Google Fonts (elegant serif)
- **Body Font:** IBM Plex Sans (300/400) - Google Fonts
- **Accent Font:** Cormorant Italic (400) - for quotes

---

## Color Palette

```css
:root {
    /* Background */
    --bg-primary: #0f0f0f;
    --bg-secondary: #1a1a1a;
    
    /* Text */
    --text-primary: #e8e4df;
    --text-secondary: #9a9590;
    --text-muted: #5a5550;
    
    /* Warm Accents */
    --accent-warm: #d4a574;
    --accent-pink: #e8b4b8;
    --accent-gold: #c9b896;
    --accent-terracotta: #c17a5f;
    
    /* Effects */
    --glow-warm: 0 0 30px rgba(212, 165, 116, 0.3);
}
```

---

## Signature Elements

### Abstract Soft Shapes (CSS Only)
```css
.soft-shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
}
.shape-1 {
    width: 400px;
    height: 400px;
    background: var(--accent-pink);
    top: -100px;
    right: -100px;
}
.shape-2 {
    width: 300px;
    height: 300px;
    background: var(--accent-gold);
    bottom: -50px;
    left: -50px;
}
```

### Elegant Serif
```css
.elegant-title {
    font-family: 'Cormorant', serif;
    font-weight: 600;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.1;
}
```

### Thin Vertical Line
```css
.thin-accent-line {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, var(--accent-warm), transparent);
}
```

### Italic Signature
```css
.signature {
    font-family: 'Cormorant', serif;
    font-style: italic;
    font-size: 1.25rem;
    color: var(--accent-warm);
}
```

---

## Layout Examples

### Title Slide with Shapes
```html
<section class="slide">
    <div class="soft-shape shape-1"></div>
    <div class="soft-shape shape-2"></div>
    <div class="slide-content" style="text-align: center;">
        <h1 class="elegant-title">
            The Art of<br>Innovation
        </h1>
        <div class="thin-accent-line" style="margin: 2rem auto;"></div>
        <p style="color: var(--text-secondary);">
            Crafting the future with elegance
        </p>
    </div>
</section>
```

### Content Slide
```html
<section class="slide">
    <div class="soft-shape shape-1" style="opacity: 0.2;"></div>
    <div class="slide-content">
        <h2 class="elegant-title" style="font-size: 2.5rem;">
            Philosophy
        </h2>
        <div style="display: flex; gap: 3rem; margin-top: 3rem;">
            <div style="flex: 1;">
                <p style="color: var(--text-secondary); line-height: 1.8;">
                    We believe in the power of thoughtful design,
                    where every element serves a purpose and
                    every detail matters.
                </p>
            </div>
            <div style="width: 1px; background: var(--text-muted);"></div>
            <div style="flex: 1;">
                <p class="signature">
                    "Simplicity is the ultimate sophistication."
                </p>
            </div>
        </div>
    </div>
</section>
```

### Feature List
```html
<section class="slide">
    <div class="slide-content">
        <h2 class="elegant-title">Principles</h2>
        <ul style="list-style: none; padding: 0; margin-top: 2rem;">
            <li style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem;">
                <span style="color: var(--accent-warm);">—</span>
                <span style="font-size: 1.25rem;">Craftsmanship</span>
            </li>
            <li style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem;">
                <span style="color: var(--accent-warm);">—</span>
                <span style="font-size: 1.25rem;">Attention to Detail</span>
            </li>
            <li style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem;">
                <span style="color: var(--accent-warm);">—</span>
                <span style="font-size: 1.25rem;">Timeless Elegance</span>
            </li>
        </ul>
    </div>
</section>
```

---

## Animation Effects

### Slow Fade
```css
@keyframes elegantFade {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
}
.elegant-fade {
    animation: elegantFade 1s ease-out forwards;
}
```

### Soft Pulse
```css
@keyframes softGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; }
}
.glow-pulse {
    animation: softGlow 4s ease-in-out infinite;
}
```

---

## Preset Variations

### Rose Gold
```css
--accent-warm: #e8b4b8;
--accent-pink: #d4a574;
```

### Terracotta
```css
--accent-warm: #c17a5f;
--accent-terracotta: #a65d3f;
```

### Forest
```css
--accent-warm: #7d9a78;
--accent-pink: #a4b899;
```

---

## Responsive

```css
@media (max-height: 700px) {
    .elegant-title { font-size: 2rem; }
    .soft-shape { width: 200px; height: 200px; }
}
@media (max-width: 600px) {
    .slide-content { padding: 1rem; }
}
```
