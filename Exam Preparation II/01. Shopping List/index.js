function shoppingList(input) {
    let products = input.shift().split('!');

    const commandParser = {
        'Urgent': addProduct,
        'Unnecessary': removeProduct,
        'Correct': changeProducts,
        'Rearrange': moveProduct
    };

    for (const inputLine of input) {
        if(inputLine === 'Go Shopping!') {
            break;
        }
        
        let commandTokens = inputLine.split(' ');
        let command = commandTokens[0];
        commandParser[command](...commandTokens.slice(1));
    }

    function addProduct(item) {
        if(!products.includes(item)) {
            products.unshift(item);
        }
    }

    function removeProduct(item) {
        if(products.includes(item)) {
            let index = products.indexOf(item);
            products.splice(index, 1);
        }
    }

    function changeProducts(oldItem, newItem) {
        if(products.includes(oldItem)) {
            let index = products.indexOf(oldItem);
            products.splice(index, 1, newItem);
        }
    }

    function moveProduct(item) {
        if(products.includes(item)) {
            let index = products.indexOf(item);
            let el = products.splice(index, 1);
            products.push(el);
        }
    }

    console.log(products.join(', '));
    
}

shoppingList(
    [
        "Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"]
);

