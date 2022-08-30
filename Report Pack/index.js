
import { s3Client, s3params, uploadObject } from "./dataset_s3_fetch.mjs"
import { Workbook } from "exceljs";



var workbook = new Workbook()
workbook.xlsx.readFile('index.xlsx')//Change file name here or give file path
.then(function() {
    uploadObject();
    var worksheet = workbook.getWorksheet('Sheet1');
    var i=1;
    worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
      r=worksheet.getRow(i).values;
      r1=r[2];// Indexing a column
      console.log(r[2]);
      i++;
    }); 
    worksheet.getCell('B3').value = "abc";//Change the cell number here
return workbook.xlsx.writeFile('file.xlsx')//Change file name here or give     file path
   });
