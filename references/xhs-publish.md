# 小红书长文发布指南

使用 OpenClaw 浏览器自动化发布长文笔记到小红书。

---

## 使用场景

用户想在小红书发布长文笔记时使用。

---

## 发布流程

### 1. 进入发布页面

浏览器打开：
```
https://creator.xiaohongshu.com/publish/publish?source=official
```

或从首页点击「发布笔记」→「写长文」

### 2. 选择「写长文」

1. 点击侧边栏的「写长文」
2. 点击「新的创作」

### 3. 输入内容

1. 点击标题输入框，输入标题
2. 点击正文区域，输入正文内容（可以分多次输入）

### 4. 一键排版

点击「一键排版」按钮

### 5. 选择模板

1. 在右侧选择模板（第一个「简约基础」即可）
2. 选择后点击「下一步」

### 6. 发布

在发布页面确认内容，点击「发布」按钮

---

## 代码示例

```typescript
// 1. 打开发布页面
await browser.open({
    url: 'https://creator.xiaohongshu.com/publish/publish?source=official',
    profile: 'openclaw'
})

// 2. 获取快照
const snapshot = await browser.snapshot()

// 3. 点击「写长文」(如果需要)
// 从首页: e28 -> 选择写长文

// 4. 输入标题
await browser.act({
    kind: 'type',
    ref: 'title-input', // 根据实际元素调整
    text: articleTitle
})

// 5. 输入正文
await browser.act({
    kind: 'type',
    ref: 'content-input', // 根据实际元素调整
    text: articleContent
})

// 6. 一键排版
await browser.act({
    kind: 'click',
    ref: 'auto-format-btn'
})

// 7. 选择模板
await browser.act({
    kind: 'click',
    ref: 'template-1'
})

// 8. 下一步
await browser.act({
    kind: 'click',
    ref: 'next-btn'
})

// 9. 发布
await browser.act({
    kind: 'click',
    ref: 'publish-btn'
})
```

---

## 页面元素参考

| 功能 | 说明 |
|------|------|
| 写长文 | 从首页点击「发布笔记」后选择 |
| 新的创作 | 按钮，用于创建新文章 |
| 标题输入框 | textbox，placeholder 为"输入标题" |
| 正文区域 | 点击后进入编辑模式 |
| 一键排版 | 按钮，位于标题下方 |
| 简约基础 | 第一个模板选项 |
| 下一步 | 选择模板后点击 |
| 发布 | 最终发布按钮 |

---

## 注意事项

1. **浏览器使用 OpenClaw 内置浏览器** (`profile: 'openclaw'`)
2. **如果页面元素有变化**，根据实际情况调整
3. **发布成功后**可以进入「笔记管理」确认
4. **长文支持千字**，适合深度内容

---

## 相关文件

- 文章目录：`~/my-mind/articles/published/`
- 图片目录：`~/my-mind/assets/images/`
