const fs = require("fs");

//Название файла
const file = "index.html";

//Текст, который запишется в файл
const text = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body
    style="background-color: rgb(0, 0, 0); color: rgba(255, 0, 0, 0.945)"
  ></body>
</html>`;

console.log(
  "Hello, choose your nedd. |1| Create new dir and file  or |2| Delete it"
);
let choose = 2;
if (choose === 1) {
  //Создание папки
  fs.mkdir("./text-files", (err) => {
    //Чтение из файла
    fs.readFile(`./text-files/${file}`, "utf-8", (err, data = "") => {
      //Запись в файл
      fs.writeFile(`./text-files/${file}`, data + text, (err, data = "") => {
        console.log(data + text);
        console.log("The end!");
      });
    });
  });
} else if (choose === 2) {
  //Удаление файла
  fs.unlink(`./text-files/${file}`, () => {
    //Удаление папки
    fs.rmdir(`./text-files`, () => {});
  });
}
