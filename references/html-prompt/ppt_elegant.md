# PPT 模板 - 暗雅

高端优雅的暗色风格幻灯片。

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

- 深灰/黑色背景
- 渐变标题
- 衬线字体
- 优雅高端

## 字体

- 标题：Playfair Display (700)
- 正文：Lato (300/400)

## 颜色

```css
:root {
    --bg-primary: #1a1a1a;
    --text-primary: #f0f0f0;
    --text-secondary: #a0a0a0;
    --accent: #c9a227;
}
```

## 特色元素

- 渐变标题
- 金色点缀
- 优雅衬线
- 高级感
