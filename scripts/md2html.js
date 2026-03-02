#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2];
const outputDir = process.argv[3] || '.';

if (!inputFile) {
    console.log('用法: node md2html.js <markdown文件> [输出目录]');
    process.exit(1);
}

if (!fs.existsSync(inputFile)) {
    console.log('文件不存在:', inputFile);
    process.exit(1);
}

const md = fs.readFileSync(inputFile, 'utf8');
const basename = path.basename(inputFile, '.md');
const outputFile = path.join(outputDir, basename + '.html');

// 提取标题
const titleMatch = md.match(/^#\s+(.+)$/m);
const title = titleMatch ? titleMatch[1] : basename;

// 简单 Markdown 解析
let html = md
    // 代码块
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    // 行内代码
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // 标题
    .replace(/^###### (.*)$/gm, '<h6>$1</h6>')
    .replace(/^##### (.*)$/gm, '<h5>$1</h5>')
    .replace(/^#### (.*)$/gm, '<h4>$1</h4>')
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    // 粗体
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // 斜体
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // 链接
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // 图片
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
    // 引用
    .replace(/^>\s+(.*)$/gm, '<blockquote>$1</blockquote>')
    // 水平线
    .replace(/^---$/gm, '<hr>')
    // 列表
    .replace(/^-\s+(.*)$/gm, '<li>$1</li>');

// 处理段落
const lines = html.split('\n');
const result = [];
let inUl = false;

for (let line of lines) {
    line = line.trim();
    if (!line) {
        if (inUl) { result.push('</ul>'); inUl = false; }
        continue;
    }
    if (line.match(/^<h[1-6]|<pre|<blockquote|<hr/)) {
        if (inUl) { result.push('</ul>'); inUl = false; }
        result.push(line);
    } else if (line.startsWith('<li>')) {
        if (!inUl) { result.push('<ul>'); inUl = true; }
        result.push(line);
    } else {
        if (inUl) { result.push('</ul>'); inUl = false; }
        result.push('<p>' + line + '</p>');
    }
}
if (inUl) result.push('</ul>');

html = result.join('\n');

// 生成完整 HTML
const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 2rem; background: #fafafa; }
        h1, h2, h3, h4, h5, h6 { margin: 1.5em 0 0.5em; font-weight: 600; line-height: 1.3; }
        h1 { font-size: 2em; border-bottom: 2px solid #333; padding-bottom: 0.3em; }
        h2 { font-size: 1.5em; }
        h3 { font-size: 1.25em; }
        p { margin: 1em 0; }
        code { background: #f4f4f4; padding: 0.2em 0.4em; border-radius: 3px; font-family: monospace; font-size: 0.9em; }
        pre { background: #1e1e1e; color: #d4d4d4; padding: 1em; border-radius: 8px; overflow-x: auto; margin: 1em 0; }
        pre code { background: none; padding: 0; color: inherit; }
        blockquote { border-left: 4px solid #ddd; padding-left: 1em; margin: 1em 0; color: #666; }
        ul, ol { margin: 1em 0; padding-left: 2em; }
        li { margin: 0.5em 0; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
        img { max-width: 100%; height: auto; border-radius: 8px; margin: 1em 0; }
        table { border-collapse: collapse; width: 100%; margin: 1em 0; }
        th, td { border: 1px solid #ddd; padding: 0.5em; text-align: left; }
        th { background: #f4f4f4; }
        hr { border: none; border-top: 1px solid #ddd; margin: 2em 0; }
    </style>
</head>
<body>
${html}
</body>
</html>`;

fs.writeFileSync(outputFile, fullHtml);
console.log('✅ 已转换为 HTML:', outputFile);
