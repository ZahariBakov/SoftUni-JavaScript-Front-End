function employeesParser(array) {
    // First decision:
    // let employees = {};

    // for (const employee of array) {
    //     employees[employee] = employee.length;
    // }

    // for (const employee in employees) {
    //     console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
    // }

    // Second decision:
    Object.entries(
        array.reduce((data, employee) => {
            data[employee] = employee.length;
            return data;
        }, {})
    ).forEach(([employee, length]) => {
        console.log(`Name: ${employee} -- Personal Number: ${length}`);
    })
}

employeesParser(
    [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]        
);

employeesParser(
    [
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]        
);