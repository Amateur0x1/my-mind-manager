#!/usr/bin/env node
/**
 * 卡片截图工具
 * 使用 puppeteer 将 HTML 中的每个卡片截图为单独图片
 * 
 * 使用方法:
 *   node screenshot-cards.js <html文件> [输出目录]
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

async function captureCards(htmlFile, outputDir = './screenshots') {
    if (!fs.existsSync(htmlFile)) {
        console.error('❌ 文件不存在:', htmlFile);
        process.exit(1);
    }

    // 创建输出目录
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const htmlContent = fs.readFileSync(htmlFile, 'utf8');
    
    // 提取 title
    const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
    const baseName = titleMatch ? titleMatch[1] : path.basename(htmlFile, '.html');

    console.log('📷 卡片截图工具');
    console.log('================');
    console.log('HTML:', htmlFile);
    console.log('输出:', outputDir);
    console.log('');

    // 创建临时 HTML 文件，只包含卡片内容
    // 需要注入基础样式
    let cardHtml = htmlContent;
    
    // 如果没有完整的 HTML 结构，包装一下
    if (!cardHtml.includes('<!DOCTYPE html>')) {
        cardHtml = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>${cardHtml}</body></html>`;
    }

    const tempHtml = path.join(outputDir, '_temp_cards.html');
    fs.writeFileSync(tempHtml, cardHtml);

    let browser;
    try {
        console.log('🚀 启动浏览器...');
        browser = await chromium.launch();
        const page = await browser.newPage({
            viewport: { width: 1080, height: 1440 }
        });

        // 加载 HTML
        const htmlUrl = 'file://' + tempHtml;
        await page.goto(htmlUrl, { waitUntil: 'networkidle' });
        
        // 等待卡片加载
        await page.waitForTimeout(1000);

        // 查找所有卡片
        const cards = await page.$$('.card, .card-slot, .slide, section');
        
        console.log(`� Found ${cards.length} cards/slides`);
        console.log('');

        if (cards.length === 0) {
            console.log('❌ 未找到卡片元素');
            console.log('请检查 HTML 中是否有 .card 或 .slide 类名');
            process.exit(1);
        }

        // 对每个卡片截图
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            
            try {
                // 获取卡片内容作为名字
                const cardText = await card.$eval('h1, h2', el => el.textContent).catch(() => `card-${i+1}`);
                const cardName = cardText.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_').substring(0, 30);
                
                const outputFile = path.join(outputDir, `${String(i+1).padStart(2, '0')}_${cardName}.png`);
                
                // 截图
                await card.screenshot({ 
                    path: outputFile,
                    omitBackground: false
                });
                
                console.log(`✅ 截图 ${i+1}/${cards.length}: ${path.basename(outputFile)}`);
            } catch (err) {
                console.log(`⚠️  截图 ${i+1} 失败:`, err.message);
            }
        }

        console.log('');
        console.log('🎉 完成！');
        console.log('截图保存在:', outputDir);

    } catch (err) {
        console.error('❌ 错误:', err.message);
        process.exit(1);
    } finally {
        if (browser) {
            await browser.close();
        }
        // 清理临时文件
        if (fs.existsSync(tempHtml)) {
            fs.unlinkSync(tempHtml);
        }
    }
}

// 主入口
const htmlFile = process.argv[2];
const outputDir = process.argv[3] || './screenshots';

if (!htmlFile) {
    console.log('用法: node screenshot-cards.js <html文件> [输出目录]');
    console.log('');
    console.log('示例:');
    console.log('  node screenshot-cards.js index.html');
    console.log('  node screenshot-cards.js index.html ./images');
    process.exit(1);
}

captureCards(htmlFile, outputDir);
