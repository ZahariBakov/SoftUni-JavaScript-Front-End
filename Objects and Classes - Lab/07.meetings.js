function meetingsParser(array) {
    let meetings = {};

    for (const line of array) {
        let [day, name] = line.split(' ');

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }

        else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

meetingsParser(
    ['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);

meetingsParser(
    ['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);