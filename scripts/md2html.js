#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// 解析参数
let inputFile, outputDir, style = 'paper';

const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
    if (args[i] === '--style' && args[i + 1]) {
        style = args[i + 1];
        i++;
    } else if (!args[i].startsWith('--')) {
        if (!inputFile) inputFile = args[i];
        else if (!outputDir) outputDir = args[i];
    }
}

if (!inputFile) {
    console.log('用法: md2html.js <markdown文件> [--style 风格] [输出目录]');
    console.log('');
    console.log('可用风格:');
    console.log('  neon      - 赛博朋克');
    console.log('  paper     - 纸墨风格');
    console.log('  swiss     - 现代瑞士');
    console.log('  pastel    - 柔和粉彩');
    console.log('  terminal  - 终端绿');
    console.log('  executive - 午夜Executive');
    process.exit(1);
}

if (!fs.existsSync(inputFile)) {
    console.log('文件不存在:', inputFile);
    process.exit(1);
}

const md = fs.readFileSync(inputFile, 'utf8');
const basename = path.basename(inputFile, '.md');
const outDir = outputDir || path.dirname(inputFile);
const outputFile = path.join(outDir, basename + '.html');

// 提取标题
const titleMatch = md.match(/^#\s+(.+)$/m);
const title = titleMatch ? titleMatch[1] : basename;

// Markdown 解析
let html = md
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^###### (.*)$/gm, '<h6>$1</h6>')
    .replace(/^##### (.*)$/gm, '<h5>$1</h5>')
    .replace(/^#### (.*)$/gm, '<h4>$1</h4>')
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
    .replace(/^>\s+(.*)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^---$/gm, '<hr>')
    .replace(/^-\s+(.*)$/gm, '<li>$1</li>');

// 处理段落
const lines = html.split('\n');
const result = [];
let inUl = false;
for (let line of lines) {
    line = line.trim();
    if (!line) { if (inUl) { result.push('</ul>'); inUl = false; } continue; }
    if (line.match(/^<h[1-6]|<pre|<blockquote|<hr/)) { if (inUl) { result.push('</ul>'); inUl = false; } result.push(line); }
    else if (line.startsWith('<li>')) { if (!inUl) { result.push('<ul>'); inUl = true; } result.push(line); }
    else { if (inUl) { result.push('</ul>'); inUl = false; } result.push('<p>' + line + '</p>'); }
}
if (inUl) result.push('</ul>');
html = result.join('\n');

// 风格模板
const styles = {
    neon: {
        head: `<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&display=swap" rel="stylesheet">`,
        css: `*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Rajdhani',sans-serif;background:#0a0a0f;color:#00fff2;line-height:1.8}.container{max-width:800px;margin:0 auto;padding:4rem 2rem}h1{font-family:'Orbitron',sans-serif;font-size:3rem;color:#ff00ff;text-shadow:0 0 20px #ff00ff,0 0 40px #ff00ff;margin-bottom:2rem;border-bottom:2px solid #00fff2;padding-bottom:1rem}h2{font-family:'Orbitron',sans-serif;color:#00fff2;margin:2rem 0 1rem;font-size:1.8rem}h3{color:#ff00ff;margin:1.5rem 0 .5rem}p{margin:1rem 0;color:#e0e0e0}code{background:#1a1a2e;color:#00fff2;padding:.2em .5em;border-radius:4px;font-family:'Fira Code',monospace}pre{background:linear-gradient(135deg,#1a1a2e,#0f0f1a);border:1px solid #00fff2;border-radius:8px;padding:1.5rem;overflow-x:auto;margin:1.5rem 0}pre code{background:0 0;color:#00ff88}ul,ol{margin:1rem 0;padding-left:2rem;color:#e0e0e0}li{margin:.5rem 0}li::marker{color:#ff00ff}blockquote{border-left:4px solid #ff00ff;padding-left:1.5rem;margin:1.5rem 0;color:#888;font-style:italic}a{color:#00fff2;text-decoration:none}a:hover{color:#ff00ff;text-shadow:0 0 10px #ff00ff}hr{border:0;border-top:1px solid #333;margin:2rem 0}strong{color:#ff00ff}em{color:#00ff88}`,
        wrap: (c) => `<div class="container">${c}</div>`
    },
    paper: {
        head: `<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap" rel="stylesheet">`,
        css: `*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Noto Sans SC',sans-serif;background:#f5f2eb;color:#2c2c2c;line-height:2}.container{max-width:720px;margin:0 auto;padding:4rem 2rem}.paper{background:#fff;padding:3rem 4rem;box-shadow:0 4px 20px rgba(0,0,0,.08);border-radius:2px}h1{font-family:'Noto Serif SC',serif;font-size:2.2rem;color:#1a1a1a;margin-bottom:2rem;padding-bottom:1rem;border-bottom:2px solid #d4af37;text-align:center}h2{font-family:'Noto Serif SC',serif;font-size:1.6rem;color:#1a1a1a;margin:2.5rem 0 1rem}h3{font-size:1.3rem;margin:1.5rem 0 .5rem}p{margin:1rem 0;text-align:justify}code{background:#f0ede6;color:#8b4513;padding:.15em .4em;border-radius:3px;font-family:'SF Mono',monospace;font-size:.9em}pre{background:#2c2c2c;color:#f5f2eb;padding:1.5rem;border-radius:4px;overflow-x:auto;margin:1.5rem 0;font-size:.9em}pre code{background:0 0;color:inherit}ul,ol{margin:1rem 0;padding-left:1.5rem}li{margin:.5rem 0}blockquote{border-left:3px solid #d4af37;padding-left:1rem;margin:1.5rem 0;color:#666;font-style:italic}a{color:#8b4513;text-decoration:underline}hr{border:0;border-top:1px solid #d4af37;margin:2rem 0;opacity:.5}strong{color:#1a1a1a}`,
        wrap: (c) => `<div class="container"><div class="paper">${c}</div></div>`
    },
    swiss: {
        head: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">`,
        css: `*{margin:0;padding:0;box-sizing:border-box}:root{--primary:#ff3b30;--black:#000;--gray:#666;--light-gray:#f5f5f5}body{font-family:'Inter',sans-serif;background:#fff;color:var(--black);line-height:1.6}.container{max-width:900px;margin:0 auto;padding:6rem 3rem}h1{font-weight:800;font-size:4rem;letter-spacing:-.03em;margin-bottom:3rem;line-height:1.1}h2{font-weight:600;font-size:2rem;margin:4rem 0 1.5rem;padding-top:1rem;border-top:4px solid var(--black)}h3{font-weight:600;font-size:1.3rem;margin:2rem 0 .5rem}p{margin:1.2rem 0;font-size:1.1rem;font-weight:300}code{background:var(--light-gray);padding:.2em .4em;border-radius:4px;font-family:'SF Mono',monospace;font-size:.9em}pre{background:var(--black);color:#fff;padding:1.5rem;border-radius:0;overflow-x:auto;margin:2rem 0}pre code{background:0 0;color:inherit}ul,ol{margin:1rem 0;padding-left:1.5rem}li{margin:.8rem 0;font-weight:300}blockquote{border-left:4px solid var(--primary);padding-left:1.5rem;margin:2rem 0;font-size:1.2rem;color:var(--gray)}a{color:var(--black);text-decoration:underline;text-decoration-color:var(--primary)}hr{border:0;border-top:1px solid var(--light-gray);margin:3rem 0}strong{font-weight:600}`,
        wrap: (c) => `<div class="container">${c}</div>`
    },
    pastel: {
        head: `<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500&display=swap" rel="stylesheet">`,
        css: `*{margin:0;padding:0;box-sizing:border-box}:root{--pink:#ffb5c5;--lavender:#c5b4e3;--mint:#b5ead7;--peach:#ffdac1}body{font-family:'Nunito','Noto Sans SC',sans-serif;background:linear-gradient(135deg,#fdfbf7,#fff5f8);color:#4a4a4a;line-height:1.8}.container{max-width:750px;margin:0 auto;padding:4rem 2rem}.card{background:rgba(255,255,255,.9);backdrop-filter:blur(10px);border-radius:24px;padding:3rem;box-shadow:0 8px 32px rgba(255,181,197,.2)}h1{font-size:2.5rem;background:linear-gradient(135deg,#ffb5c5,#c5b4e3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:2rem;font-weight:700}h2{color:#8b7b8b;font-size:1.6rem;margin:2.5rem 0 1rem;font-weight:600}h3{color:#b5ead7;margin:1.5rem 0 .5rem}p{margin:1rem 0}code{background:var(--mint);color:#5a8a7a;padding:.2em .5em;border-radius:8px;font-family:monospace}pre{background:#2d2d3a;color:#e8e8e8;padding:1.5rem;border-radius:16px;overflow-x:auto;margin:1.5rem 0}pre code{background:0 0;color:var(--mint)}ul,ol{margin:1rem 0;padding-left:1.5rem}li{margin:.6rem 0}li::marker{color:var(--pink)}blockquote{background:linear-gradient(135deg,rgba(197,180,227,.2),rgba(255,181,197,.2));border-radius:16px;padding:1.5rem;margin:1.5rem 0;color:#8b7b8b}a{color:#c5b4e3;text-decoration:none;font-weight:500}a:hover{color:var(--pink)}hr{border:0;height:1px;background:linear-gradient(90deg,var(--pink),var(--lavender),var(--mint));margin:2rem 0}strong{color:#ff8fa3}em{color:var(--lavender)}`,
        wrap: (c) => `<div class="container"><div class="card">${c}</div></div>`
    },
    terminal: {
        head: ``,
        css: `*{margin:0;padding:0;box-sizing:border-box}body{background:#0d1117;color:#39ff14;font-family:'SF Mono','Monaco','Inconsolata',monospace;line-height:1.8;font-size:14px}.container{max-width:800px;margin:0 auto;padding:2rem}.cursor::after{content:'█';animation:blink 1s infinite}@keyframes blink{50%{opacity:0}}h1{color:#39ff14;font-size:2rem;margin-bottom:1.5rem;border-bottom:1px dashed #39ff14;padding-bottom:.5rem}h1::before{content:'# '}h2{color:#00ff00;margin:2rem 0 1rem;font-size:1.5rem}h2::before{content:'## '}h3{color:#00cc00;margin:1.5rem 0 .5rem}h3::before{content:'### '}p{margin:.8rem 0}code{background:#161b22;color:#39ff14;padding:.2em .4em;border-radius:3px}pre{background:#161b22;border:1px solid #30363d;padding:1rem;border-radius:6px;overflow-x:auto;margin:1rem 0}pre code{background:0 0}ul,ol{margin:.8rem 0;padding-left:1.5rem}li{margin:.4rem 0}li::marker{color:#00ff00}blockquote{border-left:3px solid #00ff00;padding-left:1rem;margin:1rem 0;color:#8b949e}a{color:#58a6ff;text-decoration:none}a:hover{text-decoration:underline}hr{border:0;border-top:1px solid #30363d;margin:1.5rem 0}strong{color:#ff6b6b}em{color:#ffd93d}`,
        wrap: (c) => `<div class="container"><p class="cursor">$ cat article.md</p>${c}</div>`
    },
    executive: {
        head: `<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet">`,
        css: `*{margin:0;padding:0;box-sizing:border-box}:root{--gold:#c9a227;--dark:#0a0a0a;--text:#e5e5e5}body{font-family:'Source Sans Pro',sans-serif;background:var(--dark);color:var(--text);line-height:1.8}.container{max-width:800px;margin:0 auto;padding:5rem 2rem}.hero{text-align:center;padding:3rem 0;border-bottom:1px solid #333;margin-bottom:3rem}h1{font-family:'Playfair Display',serif;font-size:3.5rem;color:#fff;letter-spacing:.02em;margin-bottom:1rem}.subtitle{color:var(--gold);font-size:1.1rem;letter-spacing:.2em;text-transform:uppercase}h2{font-family:'Playfair Display',serif;font-size:2rem;color:var(--gold);margin:3rem 0 1.5rem;padding-top:1rem;border-top:1px solid #333}h3{color:#fff;margin:2rem 0 .5rem}p{margin:1rem 0;color:#b0b0b0;font-weight:300}code{background:#1a1a1a;color:var(--gold);padding:.2em .5em;border-radius:4px;font-family:monospace}pre{background:#111;border-left:3px solid var(--gold);padding:1.5rem;overflow-x:auto;margin:1.5rem 0}pre code{background:0 0;color:#e5e5e5}ul,ol{margin:1rem 0;padding-left:1.5rem}li{margin:.6rem 0;color:#b0b0b0}blockquote{border-left:3px solid var(--gold);padding:1rem 1.5rem;margin:2rem 0;background:rgba(201,162,39,.1);font-style:italic}a{color:var(--gold);text-decoration:none}a:hover{color:#fff}hr{border:0;border-top:1px solid #333;margin:3rem 0}strong{color:#fff}`,
        wrap: (c) => `<div class="container"><div class="hero"><h1>${title}</h1><div class="subtitle">Executive Summary</div></div>${c}</div>`
    }
};

const s = styles[style] || styles.paper;
const fullHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${s.head}
    <style>${s.css}</style>
</head>
<body>
${s.wrap(html)}
</body>
</html>`;

fs.writeFileSync(outputFile, fullHtml);
console.log('✅ 已转换为 HTML:', outputFile);
