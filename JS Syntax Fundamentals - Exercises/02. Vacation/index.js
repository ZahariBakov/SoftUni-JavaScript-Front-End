function solve(people, type, day) {
    let price;
    let totalPrice;

    if (type === 'Students') {
        if (day === 'Friday') {
            price = 8.45;
        }

        else if (day === 'Saturday') {
            price = 9.80;
        }

        else {
            price = 10.46;
        }

        totalPrice = price * people

        if (people >= 30) {
            totalPrice -= totalPrice * 0.15
        }
    }

    else if (type === 'Business') {
        if (day === 'Friday') {
            price =10.90;
        }

        else if (day === 'Saturday') {
            price = 15.60;
        }

        else {
            price = 16;
        }

        totalPrice = price * people

        if (people >= 100) {
            totalPrice -= price * 10
        }
    }

    else {
        if (day === 'Friday') {
            price =15;
        }

        else if (day === 'Saturday') {
            price = 20;
        }

        else {
            price = 22.50;
        }

        totalPrice = price * people

        if (people >= 10 && people <= 20) {
            totalPrice -= totalPrice * 0.05
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}


solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
