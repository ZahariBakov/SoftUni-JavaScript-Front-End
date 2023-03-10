function addressBook(array) {
    let names = {};

    for (const line of array) {
        let [name, address] = line.split(':');
        names[name] = address;
    }

    let sortedNames = Object.keys(names).sort((a, b) => a.localeCompare(b));

    for (const name of sortedNames) {
        console.log(`${name} -> ${names[name]}`);
    }
}

addressBook(
    ['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);

addressBook(
    ['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);

