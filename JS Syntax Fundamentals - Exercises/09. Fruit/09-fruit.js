function fruit(fruit, grams, pricePerKilos) {
    let kilograms = grams / 1000;
    let price = kilograms * pricePerKilos;

    console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);