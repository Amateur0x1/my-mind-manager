# Markdown 转 HTML 样式预设

本文档提供多种 HTML 样式风格，用于将 Markdown 转换为漂亮的 HTML 页面。

---

## 使用方式

1. 选择一种风格
2. 使用对应的 HTML 模板
3. 将 Markdown 内容填充到模板中

---

## 风格预览

### 1. PPT 幻灯片（默认 PPT 风格）

**特点**：全屏幻灯片，每张单独显示，键盘/滚动切换

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; overflow: hidden; }
        body {
            font-family: 'Noto Sans SC', sans-serif;
            background: #000;
            color: #fff;
        }
        .slides-container {
            height: 100vh;
            overflow: hidden;
            position: relative;
        }
        .slide {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4rem;
            text-align: center;
            opacity: 0;
            position: absolute;
            width: 100%;
            transition: opacity 0.5s ease;
        }
        .slide.active { opacity: 1; }
        .slide h1 { font-size: 4rem; margin-bottom: 2rem; }
        .slide h2 { font-size: 2.5rem; margin-bottom: 1.5rem; color: #ff6b6b; }
        .slide h3 { font-size: 1.8rem; margin-bottom: 1rem; }
        .slide p { font-size: 1.4rem; max-width: 800px; line-height: 1.8; color: #ccc; }
        .slide img { max-height: 60vh; object-fit: contain; }
        .slide ul, .slide ol { text-align: left; font-size: 1.3rem; }
        .slide li { margin: 0.8rem 0; }
        .slide code { background: #333; padding: 0.3em 0.6em; border-radius: 4px; }
        .slide pre { background: #1a1a1a; padding: 1.5rem; border-radius: 8px; text-align: left; overflow: auto; max-width: 90%; }
        /* 导航 */
        .nav-dots {
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 0.5rem;
            z-index: 100;
        }
        .nav-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #666;
            cursor: pointer;
            transition: all 0.3s;
        }
        .nav-dot.active { background: #fff; transform: scale(1.2); }
        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, #ff6b6b, #feca57);
            transition: width 0.3s;
            z-index: 100;
        }
        .slide-number {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            color: #666;
            font-size: 1rem;
            z-index: 100;
        }
        .hint {
            position: fixed;
            bottom: 2rem;
            left: 2rem;
            color: #444;
            font-size: 0.8rem;
            z-index: 100;
        }
    </style>
</head>
<body>
    <div class="progress-bar" id="progress"></div>
    <div class="slides-container" id="slides">
        <!-- 幻灯片内容 -->
    </div>
    <div class="nav-dots" id="dots"></div>
    <div class="slide-number" id="slideNumber">1 / 1</div>
    <div class="hint">← → 键切换 | 滚轮切换</div>
    <script>
        const slides = [
            { title: '标题', content: '<h1>标题</h1><p>副标题</p>' },
        ];
        // 渲染逻辑
    </script>
</body>
</html>
```

**特点**：
- 全屏幻灯片，每张占满屏幕
- 键盘左右箭头切换
- 滚轮切换
- 底部导航点
- 进度条
- 页码显示

---

### 2. Neon Cyber（赛博朋克）

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
        html, body { height: 100%; overflow: hidden; }
        body { 
            font-family: 'Rajdhani', sans-serif; 
            background: #0a0a0f; 
            color: #00fff2; 
        }
        .slides-container { height: 100vh; overflow: hidden; position: relative; }
        .slide {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4rem;
            text-align: center;
            opacity: 0;
            position: absolute;
            width: 100%;
            transition: opacity 0.5s ease;
        }
        .slide.active { opacity: 1; }
        .slide h1 { 
            font-family: 'Orbitron', sans-serif; 
            font-size: 4rem; 
            color: #ff00ff; 
            text-shadow: 0 0 30px #ff00ff;
            margin-bottom: 2rem;
        }
        .slide h2 { font-size: 2.5rem; margin-bottom: 1.5rem; color: #00fff2; }
        .slide p { font-size: 1.4rem; color: #e0e0e0; }
        .nav-dots { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; gap: 0.5rem; }
        .nav-dot { width: 10px; height: 10px; border-radius: 50%; background: #333; cursor: pointer; }
        .nav-dot.active { background: #ff00ff; box-shadow: 0 0 10px #ff00ff; }
    </style>
</head>
<body>
    <div class="slides-container" id="slides"></div>
    <div class="nav-dots" id="dots"></div>
    <script>
        // 脚本逻辑
    </script>
</body>
</html>
```

---

### 3. Minimal White（极简白）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; overflow: hidden; }
        body { font-family: 'Inter', sans-serif; background: #fff; color: #000; }
        .slides-container { height: 100vh; overflow: hidden; position: relative; }
        .slide {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4rem;
            text-align: center;
            opacity: 0;
            position: absolute;
            width: 100%;
            transition: opacity 0.4s ease;
        }
        .slide.active { opacity: 1; }
        .slide h1 { font-size: 3.5rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 1.5rem; }
        .slide h2 { font-size: 2rem; font-weight: 400; color: #666; margin-bottom: 1rem; }
        .slide p { font-size: 1.2rem; color: #888; max-width: 600px; line-height: 1.8; }
        .nav-dots { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; }
        .nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #ddd; }
        .nav-dot.active { background: #000; }
    </style>
</head>
<body>
    <div class="slides-container" id="slides"></div>
    <div class="nav-dots" id="dots"></div>
    <script>// 脚本</script>
</body>
</html>
```

---

### 4. Dark Elegant（暗雅）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; overflow: hidden; }
        body { font-family: 'Lato', sans-serif; background: #1a1a1a; color: #f0f0f0; }
        .slides-container { height: 100vh; overflow: hidden; position: relative; }
        .slide {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4rem;
            text-align: center;
            opacity: 0;
            position: absolute;
            width: 100%;
            transition: opacity 0.6s ease;
        }
        .slide.active { opacity: 1; }
        .slide h1 { 
            font-family: 'Playfair Display', serif; 
            font-size: 3.5rem; 
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #f0f0f0, #c0c0c0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .slide h2 { font-size: 1.8rem; color: #a0a0a0; font-weight: 300; }
        .slide p { font-size: 1.2rem; color: #808080; max-width: 700px; line-height: 1.8; }
    </style>
</head>
<body>
    <div class="slides-container" id="slides"></div>
    <script>// 脚本</script>
</body>
</html>
```

---

## 快速使用

```bash
# 查看所有风格
./scripts/md2html.sh --styles

# 使用指定风格转换
./scripts/md2html.sh input.md --style ppt
./scripts/md2html.sh input.md --style neon
./scripts/md2html.sh input.md --style minimal
./scripts/md2html.sh input.md --style elegant
```

风格选项：
- `--style ppt` → PPT 幻灯片（全屏切换）
- `--style neon` → 赛博朋克
- `--style minimal` → 极简白
- `--style elegant` → 暗雅

---

## PPT 模式说明

**转换规则**：
- `# 标题` → 新幻灯片（标题页）
- `## 二级标题` → 幻灯片标题
- 其他内容 → 幻灯片内容

**交互**：
- `←` `→` 箭头键切换
- 鼠标滚轮切换
- 点击底部导航点跳转
