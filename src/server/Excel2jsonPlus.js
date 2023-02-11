// ```
// npm install node-xlsx --save
// ```

// 使用：node Excel2jsonPlus

// ```js
const xlsx = require('node-xlsx')
const fs = require('fs')

function excel2json (excelName, jsonName) {
  // 读取excel文件
  const sheets = xlsx.parse('./' + excelName)

  // 获取第一个sheet
  // const sheet = sheets[0]
  // const sheet = sheets[1]
  const sheet = sheets.filter(a => a.name === 'Roles Permission')
  // console.log('sheets', sheet[0].data)
  // return

  // 获取表格数据
  const rows = sheet[0].data
  // const rows = sheet.data

  // 将表格数据转为json
  // const json = rows?.reduce((acc, row) => {
  //   const key = rows[0]
  //   const value = row[1]
  //   acc[key] = value
  //   return acc
  // }, {})
  const json = rows.map((a, index) => {
    if (index !== 0) {
      const o = {}
      rows[0].forEach((v, i) => {
        o[v] = a[i]
      })
      return o
    }
  })
    .filter(a => a)

  // console.log('json', sheet, json)

  // 将json数据写入文件

  fs.writeFileSync('./' + jsonName, JSON.stringify(json), ['w'])
}

function json2excel (excelName, jsonData) {
  // 读取json数据
  // const data = [
  //   {
  //     name: 'John',
  //     age: 20
  //   },
  //   {
  //     name: 'Smith',
  //     age: 30
  //   }
  // ]
  const data = jsonData

  // 将json数据转换为excel
  const buffer = xlsx.build([
    {
      name: 'sheet1',
      data: data
    }
  ])

  // 将excel写入文件
  fs.writeFileSync(excelName, buffer, { flag: 'w' })
}
