# 小红书发布指南

使用浏览器自动化发布文章到小红书。

---

## 前提条件

### 1. 浏览器登录

首次使用需要：
1. 打开小红书创作者中心：https://creator.xiaohongshu.com
2. 使用账号密码登录
3. 保持登录状态（Cookie 会话）

### 2. 安装浏览器插件

OpenClaw 浏览器控制插件，确保已安装并授权。

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

AI 会执行以下步骤：

1. **打开发布页面**
   ```typescript
   await browser.open({
       url: 'https://creator.xiaohongshu.com/publish/publishArticle',
       profile: 'chrome'
   })
   ```

2. **获取文章内容**
   - 从 `articles/published/` 读取 Markdown
   - 转换为纯文本

3. **输入标题**
   - 使用 `browser.act` 找到标题输入框
   - 填充标题文字

4. **输入正文**
   - 找到正文编辑区
   - 填充正文内容

5. **上传图片**（可选）
   - 点击上传按钮
   - 选择 `assets/images/` 中的图片
   - 建议 9 张以内

6. **发布**
   - 点击发布按钮
   - 等待发布成功

---

## 代码示例

```typescript
// 1. 打开发布页面
await browser.open({
    url: 'https://creator.xiaohongshu.com/publish/publishArticle',
    profile: 'chrome'
})

// 2. 获取页面快照
const snapshot = await browser.snapshot()

// 3. 输入标题
await browser.act({
    kind: 'type',
    ref: 'title', // 通过 snapshot 找到具体元素
    text: articleTitle
})

// 4. 输入正文
await browser.act({
    kind: 'type',
    ref: 'content',
    text: articleContent
})

// 5. 上传图片
await browser.act({
    kind: ref: 'upload-btn 'click',
   '
})
// 选择文件

// 6. 发布
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

### Q: 浏览器需要一直登录吗？

A: 是的，保持登录状态。或者可以使用 Cookie 方式自动登录。

### Q: 发布失败怎么办？

A: 检查：
1. 网络是否正常
2. 登录是否过期
3. 内容是否包含敏感词
4. 图片是否合规

### Q: 如何批量发布？

A: 可以循环调用发布流程，但建议间隔 5-10 分钟。

---

## 相关文件

- 文章目录：`articles/published/`
- 图片目录：`assets/images/`
- 发布脚本：`scripts/publish-xhs.sh`（如需要）
