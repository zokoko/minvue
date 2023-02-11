
import xlrd
import json


def excel2json(excelName, jsonName):
    # 打开文件 python Excel2jsonPlus.py
    workbook = xlrd.open_workbook(excelName)

    # 根据sheet索引或者名称获取sheet内容
    # sheet1 = workbook.sheet_by_index(0) # sheet索引从0开始
    sheet1 = workbook.sheet_by_name('11')

    # 获取行数和列数
    nrows = sheet1.nrows
    ncols = sheet1.ncols

    # 定义excel_data
    excel_data = []

    # 获取各行内容
    for row in range(1, nrows):
        row_data = {}
        # 获取各单元格内容
        for col in range(ncols):
            ctype = sheet1.cell(row, col).ctype  # 表格的数据类型
            cell = sheet1.cell_value(row, col)
            if ctype == 2 and cell % 1 == 0:  # 如果是整形
                cell = int(cell)
            elif ctype == 3:
                # 转成datetime对象
                date = datetime(*xldate_as_tuple(cell, 0))
                cell = date.strftime('%Y/%d/%m %H:%M:%S')
            elif ctype == 4:
                cell = True if cell == 1 else False
            row_data[sheet1.row_values(0)[col]] = cell
        excel_data.append(row_data)

    # 将excel_data转换为json
    json_data = json.dumps(excel_data, ensure_ascii=False)
    with open(jsonName, 'w', encoding='utf-8') as f:
        f.write(json_data)
