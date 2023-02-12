const fs = require('fs');

// 要写入的数据
const data = [
  { city: '北京', name: '张三' },
  { city: '上海', name: '李四' }
];

// 将数据转换为JSON字符串
const jsonData = JSON.stringify(data);

// 将JSON字符串写入文件
fs.writeFile('node/data.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error(`写入文件出错: ${err}`);
    return;
  }
  console.log('文件已保存');
});
