function jsonToObject(jsonString) {
    let data = JSON.parse(jsonString);

    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
    
}

jsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');
jsonToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');