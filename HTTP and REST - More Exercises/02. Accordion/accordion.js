async function solution() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let main = document.getElementById('main');

    let response = await fetch(BASE_URL);
    let data = await response.json();

    for (let obj of data) {
        let id = obj._id;
        let URL = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                let divAccordion = document.createElement('div');
                divAccordion.className = 'accordion';

                let divHead = document.createElement('div');
                divHead.className = 'head';
                let span = document.createElement('span')
                span.textContent = data.title;
                let btn = document.createElement('button');
                btn.className = 'button';
                btn.setAttribute('id', `$[id]`);
                btn.textContent = 'More';
                divHead.appendChild(span);
                divHead.appendChild(btn);

                let divExtra = document.createElement('div');
                divExtra.className = 'extra'
                let p = document.createElement('p');
                p.textContent = data.content;
                divExtra.appendChild(p);

                divAccordion.appendChild(divHead);
                divAccordion.appendChild(divExtra);

                main.appendChild(divAccordion);

                btn.addEventListener('click', more);

            })
    }

    function more() {
        const divHidden = this.parentNode.parentNode.querySelector('.extra');

        if(this.textContent === 'Less') {
            divHidden.style.display =  'none';
            this.textContent = 'More';
        }

        else {
            divHidden.style.display = 'block';
            this.textContent = 'Less';
        }
    }

}


solution();