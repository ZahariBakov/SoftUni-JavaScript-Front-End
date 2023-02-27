function listOfNames(names) {
    return [...names]
        .sort((a, b) => a.localeCompare(b))
        .map((name, i) => `${i + 1}.${name}`)
        .join(`\n`);
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
