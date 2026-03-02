# Markdown 转 HTML 样式预设

本文档提供多种 HTML 样式风格，用于将 Markdown 转换为漂亮的 HTML 页面。

---

## 使用方式

1. 选择一种风格
2. 使用对应的 HTML 模板
3. 将 Markdown 内容填充到模板中

---

## 风格预览

### 1. Neon Cyber（赛博朋克）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Rajdhani', sans-serif; 
            background: #0a0a0f; 
            color: #00fff2; 
            line-height: 1.8;
        }
        .container { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
        h1 { 
            font-family: 'Orbitron', sans-serif; 
            font-size: 3rem; 
            color: #ff00ff; 
            text-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff;
            margin-bottom: 2rem;
            border-bottom: 2px solid #00fff2;
            padding-bottom: 1rem;
        }
        h2 { 
            font-family: 'Orbitron', sans-serif; 
            color: #00fff2; 
            margin: 2rem 0 1rem;
            font-size: 1.8rem;
        }
        h3 { color: #ff00ff; margin: 1.5rem 0 0.5rem; }
        p { margin: 1rem 0; color: #e0e0e0; }
        code { 
            background: #1a1a2e; 
            color: #00fff2; 
            padding: 0.2em 0.5em; 
            border-radius: 4px;
            font-family: 'Fira Code', monospace;
        }
        pre { 
            background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%); 
            border: 1px solid #00fff2;
            border-radius: 8px;
            padding: 1.5rem;
            overflow-x: auto;
            margin: 1.5rem 0;
        }
        pre code { background: none; color: #00ff88; }
        ul, ol { margin: 1rem 0; padding-left: 2rem; color: #e0e0e0; }
        li { margin: 0.5rem 0; }
        li::marker { color: #ff00ff; }
        blockquote { 
            border-left: 4px solid #ff00ff; 
            padding-left: 1.5rem; 
            margin: 1.5rem 0;
            color: #888;
            font-style: italic;
        }
        a { color: #00fff2; text-decoration: none; }
        a:hover { color: #ff00ff; text-shadow: 0 0 10px #ff00ff; }
        hr { border: none; border-top: 1px solid #333; margin: 2rem 0; }
        strong { color: #ff00ff; }
        em { color: #00ff88; }
    </style>
</head>
<body>
    <div class="container">
        <!-- 内容放在这里 -->
    </div>
</body>
</html>
```

---

### 2. Paper & Ink（纸墨风格）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Noto Sans SC', sans-serif; 
            background: #f5f2eb; 
            color: #2c2c2c; 
            line-height: 2;
        }
        .container { max-width: 720px; margin: 0 auto; padding: 4rem 2rem; }
        .paper {
            background: #fff;
            padding: 3rem 4rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border-radius: 2px;
        }
        h1 { 
            font-family: 'Noto Serif SC', serif; 
            font-size: 2.2rem; 
            color: #1a1a1a;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #d4af37;
            text-align: center;
        }
        h2 { 
            font-family: 'Noto Serif SC', serif; 
            font-size: 1.6rem; 
            color: #1a1a1a;
            margin: 2.5rem 0 1rem;
        }
        h3 { font-size: 1.3rem; margin: 1.5rem 0 0.5rem; }
        p { margin: 1rem 0; text-align: justify; }
        code { 
            background: #f0ede6; 
            color: #8b4513; 
            padding: 0.15em 0.4em; 
            border-radius: 3px;
            font-family: 'SF Mono', monospace;
            font-size: 0.9em;
        }
        pre { 
            background: #2c2c2c; 
            color: #f5f2eb; 
            padding: 1.5rem; 
            border-radius: 4px;
            overflow-x: auto; 
            margin: 1.5rem 0;
            font-size: 0.9rem;
        }
        pre code { background: none; color: inherit; }
        ul, ol { margin: 1rem 0; padding-left: 1.5rem; }
        li { margin: 0.5rem 0; }
        blockquote { 
            border-left: 3px solid #d4af37; 
            padding-left: 1rem; 
            margin: 1.5rem 0;
            color: #666;
            font-style: italic;
        }
        a { color: #8b4513; text-decoration: underline; }
        hr { border: none; border-top: 1px solid #d4af37; margin: 2rem 0; opacity: 0.5; }
        strong { color: #1a1a1a; }
    </style>
</head>
<body>
    <div class="container">
        <div class="paper">
            <!-- 内容放在这里 -->
        </div>
    </div>
</body>
</html>
```

---

### 3. Swiss Modern（现代瑞士）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary: #ff3b30;
            --black: #000;
            --gray: #666;
            --light-gray: #f5f5f5;
        }
        body { 
            font-family: 'Inter', sans-serif; 
            background: #fff; 
            color: var(--black); 
            line-height: 1.6;
        }
        .container { max-width: 900px; margin: 0 auto; padding: 6rem 3rem; }
        h1 { 
            font-weight: 800; 
            font-size: 4rem; 
            letter-spacing: -0.03em;
            margin-bottom: 3rem;
            line-height: 1.1;
        }
        h2 { 
            font-weight: 600; 
            font-size: 2rem; 
            margin: 4rem 0 1.5rem;
            padding-top: 1rem;
            border-top: 4px solid var(--black);
        }
        h3 { font-weight: 600; font-size: 1.3rem; margin: 2rem 0 0.5rem; }
        p { margin: 1.2rem 0; font-size: 1.1rem; font-weight: 300; }
        code { 
            background: var(--light-gray); 
            padding: 0.2em 0.4em; 
            border-radius: 4px;
            font-family: 'SF Mono', monospace;
            font-size: 0.9em;
        }
        pre { 
            background: var(--black); 
            color: #fff; 
            padding: 1.5rem; 
            border-radius: 0;
            overflow-x: auto; 
            margin: 2rem 0;
        }
        pre code { background: none; color: inherit; }
        ul, ol { margin: 1rem 0; padding-left: 1.5rem; }
        li { margin: 0.8rem 0; font-weight: 300; }
        blockquote { 
            border-left: 4px solid var(--primary); 
            padding-left: 1.5rem; 
            margin: 2rem 0;
            font-size: 1.2rem;
            color: var(--gray);
        }
        a { color: var(--black); text-decoration: underline; text-decoration-color: var(--primary); }
        hr { border: none; border-top: 1px solid var(--light-gray); margin: 3rem 0; }
        strong { font-weight: 600; }
    </style>
</head>
<body>
    <div class="container">
        <!-- 内容放在这里 -->
    </div>
</body>
</html>
```

---

### 4. Soft Pastel（柔和粉彩）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --pink: #ffb5c5;
            --lavender: #c5b4e3;
            --mint: #b5ead7;
            --peach: #ffdac1;
        }
        body { 
            font-family: 'Nunito', 'Noto Sans SC', sans-serif; 
            background: linear-gradient(135deg, #fdfbf7 0%, #fff5f8 100%); 
            color: #4a4a4a; 
            line-height: 1.8;
        }
        .container { max-width: 750px; margin: 0 auto; padding: 4rem 2rem; }
        .card {
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 3rem;
            box-shadow: 0 8px 32px rgba(255,181,197,0.2);
        }
        h1 { 
            font-size: 2.5rem; 
            background: linear-gradient(135deg, #ffb5c5, #c5b4e3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 2rem;
            font-weight: 700;
        }
        h2 { 
            color: #8b7b8b; 
            font-size: 1.6rem; 
            margin: 2.5rem 0 1rem;
            font-weight: 600;
        }
        h3 { color: #b5ead7; margin: 1.5rem 0 0.5rem; }
        p { margin: 1rem 0; }
        code { 
            background: var(--mint); 
            color: #5a8a7a; 
            padding: 0.2em 0.5em; 
            border-radius: 8px;
            font-family: monospace;
        }
        pre { 
            background: #2d2d3a; 
            color: #e8e8e8; 
            padding: 1.5rem; 
            border-radius: 16px;
            overflow-x: auto; 
            margin: 1.5rem 0;
        }
        pre code { background: none; color: var(--mint); }
        ul, ol { margin: 1rem 0; padding-left: 1.5rem; }
        li { margin: 0.6rem 0; }
        li::marker { color: var(--pink); }
        blockquote { 
            background: linear-gradient(135deg, rgba(197,180,227,0.2), rgba(255,181,197,0.2));
            border-radius: 16px;
            padding: 1.5rem; 
            margin: 1.5rem 0;
            color: #8b7b8b;
        }
        a { color: #c5b4e3; text-decoration: none; font-weight: 500; }
        a:hover { color: var(--pink); }
        hr { border: none; height: 1px; background: linear-gradient(90deg, var(--pink), var(--lavender), var(--mint)); margin: 2rem 0; }
        strong { color: #ff8fa3; }
        em { color: var(--lavender); }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <!-- 内容放在这里 -->
        </div>
    </div>
</body>
</html>
```

---

### 5. Terminal Green（终端绿）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            background: #0d1117; 
            color: #39ff14; 
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
            line-height: 1.8;
            font-size: 14px;
        }
        .container { max-width: 800px; margin: 0 auto; padding: 2rem; }
        .cursor::after { content: '█'; animation: blink 1s infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        h1 { 
            color: #39ff14; 
            font-size: 2rem; 
            margin-bottom: 1.5rem;
            border-bottom: 1px dashed #39ff14;
            padding-bottom: 0.5rem;
        }
        h1::before { content: '# '; }
        h2 { color: #00ff00; margin: 2rem 0 1rem; font-size: 1.5rem; }
        h2::before { content: '## '; }
        h3 { color: #00cc00; margin: 1.5rem 0 0.5rem; }
        h3::before { content: '### '; }
        p { margin: 0.8rem 0; }
        code { 
            background: #161b22; 
            color: #39ff14; 
            padding: 0.2em 0.4em; 
            border-radius: 3px;
        }
        pre { 
            background: #161b22; 
            border: 1px solid #30363d;
            padding: 1rem; 
            border-radius: 6px;
            overflow-x: auto; 
            margin: 1rem 0;
        }
        pre code { background: none; }
        ul, ol { margin: 0.8rem 0; padding-left: 1.5rem; }
        li { margin: 0.4rem 0; }
        li::marker { color: #00ff00; }
        blockquote { 
            border-left: 3px solid #00ff00; 
            padding-left: 1rem; 
            margin: 1rem 0;
            color: #8b949e;
        }
        a { color: #58a6ff; text-decoration: none; }
        a:hover { text-decoration: underline; }
        hr { border: none; border-top: 1px solid #30363d; margin: 1.5rem 0; }
        strong { color: #ff6b6b; }
        em { color: #ffd93d; }
    </style>
</head>
<body>
    <div class="container">
        <p class="cursor">$ cat article.md</p>
        <!-- 内容放在这里 -->
    </div>
</body>
</html>
```

---

### 6. Midnight Executive（午夜Executive）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --gold: #c9a227;
            --dark: #0a0a0a;
            --text: #e5e5e5;
        }
        body { 
            font-family: 'Source Sans Pro', sans-serif; 
            background: var(--dark); 
            color: var(--text); 
            line-height: 1.8;
        }
        .container { max-width: 800px; margin: 0 auto; padding: 5rem 2rem; }
        .hero {
            text-align: center;
            padding: 3rem 0;
            border-bottom: 1px solid #333;
            margin-bottom: 3rem;
        }
        h1 { 
            font-family: 'Playfair Display', serif; 
            font-size: 3.5rem; 
            color: #fff;
            letter-spacing: 0.02em;
            margin-bottom: 1rem;
        }
        .subtitle {
            color: var(--gold);
            font-size: 1.1rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
        }
        h2 { 
            font-family: 'Playfair Display', serif; 
            font-size: 2rem; 
            color: var(--gold);
            margin: 3rem 0 1.5rem;
            padding-top: 1rem;
            border-top: 1px solid #333;
        }
        h3 { color: #fff; margin: 2rem 0 0.5rem; }
        p { margin: 1rem 0; color: #b0b0b0; font-weight: 300; }
        code { 
            background: #1a1a1a; 
            color: var(--gold); 
            padding: 0.2em 0.5em; 
            border-radius: 4px;
            font-family: monospace;
        }
        pre { 
            background: #111; 
            border-left: 3px solid var(--gold);
            padding: 1.5rem; 
            overflow-x: auto; 
            margin: 1.5rem 0;
        }
        pre code { background: none; color: #e5e5e5; }
        ul, ol { margin: 1rem 0; padding-left: 1.5rem; }
        li { margin: 0.6rem 0; color: #b0b0b0; }
        blockquote { 
            border-left: 3px solid var(--gold); 
            padding: 1rem 1.5rem; 
            margin: 2rem 0;
            background: rgba(201,162,39,0.1);
            font-style: italic;
        }
        a { color: var(--gold); text-decoration: none; }
        a:hover { color: #fff; }
        hr { border: none; border-top: 1px solid #333; margin: 3rem 0; }
        strong { color: #fff; }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>标题</h1>
            <div class="subtitle">Executive Summary</div>
        </div>
        <!-- 内容放在这里 -->
    </div>
</body>
</html>
```

---

## 快速使用

```bash
# 查看所有风格
./scripts/md2html.sh --styles

# 使用指定风格转换
./scripts/md2html.sh --style neon input.md
./scripts/md2html.sh --style paper input.md
./scripts/md2html.sh --style swiss input.md
./scripts/md2html.sh --style pastel input.md
./scripts/md2html.sh --style terminal input.md
./scripts/md2html.sh --style executive input.md
```

风格选项：
- `--style neon` → 赛博朋克
- `--style paper` → 纸墨风格
- `--style swiss` → 现代瑞士
- `--style pastel` → 柔和粉彩
- `--style terminal` → 终端绿
- `--style executive` → 午夜Executive
