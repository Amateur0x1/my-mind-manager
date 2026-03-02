# PPT 模板 - 可爱粉彩

甜美梦幻的粉彩风格幻灯片。

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

- 粉紫渐变背景
- 柔和圆角
- 甜美配色
- 圆润字体

## 字体

- 标题：Nunito Bold (700)
- 正文：Nunito Regular (400/500)

## 颜色

```css
:root {
    --bg-primary: linear-gradient(135deg, #fff5f7, #f5f0ff);
    --text-primary: #5a5a6e;
    --accent-pink: #ff9a9e;
    --accent-purple: #a78bfa;
    --accent-mint: #b5ead7;
}
```

## 特色元素

- 渐变背景
- 圆角按钮
- 粉色点缀
- 柔和阴影
