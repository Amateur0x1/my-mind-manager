# PPT Template - Swiss Modern

Clean, precise, Bauhaus-inspired. Bold typography with strong grids and geometric shapes.

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
| Grid slide | 1 heading + 6 items max |

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

- **Display Font:** Archivo (800/900) - Google Fonts
- **Body Font:** Inter (400/500) - Google Fonts
- **Accent Font:** Space Grotesk (500) - for variety

---

## Color Palette

```css
:root {
    /* Primary */
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --bg-dark: #000000;
    
    /* Text */
    --text-primary: #000000;
    --text-secondary: #666666;
    --text-light: #ffffff;
    
    /* Swiss Red Accent */
    --accent: #ff3300;
    --accent-light: #ff6633;
    
    /* Grid Lines */
    --grid-color: #e0e0e0;
}
```

---

## Signature Elements

### Bold Typography
```css
.swiss-title {
    font-family: 'Archivo', sans-serif;
    font-weight: 900;
    font-size: clamp(2.5rem, 8vw, 6rem);
    letter-spacing: -0.03em;
    line-height: 0.9;
}
```

### Grid Layout
```css
.swiss-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
}
.swiss-col-6 {
    grid-column: span 6;
}
```

### Red Accent Bar
```css
.accent-bar {
    width: 60px;
    height: 8px;
    background: var(--accent);
}
```

### Geometric Shapes (CSS only)
```css
.circle {
    border-radius: 50%;
}
.square {
    border-radius: 0;
}
.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid var(--accent);
}
```

### Bold Border
```css
.bold-border {
    border: 4px solid var(--text-primary);
}
```

---

## Layout Examples

### Title Slide
```html
<section class="slide">
    <div class="slide-content" style="display: grid; grid-template-columns: 1fr 1fr; align-items: center;">
        <div>
            <div class="accent-bar"></div>
            <h1 class="swiss-title" style="margin-top: 1rem;">
                DESIGN<br>SYSTEMS
            </h1>
        </div>
        <div style="background: var(--accent); height: 100%;"></div>
    </div>
</section>
```

### Content with Grid
```html
<section class="slide">
    <div class="slide-content">
        <div class="swiss-grid">
            <div class="swiss-col-6">
                <h2>Typography</h2>
                <p>Strong, bold typography is the foundation.</p>
            </div>
            <div class="swiss-col-6">
                <h2>Grid</h2>
                <p>Precise alignment creates order.</p>
            </div>
        </div>
    </div>
</section>
```

### Feature List
```html
<section class="slide">
    <div class="slide-content">
        <h2>Principles</h2>
        <ul style="list-style: none; padding: 0; margin-top: 2rem;">
            <li style="font-size: 2rem; font-weight: 800; border-bottom: 4px solid var(--accent); padding-bottom: 0.5rem; margin-bottom: 1rem;">
                01 — Clarity
            </li>
            <li style="font-size: 2rem; font-weight: 800; border-bottom: 4px solid var(--accent); padding-bottom: 0.5rem; margin-bottom: 1rem;">
                02 — Precision
            </li>
            <li style="font-size: 2rem; font-weight: 800; border-bottom: 4px solid var(--accent); padding-bottom: 0.5rem;">
                03 — Impact
            </li>
        </ul>
    </div>
</section>
```

---

## Animation Effects

### Sharp Reveal
```css
@keyframes sharpReveal {
    from { 
        clip-path: inset(0 100% 0 0);
    }
    to { 
        clip-path: inset(0 0 0 0);
    }
}
.reveal {
    animation: sharpReveal 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

### Grid Fade
```css
@keyframes gridFadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
```

---

## Preset Variations

### Variant 1: Black & White
```css
--accent: #000000;
--bg-primary: #ffffff;
```

### Variant 2: International Orange
```css
--accent: #ff4d00;
```

### Variant 3: Minimal Gray
```css
--accent: #333333;
--bg-primary: #fafafa;
```
