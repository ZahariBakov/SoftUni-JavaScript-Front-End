function loadRepos() {
	const userName = document.getElementById('username').value;
	const repo = document.getElementById('repos');
	const BASE_URL = 'https://api.github.com/users/';


	fetch(`${BASE_URL}${userName}/repos`, { method: 'GET' })
		.then((res) => checkError(res))
		.then((res) => res.json())
		.then((data) => parseData(data))
		.catch((err) => {
			repo.textContent = err;
		})

	function checkError(res) {
		if (res.status >= 200 && res.status < 300) {
			return res;
		}

		else {
			throw Error(res.status);
		}
	}

	function parseData(data) {
		repo.textContent = '';

		data.forEach(d => {
			createLi(d["full_name"]);
		})
	}

	function createLi(input) {
		const li = document.createElement('li');
		const a = document.createElement('a');

		a.href = input;
		a.textContent = input;
		li.appendChild(a);
		repo.appendChild(li);
	}
}