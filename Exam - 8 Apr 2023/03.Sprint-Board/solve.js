function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.getElementById('load-board-btn')
    const todoSection = document.querySelector('#todo-section > ul');
    const inProgressSection = document.querySelector('#in-progress-section > ul');
    const codeReviewSection = document.querySelector('#code-review-section > ul');
    const doneSection = document.querySelector('#done-section > ul');

    loadBtn.addEventListener('click', loadBtnHandler);

    function loadBtnHandler() {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then(display)
    }

    function display(data) {
        Object.values(data).forEach((el) => {
            createTask(el);
        })
    }

    function createTask(data) {
        if(data.status === 'ToDo') {
            todoSection.innerHTML = `<li class="task">
                                        <h3>${data.title}</h3>
                                        <p>${data.description}</p>
                                        <button>Move to In Progress</button>
                                    </li>
                                    `
        }

        else if(data.status === 'In Progress') {
            inProgressSection.innerHTML = `<li class="task">
                                                <h3>${data.title}</h3>
                                                <p>${data.description}</p>
                                                <button>Move to Code Review</button>
                                            </li>
                                            `
        }

        else if(data.status === 'Code Review') {
            codeReviewSection.innerHTML = `<li class="task">
                                                <h3>${data.title}</h3>
                                                <p>${data.description}</p>
                                                <button>Move to Done</button>
                                            </li>
                                            `
        }

        else {
            doneSection.innerHTML = `<li class="task">
                                        <h3>${data.title}</h3>
                                        <p>${data.description}</p>
                                        <button>Close</button>
                                    </li>
                                    `
        }

    }
}

attachEvents();