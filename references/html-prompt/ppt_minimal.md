# PPT 模板 - 极简白

纯净的极简白色风格幻灯片。

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

- 纯白背景
- 黑色文字
- 大量留白
- 无衬线字体
- 大字号

## 字体

- 标题：Inter Bold (800)
- 正文：Inter Light (300)

## 颜色

```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #000000;
    --text-secondary: #666666;
    --accent: #ff3b30;
}
```

## 特色元素

- 简洁线条
- 大量留白
- 精准对齐
