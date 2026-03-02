# PPT 模板 - 简洁黑白

简洁现代的黑白风格幻灯片。

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
| 代码页 | 1 标题 + 8-10 行代码 |
| 图片页 | 1 标题 + 1 图片 |

**内容太多？请拆分到多张幻灯片。禁止滚动。**

## 必须的 CSS 基础样式

每个幻灯片必须包含：

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

- 黑色背景
- 白色文字
- 简洁现代
- 无衬线字体

## 字体

- 标题：Inter Bold (800)
- 正文：Inter Regular (400)

## 颜色

```css
:root {
    --bg-primary: #000000;
    --text-primary: #ffffff;
    --text-secondary: #888888;
    --accent: #ff6b6b;
}
```
