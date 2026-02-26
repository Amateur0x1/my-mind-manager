# 小红书发布指南

使用浏览器自动化发布文章到小红书。

---

## 前提条件

### 1. 浏览器登录

首次使用需要：
1. 打开小红书创作服务平台：https://creator.xiaohongshu.com/new/home
2. 使用账号密码登录
3. 保持登录状态（Cookie 会话）

### 2. OpenClaw 浏览器

使用 OpenClaw 内置浏览器：
```typescript
await browser.open({
    url: 'https://creator.xiaohongshu.com/new/home',
    profile: 'openclaw'
})
```

---

## 平台页面结构

### 首页 (`/new/home`)

**左侧导航栏**：
| 元素 | ref |
|------|-----|
| 首页 | e37 |
| 笔记管理 | e44 |
| 数据看板 | e47 |
| 活动中心 | e65 |
| 笔记灵感 | e72 |
| 创作学院 | e79 |
| 创作百科 | e83 |

**右侧主内容区**：
| 功能 | ref |
|------|-----|
| 发布笔记 | e28 |
| 发布图文笔记 | e148 |
| 发布视频笔记 | e154 |
| 去开播 | e160 |

---

## 发布流程

### Step 1: 准备内容

```bash
# 查看已发布的文章
ls articles/published/

# 查看素材图片
ls assets/images/
```

### Step 2: 使用 Skill 触发

在 OpenClaw 中说：
- "发布小红书"
- "把这篇文章发到小红书"

### Step 3: 自动化发布

1. **打开创作服务平台首页**
   ```typescript
   await browser.open({
       url: 'https://creator.xiaohongshu.com/new/home',
       profile: 'openclaw'
   })
   ```

2. **点击发布笔记**
   ```typescript
   await browser.act({
       kind: 'click',
       ref: 'e28'  // 发布笔记按钮
   })
   ```

3. **选择发布类型**
   - 图文笔记：`e148`
   - 视频笔记：`e154`

4. **获取文章内容**
   - 从 `articles/published/` 读取 Markdown
   - 转换为纯文本

5. **输入标题和正文**
   - 使用 `browser.act` 找到输入框
   - 填充内容

6. **上传图片**
   - 点击上传按钮
   - 选择图片文件

7. **发布**
   - 点击发布按钮

---

## 代码示例

```typescript
// 1. 打开发布平台
await browser.open({
    url: 'https://creator.xiaohongshu.com/new/home',
    profile: 'openclaw'
})

// 2. 获取快照确定元素
const snapshot = await browser.snapshot()

// 3. 点击发布笔记
await browser.act({
    kind: 'click',
    ref: 'e28'
})

// 4. 选择图文笔记
await browser.act({
    kind: 'click',
    ref: 'e148'
})

// 5. 输入标题
await browser.act({
    kind: 'type',
    ref: 'title-input',
    text: articleTitle
})

// 6. 输入正文
await browser.act({
    kind: 'type',
    ref: 'content-input',
    text: articleContent
})

// 7. 上传图片
await browser.act({
    kind: 'click',
    ref: 'upload-btn'
})
// 选择文件

// 8. 发布
await browser.act({
    kind: 'click',
    ref: 'publish-btn'
})
```

---

## 注意事项

| 事项 | 说明 |
|------|------|
| 发布频率 | 建议每天不超过 10 篇 |
| 图片数量 | 建议 9 张以内 |
| 图片比例 | 16:9 或 4:3 效果较好 |
| 文字长度 | 建议 500-1000 字 |
| 敏感词 | 发布前检查敏感词 |

---

## 常见问题

### Q: 发布的 URL 是什么？

A: 正确地址是 `https://creator.xiaohongshu.com/new/home`，旧版 `/publish/publishArticle` 已废弃。

### Q: 发布入口在哪里？

A: 首页右侧有「发布笔记」按钮（ref=e28），点击后选择图文或视频。

### Q: 发布失败怎么办？

A: 检查：
1. 网络是否正常
2. 登录是否过期
3. 内容是否包含敏感词
4. 图片是否合规

---

## 相关文件

- 文章目录：`articles/published/`
- 图片目录：`assets/images/`
