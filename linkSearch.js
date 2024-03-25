// 4. Напишите функцию которая принимает строку, в этой строке
// находит url адрес и заменяет с помощью replace на тег
// домены вида http://site.ru, https://site.com


const text = `Напишите функцию которая принимает строку, в этой строке
находит url адрес и заменяет с помощью replace на тег https://www.alliance-trucks.ru/catalog/truck/kamaz-kompas-9-828854612/
домены вида http://site.ru, https://site.com`;


const usarchUrl = (str) => {
  const urlRegex = /(https?:\/\/[^\s]+\b)/g;
  return str.replace(urlRegex, (url) => {
    const domain = new URL(url).hostname;
    return `<a href="${url}">${domain}</a>`;
  });
};

console.log(usarchUrl(text));
