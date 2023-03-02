function gladiatorExpenses(
    lostFightsCount,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
) {
    let totalPrice = 0;
    let shieldBroken = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
                if (i % 2 == 0) {
                    totalPrice += helmetPrice;
                }

                if (i % 3 == 0) {
                    totalPrice += swordPrice;
                }

                if (i % 2 == 0 && i % 3 == 0) {
                    shieldBroken += 1;
                    totalPrice += shieldPrice;
                }

                if (shieldBroken == 2) {
                    shieldBroken = 0;
                    totalPrice += armorPrice;
                }
    }

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
