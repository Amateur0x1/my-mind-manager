---
name: my-mind-manager
description: |
  my-mind 灵感文章创作管理技能。用于管理灵感、文章和创作素材。
  触发语包括：帮我管理my-mind、创建灵感、整理文章、发布文章、创作素材管理、初始化目录结构、my-mind、发布小红书
  可识别关键词：my-mind、灵感管理、文章创作、素材管理、笔记管理、目录初始化、小红书发布
---

# my-mind Manager Skill

帮助管理灵感、文章和创作素材的 AI 技能。

## 功能概述

### 1. 初始化目录结构

自动创建标准的 my-mind 目录结构：

```
my-mind/
├── ideas/              # 灵感库
│   ├── fleeting/       # 瞬时灵感
│   ├── structured/     # 整理后的灵感
│   └── projects/       # 项目构想
├── articles/           # 文章库
│   ├── drafts/         # 草稿
│   ├── published/     # 已发布
│   └── ideas/         # 文章构想
├── assets/             # 创作素材
│   ├── images/
│   ├── audios/
│   ├── videos/
│   └── attachments/
├── inbox/              # 收集箱
│   ├── temp/
│   └── to-process/
└── archive/           # 归档
```

### 2. 灵感管理

- **记录灵感**：快速记录碎片想法
- **整理灵感**：将瞬时灵感整理成结构化内容
- **归档灵感**：将完成的项目构想归档

### 3. 文章创作

- **创建草稿**：基于灵感创建新文章
- **编辑文章**：帮助续写、修改文章
- **发布文章**：标记为已完成/已发布

### 4. 素材管理

- 整理和归类素材
- 移动素材到正确位置
- 清理临时文件

### 5. 发布小红书（自动化）

使用 OpenClaw 浏览器自动化发布长文笔记到小红书。

详细流程和代码见上方"发布流程"部分。

### 6. 知识沉淀

将发现的技巧、经验沉淀到 references/ 目录：

- `usage-guide.md`: my-mind 使用指南
- `inspiration-format.md`: 灵感记录规范
- `article-format.md`: 文章写作规范
- `xhs-publish.md`: 小红书发布指南
- `workflow.md`: 自动化工作流
- `tool-integration.md`: 工具集成指南

当用户说"沉淀一下"、"记录这个"时：
1. 分析内容
2. 选择合适的分类
3. 创建文档
4. 提交保存

### 7. 状态检查

查看 my-mind 仓库状态：
- 各目录文件数量
- 最新文件
- Git 状态
- 建议操作

当用户说"查看状态"、"我的 my-mind 怎么样"时，执行 `scripts/status.sh` 或直接列出各目录内容。

### 8. 一键初始化

快速初始化新的 my-mind 仓库：
- 创建目录结构
- 初始化 Git
- 生成 README

当用户说"初始化 my-mind"、"创建 my-mind"时，使用 `scripts/quickstart.sh`

#### 发布流程

当用户说"发布小红书"、"发到小红书"时：

1. **确认要发布的文章**
   - 读取 `articles/published/` 下的文章
   - 或使用用户提供的文章内容

2. **打开发布页面**
   ```typescript
   await browser.open({
       url: 'https://creator.xiaohongshu.com/publish/publish?source=official',
       profile: 'openclaw'
   })
   ```

3. **点击「写长文」**
   ```typescript
   await browser.act({ kind: 'click', ref: 'e1117' })
   ```

4. **点击「新的创作」**
   ```typescript
   await browser.act({ kind: 'click', ref: 'e148' })
   ```

5. **输入标题**
   ```typescript
   await browser.act({ 
       kind: 'type', 
       ref: 'e229', 
       text: articleTitle 
   })
   ```

6. **输入正文**
   ```typescript
   await browser.act({ 
       kind: 'type', 
       ref: 'e234', 
       text: articleContent 
   })
   ```

7. **一键排版**
   ```typescript
   await browser.act({ kind: 'click', ref: 'e236' })
   ```

8. **选择模板**
   ```typescript
   await browser.act({ kind: 'click', ref: 'e356' })
   ```

9. **下一步**
   ```typescript
   await browser.act({ kind: 'click', ref: 'e530' })
   ```

10. **添加标签（话题）**
    ```typescript
    // 点击"话题"按钮
    await browser.act({ kind: 'click', ref: 'e800' })
    
    // 输入标签话题（如 #AI #技能 #创作）
    await browser.act({ 
        kind: 'type', 
        ref: 'topic-input', 
        text: '#AI #技能 #创作' 
    })
    
    // 选择建议的话题（如果有）
    // 或按回车确认
    ```

11. **发布**
    ```typescript
    await browser.act({ kind: 'click', ref: 'e1101' })
    ```

12. **反馈结果**
    - 确认发布成功
    - 提醒用户查看

#### 标签输入说明

在发布页面需要添加标签/话题：
- 点击「话题」按钮 (ref=e800)
- 输入话题标签（如 #AI #技能 #创作）
- 小红书支持添加多个话题
- 建议 3-5 个相关话题

#### 注意事项

- **元素 ref 可能变化**：每次建议获取 snapshot 确认
- **长文类型**：当前仅支持长文笔记（千字）
- **图片**：暂不支持自动上传图片
- **标签**：发布前务必添加相关话题标签

---

## 使用流程

### 方式一：初始化新仓库

当用户说"初始化 my-mind"或"创建目录结构"时：

1. 创建目录结构
2. 生成 README.md 使用指南
3. 提交代码

### 方式二：记录灵感

当用户说"记录灵感"、"有个想法"时：

1. 询问灵感内容
2. 按日期创建文件到 `ideas/fleeting/`
3. 询问是否需要整理

### 方式三：写作文章

当用户说"写文章"、"创作"时：

1. 询问文章主题和方向
2. 创建草稿到 `articles/drafts/`
3. 逐步完善内容

### 方式四：发布文章

当用户说"发布文章"、"完成文章"时：

1. 确认文章已完成
2. 移动到 `articles/published/`
3. 按日期重命名

### 方式五：发布小红书

当用户说"发布小红书"、"发到小红书"时：

1. 确认要发布的文章
2. 确认配图
3. 使用浏览器自动化执行发布
4. 反馈发布结果

---

## 命名规范

### 灵感

- 瞬时灵感：`YYYY-MM-DD-简短描述.md`
- 整理后：`YYYY-MM-DD-主题.md`
- 项目：`项目名-阶段.md`

### 文章

- 草稿：`文章名-draft.md`
- 定稿：`YYYY-MM-DD-文章名.md`

---

## 重要规则

1. 所有文件使用 Markdown 格式
2. 灵感文件优先放入 `fleeting/`，再根据需要整理到 `structured/`
3. 文章发布前确认用户意图
4. 素材移动前确认目标路径
5. 定期提醒用户清理 `inbox/to-process/`
6. 发布小红书前确保内容合规

---

## 配套工具

- Obsidian
- Notion
- 任意 Markdown 编辑器
- 浏览器自动化（browser 工具）
