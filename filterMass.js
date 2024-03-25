// Напишите функцию которая может перебрать такой массив и отфильтрует его
// оставив только имена файлов с расширениями .js .jsx .ts

const mass = ['module.jsx', 'index.html', 'style.css',
  'index.js', 'file.ts', 'library.css', 'my.plugin.js'];


export const filterName = (arr) => {
  const regex = /.(js|jsx|ts)/mi;
  const newArr = arr.filter((item) => regex.test(item));
  return newArr;
};

console.log(filterName(mass));
