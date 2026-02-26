# my-mind Manager Skill

帮助管理灵感、文章和创作素材的 AI 技能插件。

## 🚀 快速开始

### 2. 在 OpenClaw 中使用

如果你希望在 OpenClaw 中使用：

#### 方式一：Git 克隆（推荐）

```bash
# 克隆到 workspace skills（推荐）
cd ~/.openclaw/workspace/skills
git clone <技能仓库地址> my-mind-manager

# 或者克隆到全局 skills
cd ~/.openclaw/skills
git clone <技能仓库地址> my-mind-manager
```

#### 方式二：ClawHub 安装

```bash
# 安装 CLI（如果还没有）
npm i -g clawhub

# 搜索技能
clawhub search "my-mind"

# 安装到 workspace
clawhub install my-mind-manager
```

#### 触发方式

- **slash command**: `/my-mind-manager`
- **自然语言**: "帮我管理 my-mind"、"初始化目录"、"记录灵感"

---

## 📁 技能文件结构

一个标准的 Skill 是一个包含说明书的文件夹：
- `SKILL.md`: **核心定义文件**。包含 YAML 元数据（name, description）和分步任务指南。
- `references/`: 存放该技能依赖的知识库、规则和示例。
- `scripts/`: (可选) 存放辅助脚本。

---

## 💡 功能说明

### 初始化目录结构

自动创建标准的 my-mind 目录结构，包括：
- ideas/（灵感库）
- articles/（文章库）
- assets/（素材库）
- inbox/（收集箱）
- archive/（归档）

### 灵感管理

- 快速记录碎片想法
- 整理成结构化内容
- 项目构想管理

### 文章创作

- 创建和编辑草稿
- 写作辅助
- 发布管理

### 素材管理

- 归类整理
- 移动和清理

### 发布小红书

使用浏览器自动化发布文章到小红书，详细流程见：`references/xhs-publish.md`

#### 触发方式

当用户说"发布小红书"、"发到小红书"时：

1. 确认要发布的文章（来自 `articles/published/`）
2. 确认配图（来自 `assets/images/`）
3. 使用 `browser` 工具自动填充内容
4. 自动上传图片
5. 自动点击发布

#### 前提条件

- 用户需先在浏览器登录小红书
- 首次使用需授权浏览器插件

#### 注意事项

- 发布频率限制：建议每天不超过 10 篇
- 图片建议：9 张以内

## 🛠 配套脚本

### 初始化脚本

```bash
# 在当前目录初始化
./scripts/init.sh

# 在指定目录初始化
./scripts/init.sh /path/to/my-mind
```

### 快速记录灵感

```bash
# 交互式输入
./scripts/note.sh

# 命令行参数
./scripts/note.sh "今天想到一个新项目"
./scripts/note.sh "内容" "标题"
```

### 创建文章

```bash
./scripts/article.sh "我的第一篇文章"
```

---

## 📝 触发示例

| 场景 | 触发语 |
|------|--------|
| 初始化 | "初始化 my-mind"、"创建目录结构" |
| 记录灵感 | "记录灵感"、"有个想法" |
| 写文章 | "帮我写篇文章"、"创作" |
| 发布 | "发布文章"、"完成写作" |

---

Designed with ❤️.
