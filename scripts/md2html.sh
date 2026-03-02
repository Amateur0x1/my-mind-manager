#!/bin/bash
# Markdown 转 HTML 工具

SCRIPT_DIR="$(dirname "$0")"
REFERENCES_DIR="$SCRIPT_DIR/../references/html-prompt"

# 查看模板列表
if [ "$1" = "--list" ]; then
    echo "📋 可用 HTML 模板："
    echo ""
    echo "  ppt_simple    - 简洁幻灯片"
    echo "  ppt_cyber    - 赛博朋克"
    echo "  ppt_minimal  - 极简白"
    echo "  ppt_elegant  - 暗雅"
    echo "  ppt_cute     - 可爱粉彩"
    echo "  article_paper - 纸墨文章"
    echo ""
    echo "使用方式："
    echo "  $0 <markdown文件> --style <模板名>"
    echo "  $0 --prompt <模板名>  # 获取模板提示词"
    exit 0
fi

# 获取模板提示词
if [ "$1" = "--prompt" ]; then
    TEMPLATE="$2"
    PROMPT_FILE="$REFERENCES_DIR/${TEMPLATE}.md"
    
    if [ -f "$PROMPT_FILE" ]; then
        cat "$PROMPT_FILE"
    else
        echo "未知模板: $TEMPLATE"
        echo "可用模板: ppt_simple, ppt_cyber, ppt_minimal, ppt_elegant, ppt_cute, article_paper"
        exit 1
    fi
    exit 0
fi

# 执行转换
if [ -z "$1" ]; then
    echo "用法: "
    echo "  $0 --list                    # 查看模板列表"
    echo "  $0 --prompt <模板名>         # 获取模板提示词"
    echo "  $0 <markdown文件> --style <模板名>  # 转换为 HTML"
    exit 1
fi

# 模板名映射
STYLE="$3"
if [ "$2" = "--style" ]; then
    STYLE="$3"
fi

# 映射旧名到新名
case "$STYLE" in
    ppt)        STYLE="ppt_simple" ;;
    neon)       STYLE="ppt_cyber" ;;
    minimal)    STYLE="ppt_minimal" ;;
    elegant)    STYLE="ppt_elegant" ;;
    paper)      STYLE="article_paper" ;;
esac

node "$SCRIPT_DIR/md2html.js" "$@"
