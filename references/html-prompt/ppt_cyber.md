# PPT 模板 - 赛博朋克

未来科技感的霓虹风格幻灯片。

## 格式规则

```
# 标题 = 新幻灯片
## 二级标题 = 内容标题
### 三级标题 = 小标题
其他内容 = 幻灯片内容
```

## ⚠️ 重要：内容密度限制

每张幻灯片内容不能太多，否则会溢出屏幕。

| 幻灯片类型 | 最大内容 |
|-----------|---------|
| 标题页 | 1 标题 + 1 副标题 |
| 内容页 | 1 标题 + 4-6 个列表项 |

**内容太多？请拆分到多张幻灯片。禁止滚动。**

## 必须的 CSS 基础样式

```css
/* 视口适配 - 必需 */
html, body {
    height: 100%;
    overflow: hidden;
}
.slide {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
```

## 视觉特点

- 深色背景 (#0a0a0f)
- 霓虹紫 (#ff00ff) + 青色 (#00fff2)
- 发光效果文字
- 科技感字体

## 字体

- 标题：Orbitron (700)
- 正文：Rajdhani (400/500)

## 颜色

```css
:root {
    --bg-primary: #0a0a0f;
    --text-primary: #00fff2;
    --text-secondary: #e0e0e0;
    --accent: #ff00ff;
    --accent-2: #00ff88;
}
```

## 特色元素

- 霓虹发光效果
- 渐变边框
- 科技感图标
