#!/bin/bash
# Markdown 转 HTML（支持多种风格）
SCRIPT_DIR="$(dirname "$0")"

if [ -z "$1" ]; then
    echo "用法: $0 <markdown文件> [--style 风格] [输出目录]"
    echo ""
    echo "可用风格:"
    echo "  neon      - 赛博朋克"
    echo "  paper     - 纸墨风格 (默认)"
    echo "  swiss     - 现代瑞士"
    echo "  pastel    - 柔和粉彩"
    echo "  terminal  - 终端绿"
    echo "  executive - 午夜Executive"
    echo ""
    echo "示例:"
    echo "  $0 README.md"
    echo "  $0 README.md --style neon"
    echo "  $0 README.md --style paper ./output"
    exit 1
fi

node "$SCRIPT_DIR/md2html.js" "$@"
