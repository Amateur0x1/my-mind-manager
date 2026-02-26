#!/bin/bash

# my-mind 状态检查脚本
# 查看 my-mind 仓库的状态

set -e

MIND_DIR="${MIND_DIR:-$HOME/my-mind}"

echo "📊 my-mind 状态检查"
echo "==================="
echo ""

# 检查目录
if [ ! -d "$MIND_DIR" ]; then
    echo "❌ my-mind 目录不存在: $MIND_DIR"
    echo "   运行 ./scripts/init.sh 初始化"
    exit 1
fi

cd "$MIND_DIR"

echo "📁 目录结构"
echo "-----------"

# 灵感统计
fleeting_count=$(ls -1 ideas/fleeting/ 2>/dev/null | wc -l | tr -d ' ')
structured_count=$(ls -1 ideas/structured/ 2>/dev/null | wc -l | tr -d ' ')
projects_count=$(ls -1 ideas/projects/ 2>/dev/null | wc -l | tr -d ' ')
echo "💡 灵感: $fleeting_count (瞬时) / $structured_count (整理) / $projects_count (项目)"

# 文章统计
drafts_count=$(ls -1 articles/drafts/ 2>/dev/null | wc -l | tr -d ' ')
published_count=$(ls -1 articles/published/ 2>/dev/null | wc -l | tr -d ' ')
ideas_count=$(ls -1 articles/ideas/ 2>/dev/null | wc -l | tr -d ' ')
echo "📄 文章: $drafts_count (草稿) / $published_count (已发布) / $ideas_count (构想)"

# 素材统计
images_count=$(ls -1 assets/images/ 2>/dev/null | wc -l | tr -d ' ')
echo "🎨 素材: $images_count (图片)"

# 待处理
to_process_count=$(ls -1 inbox/to-process/ 2>/dev/null | wc -l | tr -d ' ')
echo "📥 待处理: $to_process_count"

echo ""
echo "📝 最新文件"
echo "-----------"

# 最新灵感
if [ $fleeting_count -gt 0 ]; then
    latest_fleeting=$(ls -t ideas/fleeting/ | head -1)
    echo "   灵感: $latest_fleeting"
fi

# 最新文章
if [ $drafts_count -gt 0 ]; then
    latest_draft=$(ls -t articles/drafts/ | head -1)
    echo "   草稿: $latest_draft"
fi

# Git 状态
echo ""
echo "📦 Git 状态"
echo "-----------"
if [ -d ".git" ]; then
    if [ -n "$(git status --porcelain)" ]; then
        echo "   ⚠️  有未提交的更改"
        git status --short | head -5
    else
        echo "   ✅ 工作区干净"
    fi
    
    # 最新 commit
    last_commit=$(git log -1 --oneline --format="%h %s" 2>/dev/null || echo "无")
    echo "   最后提交: $last_commit"
else
    echo "   ❌ 未初始化 Git"
fi

echo ""
echo "🎯 建议操作"
echo "-----------"
if [ $fleeting_count -gt 5 ]; then
    echo "   - 整理灵感: 有 $fleeting_count 条瞬时灵感待整理"
fi
if [ $to_process_count -gt 0 ]; then
    echo "   - 清理 inbox: 有 $to_process_count 项待处理"
fi
if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
    echo "   - 提交更改: 运行 git add . && git commit"
fi

echo ""
echo "✨ 完成"
