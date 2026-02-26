#!/bin/bash

# my-mind 初始化脚本
# 用法: ./scripts/init.sh [目录路径]
# 默认在当前目录创建

set -e

# 默认路径
TARGET_DIR="${1:-.}"

# 检查目录是否为空
if [ -d "$TARGET_DIR/.git" ]; then
    echo "📂 目录已存在 Git 仓库"
    cd "$TARGET_DIR"
else
    echo "🆕 初始化新的 my-mind 仓库..."
    cd "$TARGET_DIR"
    git init
fi

# 创建目录结构
echo "📁 创建目录结构..."

mkdir -p "$TARGET_DIR/ideas/fleeting"
mkdir -p "$TARGET_DIR/ideas/structured"
mkdir -p "$TARGET_DIR/ideas/projects"

mkdir -p "$TARGET_DIR/articles/drafts"
mkdir -p "$TARGET_DIR/articles/published"
mkdir -p "$TARGET_DIR/articles/ideas"

mkdir -p "$TARGET_DIR/assets/images"
mkdir -p "$TARGET_DIR/assets/audios"
mkdir -p "$TARGET_DIR/assets/videos"
mkdir -p "$TARGET_DIR/assets/attachments"

mkdir -p "$TARGET_DIR/inbox/temp"
mkdir -p "$TARGET_DIR/inbox/to-process"

mkdir -p "$TARGET_DIR/archive"

# 创建 README.md
echo "📝 生成 README.md..."

cat > "$TARGET_DIR/README.md" << 'EOF'
# my-mind 🎯

我的灵感、文章与创作素材管理中心。

---

## 📁 目录结构

```
my-mind/
├── 📝 ideas/              # 灵感库
│   ├── fleeting/          # 瞬时灵感（碎片想法）
│   ├── structured/        # 整理后的灵感
│   └── projects/         # 项目构想
│
├── 📄 articles/          # 文章库
│   ├── drafts/           # 草稿
│   ├── published/        # 已发布/定稿
│   └── ideas/            # 文章构想
│
├── 🎨 assets/            # 创作素材
│   ├── images/           # 图片素材
│   ├── audios/           # 音频素材
│   ├── videos/           # 视频素材
│   └── attachments/      # 附件素材
│
├── 📥 inbox/             # 收集箱
│   ├── temp/             # 临时存放
│   └── to-process/       # 待处理
│
└── 📦 archive/           # 归档
```

---

## 💡 使用指南

### 灵感 (ideas/)

| 子目录 | 用途 |
|--------|------|
| `fleeting/` | 碎片想法、灵感突现 |
| `structured/` | 整理后的完整灵感 |
| `projects/` | 项目相关的构想 |

**命名规范**：
- `fleeting/`: `YYYY-MM-DD-简短描述.md`
- `structured/`: `YYYY-MM-DD-主题.md`
- `projects/`: `项目名-阶段.md`

### 文章 (articles/)

| 子目录 | 用途 |
|--------|------|
| `drafts/` | 正在写作的草稿 |
| `published/` | 已完成/已发布的文章 |
| `ideas/` | 文章构想和大纲 |

### 素材 (assets/)

按主题分类存放，如 `images/ui-design/`, `images/photos/`

### 收集箱 (inbox/)

- `temp/`: 临时文件，用完即删
- `to-process/`: 待整理的内容

---

## ✅ 快速开始

1. **记录灵感** → 写入 `ideas/fleeting/`
2. **写作文章** → 写入 `articles/drafts/`
3. **收集素材** → 放入 `assets/` 对应目录
4. **临时存放** → 放入 `inbox/to-process/`

---

*Keep your mind organized.* ✨
EOF

# 初始化 Git（如果需要）
if [ ! -d "$TARGET_DIR/.git" ]; then
    cd "$TARGET_DIR"
    git init
fi

# 提交初始结构
cd "$TARGET_DIR"
if [ -n "$(git status --porcelain)" ]; then
    echo "📦 提交初始结构..."
    git add .
    git commit -m "feat: 初始化 my-mind 目录结构"
    echo "✅ 初始化完成！"
else
    echo "✅ 目录已是最新"
fi

echo ""
echo "🎉 my-mind 初始化完成！"
echo "📂 目录: $(pwd)"
