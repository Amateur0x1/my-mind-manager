#!/bin/bash

# my-mind 快速记录灵感脚本
# 用法: ./scripts/note.sh "灵感内容" [标题]
# 或者不带参数运行，交互式输入

set -e

MIND_DIR="${MIND_DIR:-.}"

# 解析参数
if [ -z "$1" ]; then
    # 交互模式
    echo -n "📝 输入灵感内容: "
    read -r content
    if [ -z "$content" ]; then
        echo "❌ 内容不能为空"
        exit 1
    fi
    TITLE=""
else
    content="$1"
    TITLE="$2"
fi

# 生成文件名
DATE=$(date +%Y-%m-%d)
TIMESTAMP=$(date +%Y-%m-%d-%H%M%S)

if [ -n "$TITLE" ]; then
    filename="$DATE-$TITLE.md"
else
    # 从内容中提取前20个字符作为标题
    slug=$(echo "$content" | head -c 20 | tr ' ' '-' | tr -dc 'a-zA-Z0-9-')
    filename="$TIMESTAMP-$slug.md"
fi

# 创建文件
cat > "$MIND_DIR/ideas/fleeting/$filename" << EOF
# $DATE$( [ -n "$TITLE" ] && echo " - $TITLE" || echo "" )

$content

---
- 创建时间: $(date "+%Y-%m-%d %H:%M:%S")
- 状态: 灵感
EOF

echo "✅ 已记录到: ideas/fleeting/$filename"

# 检查是否需要 Git 提交
cd "$MIND_DIR"
if [ -d ".git" ]; then
    echo "📦 自动提交..."
    git add "ideas/fleeting/$filename"
    git commit -m "feat: 记录灵感 - $filename"
    echo "✅ 已提交"
fi
