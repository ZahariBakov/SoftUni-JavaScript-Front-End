function townsParser(array) {
    // First decision:
    // for (const line of array) {
    //     let [town, latitude, longitude] = line.split(' | ');
    //     let townObj = {town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)}
    //     console.log(townObj);
    // }

    // Second decision:
    let newArray =  array
        .map((line) => line.split(' | '))
        .map(([town, latitude, longitude]) => ({town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)}))
        .forEach((townObj) => console.log(townObj));
}

townsParser(
    ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

townsParser(
    ['Plovdiv | 136.45 | 812.575']
);
