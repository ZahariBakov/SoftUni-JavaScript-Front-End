// Then and Catch blocks:

function loadCommits() {
    const BASE_URL = 'https://api.github.com/repos/'
    const userName = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commits = document.getElementById('commits');
    const loader = document.getElementById('loader');
    const userNameValue = userName.value;
    const repoValue  = repo.value;

    loader.style.display = 'block';
    fetch(`${BASE_URL}${userNameValue}/${repoValue}/commits`, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
            loader.style.display = 'none';
            data
                .forEach(({ commit }) => {
                    const li = document.createElement('li');
                    li.textContent = `${commit.author.name}: ${commit.message}`;
                    commits.appendChild(li);
                })
        })
        .catch((err) => {
            const li = document.createElement('li');
            li.textContent = err.status;
            commits.appendChild(li)
        })

}


// Async way to resolve the task:

// async function loadCommits() {
//     const BASE_URL = 'https://api.github.com/repos/'
//     const userName = document.getElementById('username');
//     const repo = document.getElementById('repo');
//     const commits = document.getElementById('commits');
//     const loader = document.getElementById('loader');
//     const userNameValue = userName.value;
//     const repoValue  = repo.value;

//     try {
//         loader.style.display = 'block';
//         const  allCommitsRes = await fetch(`${BASE_URL}${userNameValue}/${repoValue}/commits`, { method: 'GET' }); //This return: Stream

//         const data = await allCommitsRes.json(); //Parse Stream to JSON

//         loader.style.display = 'none';
//         data
//             .forEach(({ commit }) => {
//                 const li = document.createElement('li');
//                 li.textContent = `${commit.author.name}: ${commit.message}`;
//                 commits.appendChild(li);
//             })
//     }

//     catch(err) {
//         const li = document.createElement('li');
//         li.textContent = err.status;
//         commits.appendChild(li);
//     }
// }