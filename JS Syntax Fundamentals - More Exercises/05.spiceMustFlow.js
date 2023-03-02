function spiceMustFlow(extractSpicePerDay) {
    let days = 0;
    let totalAmount = 0;

    while (extractSpicePerDay >= 100) {
        totalAmount +=  extractSpicePerDay - 26;
        days ++;
        extractSpicePerDay -= 10;
    }

    totalAmount -= 26;

    if (totalAmount < 0) {
        totalAmount = 0;
    }

    console.log(days);
    console.log(totalAmount);
}

spiceMustFlow(111);
spiceMustFlow(450);