function solve(input) {
    let horses = input.shift().split('|');
    
    const commands = {
        'Retake': retake,
        'Trouble': trouble,
        'Rage': rage,
        'Miracle': miracle
    }

    for (const line of input) {
        const currentLine = line.split(' ');
        const currentCommand = currentLine[0];

        if(currentCommand === 'Finish') {
            break;
        }

        commands[currentCommand](...currentLine.slice(1));
    }

    function retake(slower, fast) {
        const slowerIndex = horses.indexOf(slower);
        const fastIndex = horses.indexOf(fast);
        
        if(slowerIndex < fastIndex) {
            horses.splice(slowerIndex, 1, fast);
            horses.splice(fastIndex, 1, slower);
            console.log(`${slower} retakes ${fast}.`);
        }
    }

    function trouble(name) {
        const index = horses.indexOf(name);

        if(index > 0) {
            horses.splice(index, 1);
            const newIndex = index - 1;
            horses.splice(newIndex, 0, name);
            console.log(`Trouble for ${name} - drops one position.`);
        }
    }

    function rage(name) {
        const index = horses.indexOf(name);

        horses.splice(index, 1);
        horses.splice(index + 2, 0, name);

        console.log(`${name} rages 2 positions ahead.`);
    }

    function miracle() {
        const name = horses.shift();
        horses.push(name)
        console.log(`What a miracle - ${name} becomes first.`);
    }

    console.log(horses.join('->'));

    const winner = horses.pop();
    console.log(`The winner is: ${winner}`);

}

// solve(
//     ['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish']
// );

solve(
    ['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish']
);

// solve(
//     ['Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly']
// );
