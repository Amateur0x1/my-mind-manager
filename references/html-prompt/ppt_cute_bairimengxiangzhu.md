# PPT 模板 - 转码经历分享（粉彩卡片版）

可爱粉彩风格的卡片式 PPT，适合故事分享、个人经历讲述。

---

## 模板概述

- **风格**：可爱粉彩卡片式
- **比例**：每张卡片 60vh × 80vh（3:4）
- **数量**：8 张卡片（可根据内容增减）
- **适用场景**：个人经历分享、转码故事、成长记录

---

## ⚠️ 重要：内容长度限制

每张卡片内容必须严格控制，否则会溢出！

| 卡片类型 | 最大内容 |
|---------|----------|
| 封面标题卡 | 1 标题 + 1 副标题（50字内） |
| 章节过渡卡 | 1 章节名 + 1 简短引言 |
| 详情卡 | 1 标题 + 3-4 个列表项 或 2-3 段话 |
| 总结卡 | 1 标题 + 3-4 个要点 |

**经验：每张卡片内容不超过 80 字。**

---

## 固定 CSS 样式

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Nunito:wght@400;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
            --pastel-pink: #ffb5c5;
            --pastel-lavender: #c5b4e3;
            --pastel-mint: #b5ead7;
            --text-primary: #5a5a6e;
            --text-secondary: #8b8b9e;
            --text-dark: #3a3a4e;
            --shadow-soft: 0 8px 30px rgba(255, 181, 197, 0.2);
            --shadow-card: 0 16px 48px rgba(0, 0, 0, 0.08);
            --radius-large: 2.2vh;
            --radius-inner: 1.5vh;
            --bg-page: #fdf6f8;
            --bg-card-mat: #ffffff;
        }

        body {
            font-family: 'Plus Jakarta Sans', 'Nunito', 'Noto Sans SC', sans-serif;
            background: var(--bg-page);
            color: var(--text-primary);
            line-height: 1.8;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2.5vh 0;
        }

        .cards-deck {
            width: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5vh;
        }

        .card-slot {
            width: 60vh;
            height: 80vh;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }

        .card {
            width: 60vh;
            height: 80vh;
            border-radius: var(--radius-large);
            box-shadow: var(--shadow-card);
            overflow: hidden;
            position: relative;
            padding: 4vh;
            background:
                repeating-linear-gradient(90deg, transparent 0, transparent 2.8vh, rgba(255, 255, 255, 0.25) 2.8vh, rgba(255, 255, 255, 0.25) 3vh),
                repeating-linear-gradient(-35deg, transparent 0, transparent 4vh, rgba(255, 255, 255, 0.12) 4vh, rgba(255, 255, 255, 0.12) 4.3vh),
                linear-gradient(145deg, #fad0d8 0%, #fce4ec 35%, #f5e6f8 70%, #fef0f5 100%);
        }

        .card-mat {
            width: 100%;
            height: 100%;
            background: var(--bg-card-mat);
            border-radius: var(--radius-inner);
            box-shadow: inset 0 2px 12px rgba(0, 0, 0, 0.04);
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .card-inner {
            flex: 1;
            padding: 3.5vh 3vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        /* 封面卡 */
        .card.cover .card-inner {
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .card.cover h1 {
            font-size: clamp(22px, 4vh, 32px);
            font-weight: 800;
            line-height: 1.25;
            background: linear-gradient(135deg, var(--pastel-pink), var(--pastel-lavender));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1.5vh;
        }

        .card.cover .lead {
            font-size: clamp(13px, 1.8vh, 16px);
            color: var(--text-secondary);
            max-width: 95%;
        }

        /* 内容卡 */
        .card:not(.cover) h2 {
            font-size: clamp(18px, 2.8vh, 24px);
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 1.4vh;
            padding-bottom: 0.8vh;
            border-bottom: 3px solid var(--pastel-lavender);
        }

        .card:not(.cover) h3 {
            font-size: clamp(15px, 2vh, 18px);
            font-weight: 600;
            color: var(--pastel-lavender);
            margin: 1.2vh 0 0.6vh;
        }

        .card:not(.cover) p {
            margin-bottom: 0.8vh;
            color: var(--text-primary);
            font-size: clamp(13px, 1.6vh, 15px);
        }

        .card:not(.cover) ul {
            margin: 0.6vh 0 1vh 1.5vh;
        }

        .card:not(.cover) li {
            margin-bottom: 0.5vh;
            color: var(--text-secondary);
            font-size: clamp(12px, 1.5vh, 14px);
        }

        .card strong {
            color: var(--text-dark);
            font-weight: 600;
        }

        .card code {
            background: rgba(197, 180, 227, 0.25);
            padding: 0.2em 0.5em;
            border-radius: 8px;
            font-size: 0.9em;
            color: #6b5b95;
        }
    </style>
</head>
<body>
    <div class="cards-deck">
        <!-- 卡片内容 -->
    </div>
</body>
</html>
```

---

## 模板内容结构

### 卡片 1：封面（必须）
```html
<div class="card-slot">
    <div class="card cover">
        <div class="card-mat">
            <div class="card-inner">
                <h1>文科生纯自学转码，一年拿到大厂 SSP（全经历纪实）</h1>
                <p class="lead">笔者的转码之路的一些分享</p>
            </div>
        </div>
    </div>
</div>
```

### 卡片 2：背景/引言
```html
<div class="card-slot">
    <div class="card">
        <div class="card-mat">
            <div class="card-inner">
                <h2>背景介绍</h2>
                <p>在研二的时候突发奇想做了转码的决定...</p>
                <p>虽然过程走了很多弯路，但最终上岸某大厂。</p>
            </div>
        </div>
    </div>
</div>
```

### 卡片 3-6：主体内容（根据故事发展）
```html
<div class="card-slot">
    <div class="card">
        <div class="card-mat">
            <div class="card-inner">
                <h2>第一阶段：无头苍蝇</h2>
                <h3>7月-10月</h3>
                <ul>
                    <li>Python：两周，没学好</li>
                    <li>Java：三周，会部署后端</li>
                    <li>HTML/CSS/JS：两周</li>
                    <li>算法：两周，很痛苦</li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

### 卡片 7：总结/感悟
```html
<div class="card-slot">
    <div class="card">
        <div class="card-mat">
            <div class="card-inner">
                <h2>总结与反思</h2>
                <p>最重要的是那个没做完的读书会项目...</p>
                <p>想跟文科生朋友说：别被沉没成本吓住。</p>
            </div>
        </div>
    </div>
</div>
```

### 卡片 8：结尾/感谢
```html
<div class="card-slot">
    <div class="card cover">
        <div class="card-mat">
            <div class="card-inner">
                <h1>谢谢观看</h1>
                <p class="lead">欢迎交流讨论</p>
            </div>
        </div>
    </div>
</div>
```

---

## 填写指南

### 每张卡片内容规则

1. **封面卡**
   - 标题：简短有力，不超过 20 字
   - 副标题：补充说明，不超过 30 字

2. **章节卡**
   - 章节名：清晰表达主题
   - 可加简短引言（30 字内）

3. **详情卡**
   - 标题：章节/主题名
   - 内容：3-4 个列表项 OR 2-3 段话
   - 每项/每段不超过 30 字

4. **总结卡**
   - 核心要点：3-4 个
   - 每点不超过 20 字

### 避免内容溢出的技巧

- 使用列表代替长段落
- 重要信息放前面
- 细节可用"..."省略
- 考虑拆分成多张卡片

---

## 示例：8 张卡片结构

| 卡片 | 类型 | 内容建议 |
|------|------|----------|
| 1 | 封面 | 标题 + 一句话介绍 |
| 2 | 背景 | 为什么转码 + 目标 |
| 3 | 第一阶段 | 学习历程概述 |
| 4 | 第二阶段 | 关键转折点 |
| 5 | 第三阶段 | 努力与收获 |
| 6 | 第四阶段 | 面试与offer |
| 7 | 总结 | 经验教训 + 建议 |
| 8 | 结尾 | 感谢 + 联系方式 |

---

## 使用方法

1. 复制上面的 HTML 模板
2. 替换卡片内容（严格按照字数限制）
3. 保存为 .html 文件
4. 用浏览器打开即可查看效果
