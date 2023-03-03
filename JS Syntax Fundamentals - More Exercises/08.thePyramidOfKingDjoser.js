function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let step = Math.ceil(base / 2); 
    let height = Math.floor(step * increment);

    for (let i = 1; i <= step; i++) {
        let square = (base - 2) ** 2;
        if ((base - 2) > 0) {
            stone += square * increment;
        }

        let perimeter = base * 4 - 4;
        if (perimeter < 1) {
            perimeter = 1
        }
        if (i == step) {
            gold = perimeter * increment;
        }
        else if (i % 5 == 0) {
            lapis += perimeter * increment;
        }

        else {
            marble += perimeter * increment;
        }

        base -= 2;
        
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}

// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
// thePyramidOfKingDjoser(23, 0.5);
