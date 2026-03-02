# PPT Template - Minimal White

Pure, clean, minimalist. Maximum whitespace with bold typography.

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

- **Display Font:** Inter (800/900) - Google Fonts
- **Body Font:** Inter (300/400) - Google Fonts
- **Accent:** Space Grotesk (500)

---

## Color Palette

```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #fafafa;
    
    --text-primary: #000000;
    --text-secondary: #666666;
    --text-tertiary: #999999;
    
    --accent: #000000;
    --line: #e0e0e0;
}
```

---

## Signature Elements

### Giant Typography
```css
.minimal-title {
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    font-size: clamp(3rem, 12vw, 10rem);
    letter-spacing: -0.04em;
    line-height: 0.85;
}
```

### Thin Line Separator
```css
.thin-line {
    width: 100px;
    height: 2px;
    background: var(--accent);
}
```

### Minimal List
```css
.minimal-list li {
    font-size: 1.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--line);
}
.minimal-list li:last-child {
    border-bottom: none;
}
```

### Huge Number
```css
.minimal-number {
    font-size: 8rem;
    font-weight: 900;
    color: var(--text-tertiary);
    line-height: 1;
}
```

---

## Layout Examples

### Title Slide
```html
<section class="slide">
    <div class="slide-content" style="justify-content: center; align-items: flex-start; padding-left: 10%;">
        <h1 class="minimal-title">LESS<br>IS<br>MORE</h1>
        <div class="thin-line" style="margin-top: 3rem;"></div>
        <p style="margin-top: 1rem; font-size: 1.25rem; color: var(--text-secondary);">
            Design Principles
        </p>
    </div>
</section>
```

### Content Slide
```html
<section class="slide">
    <div class="slide-content">
        <h2 style="font-size: 2rem; margin-bottom: 2rem;">Key Points</h2>
        <ul class="minimal-list">
            <li>Clarity over complexity</li>
            <li>Space creates meaning</li>
            <li>Every element must have purpose</li>
            <li>White space is not empty</li>
        </ul>
    </div>
</section>
```

### Numbered List
```html
<section class="slide">
    <div class="slide-content" style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; align-items: start;">
        <div class="minimal-number">01</div>
        <div>
            <h2>Purpose</h2>
            <p style="color: var(--text-secondary); margin-top: 1rem;">
                Every design decision should serve a clear purpose.
            </p>
        </div>
    </div>
</section>
```

---

## Animation

### Subtle Fade
```css
@keyframes minimalFade {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.fade-in {
    animation: minimalFade 0.8s ease-out forwards;
}
```

---

## Preset Variations

### Dark Mode
```css
--bg-primary: #0a0a0a;
--text-primary: #ffffff;
--text-secondary: #888888;
--accent: #ffffff;
```

### Warm
```css
--bg-primary: #faf8f5;
--text-primary: #1a1a1a;
```

### High Contrast
```css
--bg-primary: #000000;
--accent: #ff0000;
```
