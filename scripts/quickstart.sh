#!/bin/bash

# my-mind 一键初始化脚本
# 初始化目录 + Git + 基础配置

set -e

TARGET_DIR="${1:-$HOME/my-mind}"

echo "🚀 my-mind 一键初始化"
echo "====================="
echo ""
echo "目标目录: $TARGET_DIR"

# 创建目录结构
echo ""
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
echo "   ✅ 目录创建完成"

# 初始化 Git
cd "$TARGET_DIR"
if [ ! -d ".git" ]; then
    echo ""
    echo "📦 初始化 Git..."
    git init
    
    # 创建 .gitignore
    cat > .gitignore << 'EOF'
# OS
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.swp

# Logs
*.log
EOF
    
    git add .
    git commit -m "feat: 初始化 my-mind 目录结构"
    echo "   ✅ Git 初始化完成"
else
    echo ""
    echo "   ℹ️  Git 已存在"
fi

# 生成 README
if [ ! -f "README.md" ]; then
    echo ""
    echo "📝 生成 README.md..."
    cat > README.md << 'EOF'
# my-mind 🎯

我的灵感、文章与创作素材管理中心。

## 目录结构

```
my-mind/
├── ideas/          # 灵感库
├── articles/        # 文章库
├── assets/         # 素材库
├── inbox/          # 收集箱
└── archive/        # 归档
```

## 使用方式

配合 OpenClaw + my-mind-manager skill 使用效果最佳。

详见: https://github.com/Amateur0x1/my-mind-manager
EOF
    git add README.md
    git commit -m "docs: 添加 README"
fi

echo ""
echo "====================="
echo "✨ 初始化完成！"
echo ""
echo "📍 目录: $TARGET_DIR"
echo "📦 Git: 已初始化"
echo ""
echo "下一步:"
echo "  1. cd $TARGET_DIR"
echo "  2. git remote add origin <你的仓库地址>"
echo "  3. git push -u origin main"
