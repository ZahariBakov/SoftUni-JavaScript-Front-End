function solve(age) {
    let person;
    if (0 <= age && age <= 2) {
        person = 'baby';
    }

    else if (3 <= age && age <= 13) {
        person = 'child';
    }

    else if (14 <= age && age <= 19) {
        person = 'teenager';
    }

    else if (20 <= age && age <= 65) {
        person = 'adult';
    }

    else if (66 <= age) {
        person = 'elder';
    }

    else {
        person = 'out of bounds'
    }

    console.log(person)
}


solve(20);
solve(1);
solve(100);
solve(-1);
