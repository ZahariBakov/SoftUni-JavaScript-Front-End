function memoryGame(input) {
    let numbersArray = input.shift().split(' ');
    let currentCommand = input.shift();
    let moves = 0;

    while( currentCommand !== 'end') {
        moves ++;
        let [ firstIndex, secondIndex ] = currentCommand.split(' ');
        
        let firstIndexNum = Number(firstIndex);
        let secondIndexNum = Number(secondIndex);

        if(firstIndexNum < 0 || secondIndexNum < 0 || firstIndexNum >= numbersArray.length || secondIndexNum >= numbersArray.length || firstIndexNum === secondIndexNum) {
            let halfArray = numbersArray.length / 2;
            let addElement = [`-${moves}a`, `-${moves}a`];
            numbersArray.splice(halfArray, 0, ...addElement);
            console.log('Invalid input! Adding additional elements to the board');
        }

        else if(numbersArray[firstIndexNum] === numbersArray[secondIndexNum]) {
            console.log(`Congrats! You have found matching elements - ${numbersArray[firstIndex]}!`);

            if(firstIndexNum > secondIndexNum) {
                numbersArray.splice(firstIndexNum, 1);
                numbersArray.splice(secondIndexNum, 1);
            }

            else {
                numbersArray.splice(secondIndexNum, 1);
                numbersArray.splice(firstIndexNum, 1);
            }

            if(numbersArray.length === 0) {
                break;
            } 
        }

        else {
            console.log('Try again!');
        }


        currentCommand = input.shift();
    }

    if(numbersArray.length > 0) {
        console.log(`Sorry you lose :(\n${numbersArray.join(' ')}`);
    }

    else {
        console.log(`You have won in ${moves} turns!`);
    }
}

memoryGame(
    [
        "1 1 2 2 3 3 4 4 5 5", 
        "1 0",
        "-1 0",
        "1 0", 
        "1 0", 
        "1 0", 
        "end"
    ]      
)

memoryGame(
    [
        "a 2 4 a 2 4", 
        "0 3", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
    ]        
)

memoryGame(
    [
        "a 2 4 a 2 4", 
        "4 0", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
    ]        
)