---
name: my-mind-manager
description: |
  my-mind 灵感项目创作管理技能。用于管理灵感、项目和素材。
  触发语包括：帮我管理my-mind、创建灵感、创建项目，整理文章、发布文章、素材管理、初始化目录结构、my-mind、发布小红书
  可识别关键词：my-mind、灵感管理、项目管理、文章创作、素材管理、笔记管理、目录初始化、小红书发布
---

# my-mind Manager Skill

帮助管理灵感、项目和素材的 AI 技能。

> 💡 **核心概念**：灵感 → 项目
> 
> 灵感是最原始的碎片想法，项目是从灵感孵化出的具体工作，包含草稿、已完成和素材。

## 0. 默认路径

> 📍 默认路径：`~/Documents/my-mind/`

## 1. 目录结构

```
~/Documents/my-mind/
├── ideas/              # 灵感库
│   ├── fleeting/      # 瞬时灵感（碎片想法）
│   └── structured/     # 整理后的灵感
│
├── projects/           # 项目库
│   └── [项目名]/
│       ├── drafts/    # 草稿
│       ├── published/ # 已发布
│       └── resources/ # 素材
│
├── assets/            # 全局素材库
│   ├── images/
│   ├── audios/
│   ├── videos/
│   └── attachments/
│
├── archive/          # 归档（删除的文件放这里）
└── my-mind.json      # 索引
```

## 2. 灵感管理

- **记录灵感**：写入 `ideas/fleeting/YYYY-MM-DD-简短描述.md`
- **整理灵感**：移动到 `ideas/structured/`

> ⚠️ 灵感是用户的「原始手稿」，原样保存，不润色

## 3. 项目管理

- **创建项目**：在 `projects/` 下创建文件夹
- **项目结构**：`drafts/` `published/` `resources/`
- **素材**：项目专属素材放 `resources/`，全局素材放 `assets/`

## 4. Markdown 转 HTML（多种风格）

将 Markdown 文件转换为漂亮的 HTML 页面，支持 6 种风格：

```bash
./scripts/md2html.sh <markdown文件> [--style 风格] [输出目录]
```

**可用风格**：

| 风格 | 说明 |
|------|------|
| `neon` | 赛博朋克 - 霓虹紫+青色 |
| `paper` | 纸墨风格 - 纸质书籍感 |
| `swiss` | 现代瑞士 - 极简大胆 |
| `pastel` | 柔和粉彩 - 甜美梦幻 |
| `terminal` | 终端绿 - 黑客风格 |
| `executive` | 午夜Executive - 高端商务 |

**示例**：

```bash
# 默认风格（纸墨）
./scripts/md2html.sh README.md

# 指定风格
./scripts/md2html.sh README.md --style neon
./scripts/md2html.sh README.md --style pastel
./scripts/md2html.sh README.md --style swiss
```

**详细样式文档**：见 `references/HTML_STYLES.md`

## 5. 发布小红书

使用 OpenClaw 浏览器自动化发布。

## 6. 索引

`my-mind.json` 记录项目简单索引。

---

## 重要规则

1. **原始内容原样保存**：灵感不润色
2. 灵感放 `ideas/`，项目放 `projects/`
3. 素材：项目专属 → `resources/`，全局 → `assets/`
4. **删除不放真删除**，移到 `archive/`
5. 定期清理 `inbox/to-process/`
6. 发布小红书前确保内容合规
