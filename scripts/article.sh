#!/bin/bash

# my-mind 文章创建脚本
# 用法: ./scripts/article.sh "文章标题"

set -e

if [ -z "$1" ]; then
    echo "❌ 用法: $0 \"文章标题\""
    exit 1
fi

TITLE="$1"
MIND_DIR="${MIND_DIR:-.}"

# 转换为 slug
slug=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -dc 'a-z0-9-')

filename="$slug-draft.md"

# 创建文章模板
cat > "$MIND_DIR/articles/drafts/$filename" << EOF
---
title: $TITLE
created: $(date "+%Y-%m-%d %H:%M:%S")
status: draft
tags: []
---

# $TITLE

## 引言


## 主体


## 总结


---

*开始写作...*
EOF

echo "✅ 已创建文章草稿: articles/drafts/$filename"

# Git 提交
cd "$MIND_DIR"
if [ -d ".git" ]; then
    echo "📦 提交到 Git..."
    git add "articles/drafts/$filename"
    git commit -m "feat: 创建文章草稿 - $TITLE"
    echo "✅ 已提交"
fi
