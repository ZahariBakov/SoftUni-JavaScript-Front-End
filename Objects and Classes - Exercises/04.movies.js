function moviesParser(input) {
    let movies = [];

    for (const line of input) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            addMovie(name);
        }

        else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            directedBy(name, director);
        }

        else {
           let [name, date] = line.split(' onDate ');
           onDate(name, date);
        }
    }

    for (const movie of movies) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }

    function addMovie(name) {
        movies.push({ name });
    }

    function directedBy(name, director) {
        let movie = movies.find((m) => m.name === name);
        if (movie) {
            movie.director = director;
        }
    }

    function onDate(name, date) {
        let movie = movies.find((m) => m.name === name);
        if (movie) {
            movie.date = date;
        }
    }
}

// moviesParser(
//     [
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
//     ]        
// );

moviesParser(
    [
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]        
);