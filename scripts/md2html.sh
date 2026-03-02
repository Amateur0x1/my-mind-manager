#!/bin/bash
# Markdown 转 HTML
SCRIPT_DIR="$(dirname "$0")"

if [ -z "$1" ]; then
    echo "用法: $0 <markdown文件> [输出目录]"
    exit 1
fi

node "$SCRIPT_DIR/md2html.js" "$1" "$2"
