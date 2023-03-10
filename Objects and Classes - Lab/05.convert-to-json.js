function objToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(person));
}

objToJSON('George', 'Jones', 'Brown');
objToJSON('Peter', 'Smith', 'Blond');