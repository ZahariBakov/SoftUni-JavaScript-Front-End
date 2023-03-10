function phoneBook(input) {
    let result = {};

    for (const line of input) {
        let [personName, personNumber] = line.split(' ');
        result[personName] = personNumber;
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}

phoneBook(
    ['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);

phoneBook(
    ['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);
