function inventory(input) {
    let heroes = [];

    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        let hero = {
            'name': name,
            'level': Number(level),
            'items': items
        };

        heroes.push(hero);
    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (const {name, level, items} of sortedHeroes) {
        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
    }
}

inventory(
    [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]        
);