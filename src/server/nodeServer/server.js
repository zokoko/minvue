// 使用一些流行的Web框架或库，例如Express、Koa、Hapi、Fastify等

// node server

const express = require('express');
const bodyParser = require('body-parser');
const testModule = require('./node/test.js');  // 加载同级文件夹中的test.js文件

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handleFile = () => {
  // 处理文件逻辑

  return { message: 'Hello, world!' };
};

app.get('/api', (req, res) => {
  // const result = handleFile();
  const result = testModule.handleFile();  // 调用test.js中的handleFile函数
  res.json(result);
});

app.post('/getNodeRes', (req, res) => {
  // const result = handleFile(req.body);
  // const result = testModule.handleFile(res);  // 调用test.js中的handleFile函数
  // res.json(result);
  res = testModule.handleFile(res)
});

app.listen(3000, () => {
  console.log(`服务器运行在 http://localhost:3000/`);
});
