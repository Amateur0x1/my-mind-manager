#!/bin/bash
# Markdown 转 HTML（支持 PPT 等多种风格）
SCRIPT_DIR="$(dirname "$0")"

if [ -z "$1" ]; then
    echo "用法: $0 <markdown文件> [--style 风格] [输出目录]"
    echo ""
    echo "可用风格:"
    echo "  ppt      - PPT 幻灯片 (默认)"
    echo "  neon     - 赛博朋克"
    echo "  minimal  - 极简白"
    echo "  elegant  - 暗雅"
    echo ""
    echo "示例:"
    echo "  $0 README.md"
    echo "  $0 README.md --style ppt"
    exit 1
fi

node "$SCRIPT_DIR/md2html.js" "$@"
