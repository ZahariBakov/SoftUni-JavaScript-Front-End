function multiplicationTable(num) {
    for (let index = 1; index <= 10; index++) {
        let sum = num * index;

        console.log(`${num} X ${index} = ${sum}`);     
    }
}

multiplicationTable(5);
multiplicationTable(2);