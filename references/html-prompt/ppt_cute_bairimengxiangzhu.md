# PPT 模板 - 转码经历分享（粉彩卡片版）

可爱粉彩风格的卡片式 PPT，适合故事分享、个人经历讲述。

---

## 模板概述

- **风格**：可爱粉彩卡片式
- **卡片尺寸**：固定 1080×1440 (3:4)
- **字体大小**：固定 px，不缩放
- **数量**：8 张（可根据内容增减）

---

## ⚠️ 重要：内容长度限制

**每张卡片内容必须严格控制！**

| 卡片类型 | 最大内容 |
|---------|----------|
| 封面标题卡 | 标题 15 字内 + 副标题 25 字内 |
| 章节过渡卡 | 章节名 12 字 + 引言 30 字 |
| 详情卡 | 标题 12 字 + 4 个列表项（每项 15 字内）|
| 总结卡 | 标题 10 字 + 3 个要点（每点 12 字内）|

**经验法则：每张卡片总字数 50-80 字最佳。**

---

## 固定 CSS 样式（重要！）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>标题</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Nunito:wght@400;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        /* 固定尺寸，不缩放 */
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
            /* 固定颜色变量 */
            --pastel-pink: #ffb5c5;
            --pastel-lavender: #c5b4e3;
            --pastel-mint: #b5ead7;
            --pastel-peach: #ffdac1;
            --text-primary: #5a5a6e;
            --text-secondary: #8b8b9e;
            --text-dark: #3a3a4e;
            --bg-page: #fdf6f8;
            --bg-card: #ffffff;
            --shadow-card: 0 16px 48px rgba(0, 0, 0, 0.08);
            --radius-large: 32px;
            --radius-inner: 24px;
        }

        /* 固定尺寸容器 */
        body {
            font-family: 'Plus Jakarta Sans', 'Nunito', 'Noto Sans SC', sans-serif;
            background: var(--bg-page);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 0;
        }

        /* 卡片插槽 - 固定尺寸 */
        .card-slot {
            width: 1080px;
            height: 1440px;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 40px;
        }

        /* 卡片 - 固定尺寸 */
        .card {
            width: 1080px;
            height: 1440px;
            border-radius: var(--radius-large);
            box-shadow: var(--shadow-card);
            overflow: hidden;
            position: relative;
            padding: 80px;
            background:
                repeating-linear-gradient(90deg, transparent 0, transparent 50px, rgba(255, 255, 255, 0.25) 50px, rgba(255, 255, 255, 0.25) 54px),
                repeating-linear-gradient(-35deg, transparent 0, transparent 70px, rgba(255, 255, 255, 0.12) 70px, rgba(255, 255, 255, 0.12) 76px),
                linear-gradient(145deg, #fad0d8 0%, #fce4ec 35%, #f5e6f8 70%, #fef0f5 100%);
        }

        /* 卡片内文 - 固定内边距 */
        .card-mat {
            width: 100%;
            height: 100%;
            background: var(--bg-card);
            border-radius: var(--radius-inner);
            box-shadow: inset 0 4px 20px rgba(0, 0, 0, 0.04);
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .card-inner {
            flex: 1;
            padding: 60px 50px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        /* ========== 固定字体大小 ========== */
        
        /* 封面卡 */
        .card.cover .card-inner {
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        /* 封面标题 - 72px */
        .card.cover h1 {
            font-size: 72px;
            font-weight: 800;
            line-height: 1.2;
            background: linear-gradient(135deg, var(--pastel-pink), var(--pastel-lavender));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 24px;
            max-width: 90%;
        }

        /* 封面副标题 - 32px */
        .card.cover .lead {
            font-size: 32px;
            color: var(--text-secondary);
            max-width: 80%;
        }

        /* 内容卡标题 - 48px */
        .card:not(.cover) h2 {
            font-size: 48px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 24px;
            padding-bottom: 16px;
            border-bottom: 6px solid var(--pastel-lavender);
        }

        /* 内容卡小标题 - 36px */
        .card:not(.cover) h3 {
            font-size: 36px;
            font-weight: 600;
            color: var(--pastel-lavender);
            margin: 24px 0 12px;
        }

        /* 内容卡段落 - 28px */
        .card:not(.cover) p {
            margin-bottom: 16px;
            color: var(--text-primary);
            font-size: 28px;
            line-height: 1.7;
        }

        /* 列表 - 28px */
        .card:not(.cover) ul {
            margin: 12px 0 24px 24px;
        }

        .card:not(.cover) li {
            margin-bottom: 12px;
            color: var(--text-secondary);
            font-size: 28px;
            line-height: 1.5;
        }

        .card strong {
            color: var(--text-dark);
            font-weight: 600;
        }

        .card code {
            background: rgba(197, 180, 227, 0.25);
            padding: 4px 10px;
            border-radius: 8px;
            font-size: 0.9em;
            color: #6b5b95;
        }
    </style>
</head>
<body>
    <!-- 卡片内容 -->
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
                <h1>文科生纯自学转码，一年拿到大厂 SSP</h1>
                <p class="lead">笔者的转码之路分享</p>
            </div>
        </div>
    </div>
</div>
```

### 卡片 2：背景介绍
```html
<div class="card-slot">
    <div class="card">
        <div class="card-mat">
            <div class="card-inner">
                <h2>背景介绍</h2>
                <p>研二时突发奇想，决定转码...</p>
                <p>虽然过程艰难，但最终成功上岸。</p>
            </div>
        </div>
    </div>
</div>
```

### 卡片 3-6：主体内容
```html
<div class="card-slot">
    <div class="card">
        <div class="card-mat">
            <div class="card-inner">
                <h2>第一阶段：无头苍蝇</h2>
                <h3>7月-10月</h3>
                <ul>
                    <li>Python：两周，没学好</li>
                    <li>Java：三周，会部署</li>
                    <li>前端：两周入门</li>
                    <li>算法：两周，很痛苦</li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

### 卡片 7：总结
```html
<div class="card-slot">
    <div class="card">
        <div class="card-mat">
            <div class="card-inner">
                <h2>总结与反思</h2>
                <p>最重要的那个没做完的...</p>
                <p>想跟文科生说：别怕！</p>
            </div>
        </div>
    </div>
</div>
```

### 卡片 8：结尾
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

### 固定字体大小

| 元素 | 字号 |
|------|------|
| 封面标题 | 72px |
| 封面副标题 | 32px |
| 内容标题 | 48px |
| 小标题 | 36px |
| 正文/列表 | 28px |

### 内容控制技巧

1. **标题**：越短越好，不超过 15 字
2. **列表**：每项不超过 15 字，最多 4 项
3. **段落**：每段不超过 2 行
4. **总字数**：每张卡片 50-80 字最佳

### 避免问题

- ❌ 内容太少 → 空洞
- ❌ 内容太多 → 溢出
- ❌ 字体自动缩放 → 不统一
- ✅ 固定尺寸 + 固定字号 = 完美

---

## 8 张卡片结构建议

| 卡片 | 类型 | 内容建议 |
|------|------|----------|
| 1 | 封面 | 标题 + 一句话介绍 |
| 2 | 背景 | 为什么转码 + 目标 |
| 3 | 第一阶段 | 学习历程概览 |
| 4 | 第二阶段 | 关键转折点 |
| 5 | 第三阶段 | 努力与收获 |
| 6 | 第四阶段 | 面试与offer |
| 7 | 总结 | 经验教训+建议 |
| 8 | 结尾 | 感谢 + 联系方式 |
