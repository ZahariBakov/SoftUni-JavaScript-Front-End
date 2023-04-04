function solve(input) {
    const numberOfPieces = Number(input.shift());
    const myPieces = {};
    const commands = {
        'Add': addPiece,
        'Remove': removePiece,
        'ChangeKey': changeKey
    }

    for (let i = 0; i < numberOfPieces; i++) {
        const [ piece, composer, key ] = input.shift().split('|');
        myPieces[piece] = { composer, key };
    }

    for (const line of input) {
        if( line === 'Stop') {
            break;
        }

        const currentLine = line.split('|');
        const currentCommand = currentLine[0];
        
        commands[currentCommand](...currentLine.slice(1));

    }

    for (const piece in myPieces) {
        console.log(`${piece} -> Composer: ${myPieces[piece].composer}, Key: ${myPieces[piece].key}`)
    }

    function addPiece( piece, composer, key ) {
        if(myPieces.hasOwnProperty(piece)) {
            console.log(`${piece} is already in the collection!`);
        }

        else {
            myPieces[piece] = { composer, key};
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
    }

    function removePiece( piece ) {
        if(myPieces.hasOwnProperty(piece)) {
            delete myPieces[piece];
            console.log(`Successfully removed ${piece}!`);
        }

        else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKey( piece, newKey ) {
        if(myPieces.hasOwnProperty(piece)) {
            myPieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        }

        else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

}

solve(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
      ]      
);