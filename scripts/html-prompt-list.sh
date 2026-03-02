#!/bin/bash
# 列出所有 HTML 模板提示词

SCRIPT_DIR="$(dirname "$0")"
REFERENCES_DIR="$SCRIPT_DIR/../references/html-prompt"

echo "📋 可用 HTML 模板提示词："
echo ""

for file in "$REFERENCES_DIR"/*.md; do
    if [ -f "$file" ]; then
        name=$(basename "$file" .md)
        echo "  $name"
    fi
done

echo ""
echo "使用方式："
echo "  ./html-prompt-list.sh               # 列出所有模板"
echo "  ./md2html.sh --prompt <模板名>      # 获取提示词"
echo "  ./md2html.sh <文件> --style <模板名>  # 转换为 HTML"
