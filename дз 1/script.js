let str = prompt ('Введіть текст з певною кількістю пробілів');
let res = 0;
for (let i=0; i<str.length; i++){
    if(str.charAt(i)== ' '){
        res += 1;
    }
}
console.log(`Кількість пробілів становить ${res}`)