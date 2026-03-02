# PPT Template - Bold Signal

Confident, bold, high-impact. Modern dark theme with vibrant accent cards.

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
| Grid slide | 1 heading + 6 cards max |

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

- **Display Font:** Archivo Black (900) - Google Fonts
- **Body Font:** Space Grotesk (400/500) - Google Fonts
- **Accent Font:** Space Mono (500) - for numbers

---

## Color Palette

```css
:root {
    /* Background */
    --bg-primary: #1a1a1a;
    --bg-gradient: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
    --bg-card: #FF5722;
    
    /* Text */
    --text-primary: #ffffff;
    --text-on-card: #1a1a1a;
    --text-secondary: #a0a0a0;
    
    /* Accent Colors */
    --accent-orange: #FF5722;
    --accent-coral: #ff7043;
    --accent-yellow: #ffc107;
    
    /* Effects */
    --card-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
```

---

## Signature Elements

### Bold Card
```css
.bold-card {
    background: var(--accent-orange);
    padding: 2rem;
    color: var(--text-on-card);
    box-shadow: var(--card-shadow);
}
```

### Large Section Number
```css
.section-number {
    font-family: 'Space Mono', monospace;
    font-size: 8rem;
    font-weight: 700;
    opacity: 0.15;
    position: absolute;
    top: 0;
    right: 2rem;
}
```

### Navigation Breadcrumb
```css
.nav-breadcrumb {
    display: flex;
    gap: 0.5rem;
    opacity: 0.5;
}
.nav-breadcrumb span.active {
    opacity: 1;
}
.nav-breadcrumb span::after {
    content: '/';
    margin-left: 0.5rem;
}
.nav-breadcrumb span:last-child::after {
    content: '';
}
```

---

## Layout Examples

### Title Slide
```html
<section class="slide">
    <div class="slide-content" style="position: relative;">
        <div class="section-number">01</div>
        <div style="position: absolute; bottom: 0; left: 0;">
            <h1 style="font-family: 'Archivo Black'; font-size: clamp(3rem, 8vw, 6rem);">
                FUTURE<br>FORWARD
            </h1>
            <p style="font-family: 'Space Grotesk'; margin-top: 1rem; opacity: 0.7;">
                Building tomorrow's solutions today
            </p>
        </div>
    </div>
</section>
```

### Content with Card
```html
<section class="slide">
    <div class="slide-content">
        <h2 style="margin-bottom: 2rem;">Key Points</h2>
        <div class="bold-card" style="max-width: 600px;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Innovation</h3>
            <p>Driving change through technology and creativity.</p>
        </div>
    </div>
</section>
```

### Numbered Features
```html
<section class="slide">
    <div class="slide-content">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
            <div style="text-align: center;">
                <div style="font-family: 'Space Mono'; font-size: 4rem; color: var(--accent-orange);">01</div>
                <h3>Speed</h3>
            </div>
            <div style="text-align: center;">
                <div style="font-family: 'Space Mono'; font-size: 4rem; color: var(--accent-orange);">02</div>
                <h3>Scale</h3>
            </div>
            <div style="text-align: center;">
                <div style="font-family: 'Space Mono'; font-size: 4rem; color: var(--accent-orange);">03</div>
                <h3>Impact</h3>
            </div>
        </div>
    </div>
</section>
```

---

## Animation

### Card Pop
```css
@keyframes cardPop {
    0% { transform: scale(0.95); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}
.card-pop {
    animation: cardPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
```

### Fade Up
```css
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
.fade-up {
    animation: fadeUp 0.6s ease-out forwards;
}
```

---

## Preset Variations

### Blue Variant
```css
--accent-orange: #2196F3;
--accent-coral: #64B5F6;
```

### Purple Variant
```css
--accent-orange: #9C27B0;
--accent-coral: #BA68C8;
```

### Green Variant
```css
--accent-orange: #4CAF50;
--accent-coral: #81C784;
```
