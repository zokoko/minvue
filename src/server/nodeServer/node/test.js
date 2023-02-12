// test.js
const { spawn } = require('child_process');
const fs = require('fs');

function handleFile (res, body) {
  // 处理文件逻辑 1
  const child = spawn('node', ['node/generate-json.js'], { stdio: 'inherit' });
  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`子进程退出码：${code}`);
      return res.status(500).send('生成JSON文件失败');
    }
    const data = fs.readFileSync('node/data.json', 'utf8');

    const params = {
      data: JSON.parse(data),
      body: body
    }
    res.send(params);
    // res.send(JSON.parse(params));
  });

  return res;
  // return { message: 'Hello, world!66' };
}

function handleRequest (req) {
  // 处理请求逻辑
  return { message: `Hello, ${req.query.name || 'world'}!` };
}

module.exports = { handleFile, handleRequest };
