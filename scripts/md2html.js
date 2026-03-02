#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// 解析参数
let inputFile, outputDir, style = 'ppt';

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
    console.log('  ppt      - PPT 幻灯片 (默认)');
    console.log('  neon     - 赛博朋克');
    console.log('  minimal  - 极简白');
    console.log('  elegant  - 暗雅');
    console.log('  paper    - 纸墨风格');
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

// 解析 Markdown 为幻灯片
function parseSlides(md) {
    const slides = [];
    const lines = md.split('\n');
    let currentSlide = { title: '', content: [] ,
    ppt_cute: {
        name: '可爱风格',
        css: `*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;overflow:hidden}body{font-family:'Nunito','Noto Sans SC',sans-serif;background:linear-gradient(135deg,#fff5f7,#f5f0ff);color:#5a5a6e}.slide{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:4rem;text-align:center;opacity:0;position:absolute;width:100%;transition:opacity .5s ease}.slide.active{opacity:1}.slide h1{font-size:3rem;font-weight:700;margin-bottom:2rem;background:linear-gradient(135deg,#ff9a9e,#fad0c4);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.slide h2{font-size:2rem;color:#a78bfa;margin-bottom:1.5rem;font-weight:600}.slide h3{font-size:1.5rem;color:#f9a8d4;margin-bottom:1rem}.slide p{font-size:1.2rem;color:#7c7c8d;max-width:700px;line-height:1.8}.slide li{color:#8b8b9e;margin:.5rem 0}.slide code{background:#fff;padding:.3em .6em;border-radius:8px;color:#a78bfa;box-shadow:0 2px 8px rgba(167,139,250,.2)}.slide pre{background:#fff;border-radius:16px;padding:1.5rem;text-align:left;overflow:auto;max-width:80%;box-shadow:0 4px 20px rgba(255,182,193,.3)}.nav-dots{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);display:flex;gap:.8rem;z-index:100}.nav-dot{width:14px;height:14px;border-radius:50%;background:#e8e8f0;cursor:pointer;transition:all .3s;border:3px solid transparent}.nav-dot.active{background:#ff9a9e;border-color:#ffd1d4;transform:scale(1.2)}.progress-bar{position:fixed;top:0;left:0;height:4px;background:linear-gradient(90deg,#ff9a9e,#a78bfa,#f9a8d4);transition:width .3s;z-index:100}.slide-number{position:fixed;bottom:2rem;right:2rem;color:#b8b8c8;font-size:.9rem;font-weight:600;z-index:100}.hint{position:fixed;bottom:2rem;left:2rem;color:#c8c8d8;font-size:.8rem;z-index:100}`,
        head: `<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">`,
        render: (slides) => {
            const slidesHtml = slides.map((s, i) => {
                const content = s.content.length ? parseToHtml(s.content.join('\n')) : '';
                return `<div class="slide${i===0?' active':''}" data-index="${i}">
                    ${s.title ? `<h1>${s.title}</h1>` : ''}
                    ${content}
                </div>`;
            }).join('');
            
            const dotsHtml = slides.map((_, i) => `<div class="nav-dot${i===0?' active':''}" data-index="${i}"></div>`).join('');
            
            return `<div class="progress-bar" id="progress"></div>
    <div class="slides-container" id="slides">${slidesHtml}</div>
    <div class="nav-dots" id="dots">${dotsHtml}</div>
    <div class="slide-number" id="slideNumber">1 / ${slides.length}</div>
    <div class="hint">← → 键切换 | 滚轮切换</div>
    <script>
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.nav-dot');
        const progress = document.getElementById('progress');
        const slideNumber = document.getElementById('slideNumber');
        let current = 0;
        const total = slides.length;
        
        function show(index) {
            slides.forEach((s, i) => s.classList.toggle('active', i === index));
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
            progress.style.width = ((index + 1) / total * 100) + '%';
            slideNumber.textContent = (index + 1) + ' / ' + total;
            current = index;
        }
        
        dots.forEach(d => d.addEventListener('click', () => show(+d.dataset.index)));
        
        document.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight' || e.key === ' ') show((current + 1) % total);
            if (e.key === 'ArrowLeft') show((current - 1 + total) % total);
        });
        
        let ticking = false;
        document.addEventListener('wheel', e => {
            if (!ticking) {
                ticking = true;
                setTimeout(() => {
                    if (e.deltaY > 0) show((current + 1) % total);
                    else show((current - 1 + total) % total);
                    ticking = false;
                }, 500);
            }
        });
        
        show(0);
    </script>`;
        }
    }
}
    let inCodeBlock = false;
    
    for (let line of lines) {
        // 代码块处理
        if (line.startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            currentSlide.content.push(line);
            continue;
        }
        
        // 新幻灯片：# 标题 或 ## 二级标题
        if (!inCodeBlock && line.match(/^#{1,2}\s+/) && !line.match(/^###/)) {
            if (currentSlide.title || currentSlide.content.length) {
                slides.push(currentSlide);
            }
            currentSlide = { title: line.replace(/^#+\s+/, ''), content: [] };
        } else if (!inCodeBlock && line.match(/^###\s+/)) {
            // 三级标题作为内容标题
            currentSlide.content.push(line);
        } else {
            currentSlide.content.push(line);
        }
    }
    
    if (currentSlide.title || currentSlide.content.length) {
        slides.push(currentSlide);
    }
    
    return slides;
}

// Markdown 转 HTML（单页）
function parseToHtml(md) {
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
    
    const lines = html.split('\n');
    const result = [];
    let inUl = false;
    for (let line of lines) {
        line = line.trim();
        if (!line) { if (inUl) { result.push('</ul>'); inUl = false; } continue; }
        if (line.match(/^<h[1-6]|<pre|<blockquote|<hr|<img/)) { if (inUl) { result.push('</ul>'); inUl = false; } result.push(line); }
        else if (line.startsWith('<li>')) { if (!inUl) { result.push('<ul>'); inUl = true; } result.push(line); }
        else { if (inUl) { result.push('</ul>'); inUl = false; } result.push('<p>' + line + '</p>'); }
    }
    if (inUl) result.push('</ul>');
    return result.join('\n');
}

// PPT 风格
const styles = {
    ppt: {
        name: 'PPT 幻灯片',
        css: `*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;overflow:hidden}body{font-family:'Noto Sans SC',sans-serif;background:#000;color:#fff}.slides-container{height:100vh;overflow:hidden;position:relative}.slide{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:4rem;text-align:center;opacity:0;position:absolute;width:100%;transition:opacity .5s ease}.slide.active{opacity:1}.slide h1{font-size:3.5rem;font-weight:700;margin-bottom:2rem}.slide h2{font-size:2.5rem;color:#ff6b6b;margin-bottom:1.5rem}.slide h3{font-size:1.8rem;margin-bottom:1rem}.slide p{font-size:1.3rem;max-width:800px;line-height:1.8;color:#aaa}.slide img{max-height:60vh;object-fit:contain}.slide ul,.slide ol{text-align:left;font-size:1.2rem}.slide li{margin:.8rem 0}.slide code{background:#333;padding:.3em .6em;border-radius:4px}.slide pre{background:#1a1a1a;padding:1.5rem;border-radius:8px;text-align:left;overflow:auto;max-width:90%}.nav-dots{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);display:flex;gap:.5rem;z-index:100}.nav-dot{width:12px;height:12px;border-radius:50%;background:#444;cursor:pointer;transition:all .3s}.nav-dot.active{background:#fff;transform:scale(1.2)}.progress-bar{position:fixed;top:0;left:0;height:4px;background:linear-gradient(90deg,#ff6b6b,#feca57);transition:width .3s;z-index:100}.slide-number{position:fixed;bottom:2rem;right:2rem;color:#666;font-size:1rem;z-index:100}.hint{position:fixed;bottom:2rem;left:2rem;color:#444;font-size:.8rem;z-index:100}`,
        head: `<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">`,
        render: (slides) => {
            const slidesHtml = slides.map((s, i) => {
                const content = s.content.length ? parseToHtml(s.content.join('\n')) : '';
                return `<div class="slide${i===0?' active':''}" data-index="${i}">
                    ${s.title ? `<h1>${s.title}</h1>` : ''}
                    ${content}
                </div>`;
            }).join('');
            
            const dotsHtml = slides.map((_, i) => `<div class="nav-dot${i===0?' active':''}" data-index="${i}"></div>`).join('');
            
            return `<div class="progress-bar" id="progress"></div>
    <div class="slides-container" id="slides">${slidesHtml}</div>
    <div class="nav-dots" id="dots">${dotsHtml}</div>
    <div class="slide-number" id="slideNumber">1 / ${slides.length}</div>
    <div class="hint">← → 键切换 | 滚轮切换</div>
    <script>
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.nav-dot');
        const progress = document.getElementById('progress');
        const slideNumber = document.getElementById('slideNumber');
        let current = 0;
        const total = slides.length;
        
        function show(index) {
            slides.forEach((s, i) => s.classList.toggle('active', i === index));
            dots.forEach((d, i) => d.classList.toggle('active', i === index));
            progress.style.width = ((index + 1) / total * 100) + '%';
            slideNumber.textContent = (index + 1) + ' / ' + total;
            current = index;
        }
        
        dots.forEach(d => d.addEventListener('click', () => show(+d.dataset.index)));
        
        document.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight' || e.key === ' ') show((current + 1) % total);
            if (e.key === 'ArrowLeft') show((current - 1 + total) % total);
        });
        
        let ticking = false;
        document.addEventListener('wheel', e => {
            if (!ticking) {
                ticking = true;
                setTimeout(() => {
                    if (e.deltaY > 0) show((current + 1) % total);
                    else show((current - 1 + total) % total);
                    ticking = false;
                }, 500);
            }
        });
        
        show(0);
    </script>`;
        }
    },
    neon: {
        name: '赛博朋克',
        css: `*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;overflow:hidden}body{font-family:'Rajdhani',sans-serif;background:#0a0a0f;color:#00fff2}.slide{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:4rem;text-align:center;opacity:0;position:absolute;width:100%;transition:opacity .5s}.slide.active{opacity:1}.slide h1{font-family:'Orbitron',sans-serif;font-size:3.5rem;color:#ff00ff;text-shadow:0 0 30px #ff00ff;margin-bottom:2rem}.slide h2{font-size:2rem;color:#00fff2;margin-bottom:1.5rem}.slide p{font-size:1.3rem;color:#e0e0e0}.nav-dots{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);display:flex;gap:.5rem}.nav-dot{width:10px;height:10px;border-radius:50%;background:#333}.nav-dot.active{background:#ff00ff;box-shadow:0 0 10px #ff00ff}`,
        head: `<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&display=swap" rel="stylesheet">`,
        render: (slides) => {
            const slidesHtml = slides.map((s, i) => {
                const content = s.content.length ? parseToHtml(s.content.join('\n')) : '';
                return `<div class="slide${i===0?' active':''}">${s.title ? `<h1>${s.title}</h1>` : ''}${content}</div>`;
            }).join('');
            return slidesHtml + `<script>
                const slides=document.querySelectorAll('.slide'),dots=document.querySelectorAll('.nav-dot');
                let c=0;
                function show(i){slides.forEach((s,x)=>s.classList.toggle('active',x===i));dots.forEach((d,x)=>d.classList.toggle('active',x===i));c=i;}
                dots.forEach(d=>d.onclick=()=>show(+d.dataset.index));
                document.onkeydown=e=>{if(e.key==='ArrowRight')show((c+1)%slides.length);if(e.key==='ArrowLeft')show((c-1+slides.length)%slides.length)};
                let t=false;document.onwheel=e=>{if(!t){t=true;setTimeout(()=>{show(e.deltaY>0?(c+1)%slides.length:(c-1+slides.length)%slides.length);t=false},500)}};
                show(0);
            </script>`;
        }
    },
    minimal: {
        name: '极简白',
        css: `*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;overflow:hidden}body{font-family:'Inter',sans-serif;background:#fff;color:#000}.slide{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:4rem;text-align:center;opacity:0;position:absolute;width:100%;transition:opacity .4s}.slide.active{opacity:1}.slide h1{font-size:3rem;font-weight:600;letter-spacing:-.02em;margin-bottom:1.5rem}.slide h2{font-size:1.8rem;font-weight:400;color:#666}.slide p{font-size:1.1rem;color:#888;max-width:600px;line-height:1.8}.nav-dot{width:8px;height:8px;border-radius:50%;background:#ddd}.nav-dot.active{background:#000}`,
        head: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">`,
        render: (slides) => {
            const slidesHtml = slides.map((s, i) => {
                const content = s.content.length ? parseToHtml(s.content.join('\n')) : '';
                return `<div class="slide${i===0?' active':''}">${s.title ? `<h1>${s.title}</h1>` : ''}${content}</div>`;
            }).join('');
            return slidesHtml + `<script>
                const slides=document.querySelectorAll('.slide');
                let c=0;
                function show(i){slides.forEach((s,x)=>s.classList.toggle('active',x===i));c=i;}
                document.onkeydown=e=>{if(e.key==='ArrowRight')show((c+1)%slides.length);if(e.key==='ArrowLeft')show((c-1+slides.length)%slides.length)};
                let t=false;document.onwheel=e=>{if(!t){t=true;setTimeout(()=>{show(e.deltaY>0?(c+1)%slides.length:(c-1+slides.length)%slides.length);t=false},500)}};
                show(0);
            </script>`;
        }
    },
    elegant: {
        name: '暗雅',
        css: `*{margin:0;padding:0;box-sizing:border-box}html,body{height:100%;overflow:hidden}body{font-family:'Lato',sans-serif;background:#1a1a1a;color:#f0f0f0}.slide{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:4rem;text-align:center;opacity:0;position:absolute;width:100%;transition:opacity .6s}.slide.active{opacity:1}.slide h1{font-family:'Playfair Display',serif;font-size:3rem;margin-bottom:1.5rem;background:linear-gradient(135deg,#f0f0f0,#c0c0c0);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.slide h2{font-size:1.6rem;color:#a0a0a0;font-weight:300}.slide p{font-size:1.1rem;color:#808080}`,
        head: `<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400&display=swap" rel="stylesheet">`,
        render: (slides) => {
            const slidesHtml = slides.map((s, i) => {
                const content = s.content.length ? parseToHtml(s.content.join('\n')) : '';
                return `<div class="slide${i===0?' active':''}">${s.title ? `<h1>${s.title}</h1>` : ''}${content}</div>`;
            }).join('');
            return slidesHtml + `<script>
                const slides=document.querySelectorAll('.slide');
                let c=0;
                function show(i){slides.forEach((s,x)=>s.classList.toggle('active',x===i));c=i;}
                document.onkeydown=e=>{if(e.key==='ArrowRight')show((c+1)%slides.length);if(e.key==='ArrowLeft')show((c-1+slides.length)%slides.length)};
                let t=false;document.onwheel=e=>{if(!t){t=true;setTimeout(()=>{show(e.deltaY>0?(c+1)%slides.length:(c-1+slides.length)%slides.length);t=false},500)}};
                show(0);
            </script>`;
        }
    }
};

const s = styles[style] || styles.ppt;
const slides = parseSlides(md);

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
${s.render(slides)}
</body>
</html>`;

fs.writeFileSync(outputFile, fullHtml);
console.log('✅ 已转换为 HTML:', outputFile);
console.log('📊 幻灯片数量:', slides.length);
