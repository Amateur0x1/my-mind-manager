# PPT Template - Neon Cyber

Futuristic, techy, confident. Inspired by cyberpunk aesthetics with neon glow effects.

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
| Code slide | 1 heading + 8-10 lines |
| Image slide | 1 heading + 1 image |

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

- **Display Font:** Orbitron (700/800) - Google Fonts
- **Body Font:** Rajdhani (400/500) - Google Fonts
- **Mono Font:** Fira Code (400) - for code

---

## Color Palette

```css
:root {
    /* Primary Colors */
    --bg-primary: #0a0a0f;
    --bg-secondary: #12121a;
    --bg-card: #1a1a2e;
    
    /* Neon Accents */
    --neon-magenta: #ff00ff;
    --neon-cyan: #00fff2;
    --neon-green: #00ff88;
    --neon-pink: #ff0080;
    
    /* Text */
    --text-primary: #00fff2;
    --text-secondary: #e0e0e0;
    --text-muted: #666680;
    
    /* Effects */
    --glow-magenta: 0 0 20px #ff00ff, 0 0 40px #ff00ff;
    --glow-cyan: 0 0 20px #00fff2, 0 0 40px #00fff2;
}
```

---

## Signature Elements

### Neon Glow Text
```css
.glow-text {
    color: var(--neon-magenta);
    text-shadow: var(--glow-magenta);
}
```

### Gradient Border
```css
.gradient-border {
    border: 2px solid transparent;
    background: linear-gradient(var(--bg-card), var(--bg-card)) padding-box,
                linear-gradient(135deg, var(--neon-magenta), var(--neon-cyan)) border-box;
}
```

### Grid Background
```css
.grid-bg {
    background-image: 
        linear-gradient(rgba(0, 255, 242, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 242, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
}
```

### Scan Lines Effect
```css
.scanlines::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.1) 2px,
        rgba(0, 0, 0, 0.1) 4px
    );
    pointer-events: none;
}
```

---

## Layout Examples

### Title Slide
```html
<section class="slide">
    <div class="slide-content" style="text-align: center;">
        <h1 style="font-family: 'Orbitron'; color: var(--neon-magenta); text-shadow: var(--glow-magenta);">
            FUTURE IS NOW
        </h1>
        <p style="color: var(--text-secondary); margin-top: 1rem;">
            Building the Next Generation
        </p>
    </div>
</section>
```

### Content Slide
```html
<section class="slide">
    <div class="slide-content">
        <h2>Key Features</h2>
        <ul style="list-style: none; padding: 0;">
            <li style="color: var(--neon-cyan);">▸ Real-time Processing</li>
            <li style="color: var(--neon-magenta);">▸ AI Powered</li>
            <li style="color: var(--neon-green);">▸ Cloud Native</li>
        </ul>
    </div>
</section>
```

---

## Animation Effects

### Fade In
```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-in {
    animation: fadeIn 0.5s ease forwards;
}
```

### Glitch Effect (for titles)
```css
@keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
}
.glitch {
    animation: glitch 0.3s ease;
}
```

---

## Responsive Breakpoints

```css
@media (max-height: 700px) {
    :root { --title-size: clamp(1.5rem, 4vw, 2.5rem); }
}
@media (max-height: 600px) {
    .nav-dots { display: none; }
}
@media (max-width: 600px) {
    .slide-content { padding: 1rem; }
}
```

---

## Preset Variations

### Variant 1: Purple Haze
```css
--neon-magenta: #bf00ff;
--neon-cyan: #00ffff;
```

### Variant 2: Matrix Green
```css
--neon-magenta: #00ff00;
--neon-cyan: #00ff88;
```

### Variant 3: Sunset Neon
```css
--neon-magenta: #ff6b6b;
--neon-cyan: #ffd93d;
```
