function piccolo(array) {
    // First decision:
    // let parkedCar = [];

    // for (const line of array) {
    //     let [command, carNumber] = line.split(', ');
    //     if (command === 'IN' && !parkedCar.includes(carNumber)){
    //        parkedCar.push(carNumber);
    //     }

    //     else if (command === 'OUT' && parkedCar.includes(carNumber)) {
    //         let index = parkedCar.indexOf(carNumber)
    //         parkedCar.splice(index, 1);
    //     }
    // }

    // if (parkedCar.length === 0) {
    //     console.log('Parking Lot is Empty');
    // }

    // else {
    //     sortedNumbers = parkedCar.sort((a, b) => a.localeCompare(b));
    //     console.log(sortedNumbers.join('\n'));
    // }

    // Second decision - with 'Sort function':
    let parkedCar = new Set();

    for (const line of array) {
        let [command, carNumber] = line.split(', ');

        if (command === "IN") {
            parkedCar.add(carNumber);
        }

        else {
            parkedCar.delete(carNumber);
        }
    }

    let sortedNumbers = [...parkedCar.keys()].sort((a, b) => a.localeCompare(b));
    sortedNumbers
        .forEach((number) => {
            console.log(number);
        })
}

piccolo(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

piccolo(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);