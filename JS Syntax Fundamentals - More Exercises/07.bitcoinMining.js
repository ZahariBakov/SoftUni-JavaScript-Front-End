function bitcoinMining(numbers) {
    let money = 0;
    let bitcoin = 0;
    let firstDayBuyBitcoin = 0;
    let arrayLength = numbers.length;

    for (let day = 1; day <= arrayLength; day++) {
        if (day % 3 == 0) {
            money += (numbers.shift() * 0.7) * 67.51;
        }

        else {
            money += numbers.shift() * 67.51;
        }
        
        if (money >= 11949.16) {
            if (firstDayBuyBitcoin == 0) {
                firstDayBuyBitcoin = day;
            }

            while (money >= 11949.16) {
                money -= 11949.16;
                bitcoin ++;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoin}`);

    if (firstDayBuyBitcoin != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBuyBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);