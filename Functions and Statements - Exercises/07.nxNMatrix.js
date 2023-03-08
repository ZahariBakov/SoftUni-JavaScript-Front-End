// First decision:
function nxNMatrix(num) {
    let matrix  = [];

    for (let i = 0; i < num; i++) {
        let row = [];
        for (let j = 0; j < num; j++) {
            row.push(num);
        }

        matrix.push(row);
    }

    matrix.forEach((row) => console.log(row.join(' ')));
}

nxNMatrix(3);
nxNMatrix(7);
nxNMatrix(2);


// Second decision:
// (num) => new Array(num).fill(new Array(num).fill(num)).forEach(row => console.log(row.join(' ')));