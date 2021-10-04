let str = prompt ('Введіть сайт');
if (str.includes('https:')){
    console.log(str.slice(8));
}
else if(str.includes('http:')){
    console.log(str.slice(7));
}