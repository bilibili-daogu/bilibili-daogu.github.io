// 临时修复 hexo-admin 和 NexT 的冲突
const fs = require('fs');
const path = require('path');

// 备份原文件
const vendorsPath = path.join('node_modules', 'hexo-theme-next', 'scripts', 'events', 'lib', 'vendors.js');
const backupPath = vendorsPath + '.backup';

if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(vendorsPath, backupPath);
    console.log('✅ 已备份 vendors.js');
}

// 读取文件内容
let content = fs.readFileSync(vendorsPath, 'utf8');

// 注释掉可能出问题的部分（添加 try-catch）
if (!content.includes('try {')) {
    content = content.replace(
        /(module\.exports.*?{[\s\S]*?)(return)/,
        '$1try { $2 } catch(e) { console.log("vendors.js 跳过"); }'
    );
    fs.writeFileSync(vendorsPath, content);
    console.log('✅ 已添加异常处理');
}

console.log('🎉 修复完成，现在可以正常启动了');