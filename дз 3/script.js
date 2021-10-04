let str =  prompt ('Введіть текст для підрахунку кількості html').toUpperCase();
let res = 0;
for (let i=0; i<str.length; i++){
    if(str.includes('HTML',i)){
        res += 1;
        let index = str.indexOf('HTML',i);
        i=index;
    }
}
console.log(`Кількість слів html становить ${res}`)