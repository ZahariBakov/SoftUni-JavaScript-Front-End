function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.getElementById('load-board-btn');

    const sections = {
        'ToDo': document.querySelector('#todo-section > ul'),
        'In Progress': document.querySelector('#in-progress-section > ul'),
        'Code Review': document.querySelector('#code-review-section > ul'),
        'Done': document.querySelector('#done-section > ul')
    }

    const buttonsText = {
		'ToDo': 'Move to In Progress',
		'In Progress': 'Move to Code Review',
		'Code Review': 'Move to Done',
		'Done': 'Close'
	}

    const addTaskBtn = document.getElementById('create-task-btn');

    loadBtn.addEventListener('click', loadBtnHandler);
    addTaskBtn.addEventListener('click', createTaskHandler);

    function createTaskHandler() {
        const inputTitle = document.getElementById('title');
        const inputDescription = document.getElementById('description');

        const payLoad = JSON.stringify({
            title: inputTitle.value,
            description: inputDescription.value,
            status: 'ToDo'
        });

        const httpHeaders = {
            method: 'POST', 
            body: payLoad
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadBtnHandler();
                inputTitle.value = '';
                inputDescription.value = '';
            })
    }

    function loadBtnHandler() {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then(display)
            .catch((err) => console.error(err));
    }

    function display(data) {
        Object.values(sections).forEach(x => x.textContent = '');

        Object.values(data).forEach((el) => {
            const currentStatus = el.status;

            const [ title, description, status, id ] = Object.values(el);
            const li = createElement('li', sections[currentStatus], '', ['task'], id);
            createElement('h3', li, title);
            createElement('p', li, description);
            const taskBtn = createElement('button', li, buttonsText[status]);

            if(el.status !== 'Done') {
                taskBtn.addEventListener('click', moveTaskHandler);
            }

            else {
                taskBtn.addEventListener('click', deleteTaskHandler);
            }
        })
    }

    function moveTaskHandler() {
        let currentId = this.parentNode.id;
        let currentStatus = this.parentNode.querySelector('button').textContent;
        let status = '';

        if(currentStatus === 'Move to In Progress') {
            status = 'In Progress';
        }

        else if(currentStatus === 'Move to Code Review') {
            status = 'Code Review';
        }

        else {
            status = 'Done';
        }

        fetch(`${BASE_URL}${currentId}`,  {
            method: 'PATCH',
            body: JSON.stringify({ "status": status })
        })
            .then(() => loadBtnHandler())
            .catch((err) => console.error(err));
        
    }

    function deleteTaskHandler() {
        let currentId = this.parentNode.id;
        
        fetch(`${BASE_URL}${currentId}`, {
            method: 'DELETE'
        })
            .then(() => loadBtnHandler())
            .catch((err) => console.error(err));
    }

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml){
        const htmlElement = document.createElement(type)

        if(content && useInnerHtml) {
            htmlElement.innerHTML = content;
        }

        else {
            if(content && type !== 'input'){
                htmlElement.textContent = content;
            }
             
            if(content && type === 'input'){
                htmlElement.value = content;
            }
        }

        if(classes && type !== 'input') {
            htmlElement.value = content;
        }

        if(classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }
       
       
        if(id){
            htmlElement.id = id;
        }
       
        if (classes){
            htmlElement.classList.add(...classes);
        }
       
        //{ src: 'link to img', href: 'link to site' }
        if (attributes) {
            for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]); 
            }
        }

        if (parentNode){
            parentNode.appendChild(htmlElement);
        }

        return htmlElement
      }
}

attachEvents();