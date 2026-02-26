#!/bin/bash

# my-mind 小红书发布脚本
# 用法: ./scripts/publish-xhs.sh
#
# 功能：
# 1. 读取 articles/published/ 目录下的文章
# 2. 使用 OpenClaw 浏览器自动化发布
#
# 需要先在 OpenClaw 中安装 my-mind-manager skill

set -e

MIND_DIR="${MIND_DIR:-$HOME/my-mind}"

echo "📕 小红书自动发布"
echo "   目录: $MIND_DIR"

# 检查文章目录
if [ ! -d "$MIND_DIR/articles/published" ]; then
    echo "❌ 目录不存在: $MIND_DIR/articles/published"
    exit 1
fi

# 列出可发布的文章
echo ""
echo "📄 可发布的文章:"
ls -1 "$MIND_DIR/articles/published/" | nl

# 选择文章
echo ""
read -p "请选择文章编号: " choice

article_file=$(ls -1 "$MIND_DIR/articles/published/" | sed -n "${choice}p")

if [ -z "$article_file" ]; then
    echo "❌ 无效选择"
    exit 1
fi

echo "   已选择: $article_file"

# 读取文章内容
content=$(cat "$MIND_DIR/articles/published/$article_file")

# 提取标题（从 frontmatter 或文件名）
title=$(echo "$content" | grep "^title:" | head -1 | sed 's/title: //' || echo "$article_file")

# 提取正文（去掉 frontmatter）
body=$(echo "$content" | sed '1,/---$/d')

echo ""
echo "📝 标题: $title"
echo "📊 字数: $(echo $body | wc -c)"

# 提示用户在 OpenClaw 中执行发布
echo ""
echo "⚠️ 请在 OpenClaw 中说：帮我发布小红书"
echo "   文章: $title"
echo ""
echo "或手动执行以下步骤："
echo "1. 打开 https://creator.xiaohongshu.com/publish/publish?source=official"
echo "2. 点击写长文 -> 新的创作"
echo "3. 输入标题和正文"
echo "4. 一键排版 -> 选择模板 -> 发布"
