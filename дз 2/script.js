let email = prompt('Введіть email');
for (i = 0; i < email.length; i++) {
    if (email.includes('@') == true) {
            if (email.charAt(0) == '@') {
                console.log(`Невірний email`);
            }
            else if (email.slice(-1) == '@') {
                console.log(`Невірний email`);
            }
            else {
                console.log('Email введено вірно')
            }
    }
    else if (email.includes('@') == false) {
        console.log(`Невірний email`);
    }
}