#!/usr/bin/env node
/**
 * 卡片截图工具 - 修复版
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

async function captureCards(htmlFile, outputDir = './screenshots') {
    if (!fs.existsSync(htmlFile)) {
        console.error('❌ 文件不存在:', htmlFile);
        process.exit(1);
    }

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    let htmlContent = fs.readFileSync(htmlFile, 'utf8');
    
    // 修复相对路径
    const htmlDir = path.dirname(htmlFile);
    htmlContent = htmlContent.replace(/src="\.\.\//g, `src="file://${htmlDir}/../`);

    const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
    const baseName = titleMatch ? titleMatch[1] : path.basename(htmlFile, '.html');

    console.log('📷 卡片截图工具 (修复版)');
    console.log('===========================');
    console.log('HTML:', htmlFile);
    console.log('输出:', outputDir);
    console.log('');

    const tempHtml = path.join(outputDir, '_temp_cards.html');
    fs.writeFileSync(tempHtml, htmlContent);

    let browser;
    try {
        console.log('🚀 启动浏览器...');
        browser = await chromium.launch();
        const page = await browser.newPage({
            viewport: { width: 1080, height: 1440 }
        });

        await page.goto('file://' + tempHtml, { waitUntil: 'networkidle', timeout: 30000 });
        
        // 等待字体和图片加载
        await page.waitForTimeout(5000);
        
        // 等待所有资源加载完成
        await page.evaluate(async () => {
            return document.fonts.ready;
        });

        // 查找卡片
        const cards = await page.$$('.card-slot');
        
        console.log(`📷 找到 ${cards.length} 个卡片`);
        console.log('');

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            
            const cardText = await card.$eval('h1, h2', el => el.textContent).catch(() => `card-${i+1}`);
            const cardName = cardText.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_').substring(0, 30);
            
            const outputFile = path.join(outputDir, `${String(i+1).padStart(2, '0')}_${cardName}.png`);
            
            await card.screenshot({ 
                path: outputFile,
                omitBackground: false
            });
            
            console.log(`✅ 截图 ${i+1}/${cards.length}: ${path.basename(outputFile)}`);
        }

        console.log('');
        console.log('🎉 完成！');
        console.log('截图保存在:', outputDir);

    } catch (err) {
        console.error('❌ 错误:', err.message);
        process.exit(1);
    } finally {
        if (browser) await browser.close();
        if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
    }
}

const htmlFile = process.argv[2];
const outputDir = process.argv[3] || './screenshots';

if (!htmlFile) {
    console.log('用法: node screenshot-cards.js <html文件> [输出目录]');
    process.exit(1);
}

captureCards(htmlFile, outputDir);
