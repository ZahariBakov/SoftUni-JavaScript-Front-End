function login(arr) {
    let userName = arr.shift();
    let password = '';

    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i];
        
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === password) {
            console.log(`User ${userName} logged in.`)
            break
        }

        else if (i === 3) {
            console.log(`User ${userName} blocked!`)
            break
        }

        else {
            console.log('Incorrect password. Try again.')
        }
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);