#!/bin/bash
# 卡片截图脚本
# 将 HTML 中的每个卡片截图为单独的图片

SCRIPT_DIR="$(dirname "$0")"

if [ -z "$1" ]; then
    echo "📷 卡片截图工具"
    echo "================"
    echo ""
    echo "用法: $0 <html文件> [输出目录]"
    echo ""
    echo "示例:"
    echo "  $0 index.html"
    echo "  $0 index.html ./screenshots"
    echo ""
    echo "输出: 每个卡片一张 PNG 图片"
    exit 1
fi

HTML_FILE="$1"
OUTPUT_DIR="${2:-./screenshots}"

if [ ! -f "$HTML_FILE" ]; then
    echo "❌ 文件不存在: $HTML_FILE"
    exit 1
fi

# 检查是否有 playwright 或 puppeteer
if command -v npx &> /dev/null; then
    # 尝试安装 playwright
    echo "🔧 检查依赖..."
    npx -y playwright install chromium 2>/dev/null
fi

# 运行 Node.js 脚本
node "$SCRIPT_DIR/screenshot-cards.js" "$HTML_FILE" "$OUTPUT_DIR"
