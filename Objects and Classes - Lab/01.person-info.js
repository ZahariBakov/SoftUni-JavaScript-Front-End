function personInfo(firstName, lastName, age) {
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.age = age;
    age = Number(age);

    const person = {firstName, lastName, age};

    return person;
}

console.log(
    personInfo(
    "Peter", 
    "Pan",
    "20"
    )
);

console.log(
    personInfo(
        "George", 
        "Smith",
        "18"
        )
);