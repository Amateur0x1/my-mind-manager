#!/bin/bash
# Markdown 转 HTML 工具

SCRIPT_DIR="$(dirname "$0")"

# 查看模板列表
if [ "$1" = "--list" ]; then
    echo "📋 可用 HTML 模板："
    echo ""
    echo "  ppt_simple    - 简洁幻灯片"
    echo "  ppt_cyber    - 赛博朋克"
    echo "  ppt_minimal  - 极简白"
    echo "  ppt_elegant  - 暗雅"
    echo "  article_paper - 纸墨文章
    ppt_cute    - 可爱粉彩
    ppt_cute    - 可爱粉彩"
    echo ""
    echo "使用方式："
    echo "  $0 <markdown文件> --style <模板名>"
    echo "  $0 --prompt <模板名>  # 获取模板提示词"
    exit 0
fi

# 获取模板提示词
if [ "$1" = "--prompt" ]; then
    TEMPLATE="$2"
    
    case "$TEMPLATE" in
        ppt_simple)
            cat << 'EOF'
# 简洁幻灯片模板提示词

## 格式规则
- # 标题 = 新幻灯片（标题页）
- ## 二级标题 = 新幻灯片（内容页）
- ### 三级标题 = 幻灯片内小标题
- 其他内容 = 幻灯片内容

## 示例
# 我的演讲标题

副标题或介绍...

## 第一章：背景

### 背景介绍

这里是背景内容的详细说明...

## 总结

关键要点总结...
EOF
            ;;
        ppt_cyber)
            cat << 'EOF'
# 赛博朋克风格提示词

## 格式规则
- # 标题 = 幻灯片主标题
- ## 二级标题 = 幻灯片副标题
- 其他内容 = 幻灯片内容

## 特点
- 霓虹紫(#ff00ff) + 青色(#00fff2)
- 故障风字体效果
- 深色背景

## 示例
# 未来已来

## 技术革命

赛博朋克时代的核心技术...
EOF
            ;;
        ppt_minimal)
            cat << 'EOF'
# 极简白风格提示词

## 格式规则
- # 标题 = 幻灯片标题
- ## 二级标题 = 副标题
- 其他内容 = 正文

## 特点
- 纯白背景
- 黑色文字
- 大字号留白

## 示例
# 核心概念

## 关键观点

简洁有力的内容表达...
EOF
            ;;
        ppt_elegant)
            cat << 'EOF'
# 暗雅风格提示词

## 格式规则
- # 标题 = 幻灯片标题
- ## 二级标题 = 副标题
- 其他内容 = 正文

## 特点
- 深灰背景
- 渐变标题
- 优雅衬线字体

## 示例
# 设计哲学

## 美的追求

less is more...
EOF
            ;;
        article_paper)
            cat << 'EOF'
# 纸墨文章模板提示词

## 格式规则
- # 标题 = 文章标题
- ## 二级标题 = 章节标题
- 其他内容 = 正文

## 特点
- 纸质背景
- 书页布局
- 衬线字体

## 示例
# 我的文章

## 开篇

这是一个开始...

## 章节一

章节内容...
EOF
            ;;
        *)
            echo "未知模板: $TEMPLATE"
            echo "可用模板: ppt_simple, ppt_cyber, ppt_minimal, ppt_elegant, article_paper"
            exit 1
            ;;
    esac
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
    minimal)   STYLE="ppt_minimal" ;;
    elegant)   STYLE="ppt_elegant" ;;
    paper)     STYLE="article_paper" ;;
esac

node "$SCRIPT_DIR/md2html.js" "$@"
