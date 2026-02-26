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

### 2. 选择「写长文」

1. 页面加载后，点击侧边栏的「写长文」(ref=e1117)
2. 点击「新的创作」按钮

### 3. 输入内容

1. 点击标题输入框(ref=e229)，输入标题
2. 点击正文区域(ref=e234)，输入正文内容

### 4. 一键排版

1. 点击「一键排版」按钮(ref=e236)
2. 在模板列表中选择一个模板（如第一个）
3. 点击「下一步」按钮

### 5. 发布

1. 在发布页面确认内容
2. 点击「发布」按钮(ref=e1101)

---

## 页面元素参考（实测）

| 步骤 | 元素 | ref |
|------|------|-----|
| 写长文 | 按钮 | e1117 |
| 新的创作 | 按钮 | e148 |
| 标题输入 | textbox | e229 |
| 正文区域 | paragraph | e234 |
| 一键排版 | 按钮 | e236 |
| 模板选择 | 按钮 | e356 |
| 下一步 | 按钮 | e530 |
| 发布 | 按钮 | e1101 |

---

## 完整代码示例

```typescript
// 1. 打开发布页面
await browser.open({
    url: 'https://creator.xiaohongshu.com/publish/publish?source=official',
    profile: 'openclaw'
})

// 2. 等待页面加载，获取快照
const snapshot = await browser.snapshot()

// 3. 点击「写长文」
await browser.act({ kind: 'click', ref: 'e1117' })

// 4. 点击「新的创作」
await browser.act({ kind: 'click', ref: 'e148' })

// 5. 输入标题
await browser.act({ 
    kind: 'type', 
    ref: 'e229', 
    text: articleTitle 
})

// 6. 输入正文
await browser.act({ 
    kind: 'type', 
    ref: 'e234', 
    text: articleContent 
})

// 7. 一键排版
await browser.act({ kind: 'click', ref: 'e236' })

// 8. 选择模板
await browser.act({ kind: 'click', ref: 'e356' })

// 9. 下一步
await browser.act({ kind: 'click', ref: 'e530' })

// 10. 发布
await browser.act({ kind: 'click', ref: 'e1101' })
```

---

## 注意事项

1. **浏览器使用 OpenClaw 内置浏览器** (`profile: 'openclaw'`)
2. **元素 ref 可能变化**，建议每次获取快照确认
3. **发布成功后**可以进入「笔记管理」确认
4. **长文支持千字**，适合深度内容

---

## 验证发布成功

发布成功后，页面会回到创作首页，草稿箱数量可能会增加或减少。

---

## 相关文件

- 文章目录：`~/my-mind/articles/published/`
- 图片目录：`~/my-mind/assets/images/`
