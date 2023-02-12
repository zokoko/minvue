const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handleFile = () => {
  // 处理文件逻辑
  return { message: 'Hello, world!' };
};

app.get('/api', (req, res) => {
  const result = handleFile();
  res.json(result);
});

app.post('/getNodeRes', (req, res) => {
  const result = handleFile(req.body);
  res.json(result);
});

app.listen(3000, () => {
  console.log(`服务器运行在 http://localhost:3000/`);
});
