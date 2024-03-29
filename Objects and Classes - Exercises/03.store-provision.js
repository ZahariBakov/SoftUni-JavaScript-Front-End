function storeProvision(current, order) {
    // First decision:
    // let combined = [...current, ...order];
    // let store = {};

    // for (let i = 0; i < combined.length; i += 2) {
    //     let prop = combined[i];
    //     if (!store.hasOwnProperty(prop)) {
    //         store[prop] = 0;
    //     }

    //     store[prop] += Number(combined[i + 1]);
    // }

    // for (const key in store) {
    //     console.log(`${key} -> ${store[key]}`);
    // }

    // Second decision:
    let combined = [...current, ...order];
    let store = combined.reduce((data, currentValue, index) => {
        if(index % 2 === 0) {
            if (!data.hasOwnProperty(currentValue)) {
                data[currentValue] = 0;
            }
        }
        
        else {
            let value = Number(currentValue);
            let previousProp = combined[index - 1];
            data[previousProp] += value;
        }

        return data
    }, {});

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storeProvision(
    [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]        
);

storeProvision(
    [
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]        
);