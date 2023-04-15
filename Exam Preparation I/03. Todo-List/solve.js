function attachEvents() {
    const inputField = document.getElementById('title');
    const addButton = document.getElementById('add-button');
    const loadButton = document.getElementById('load-button');
    const ulList = document.getElementById('todo-list');
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    addButton.addEventListener('click', addHandler);
    loadButton.addEventListener('click', loadAllHandler);

    function addHandler(event) {
        if(event) {
            event.preventDefault();
        }

        const name = inputField.value;

        const httpRequests = {
            method: 'POST',
            body: JSON.stringify({ name })
        }
        
        fetch(BASE_URL, httpRequests)
            .then(() => {
                loadAllHandler();
                inputField.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
    }

    function loadAllHandler(event) {
        if(event) {
            event.preventDefault();
        }

        ulList.innerHTML = '';

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                const tasks = Object.values(data);
                for (const { name, _id } of tasks) {
                    const liElement = createElement('li', ulList);
                    createElement('span', liElement, `${name}`);
                    const removeButton = createElement('button', liElement, 'Remove');
                    const editButton = createElement('button', liElement, 'Edit');

                    liElement.id = _id;
                    editButton.addEventListener('click', editTaskHandler);
                    removeButton.addEventListener('click', removeTaskHandler);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function editTaskHandler() {
        const liParent = this.parentNode;
        const [ span, _removeBtn, editBtn ] = Array.from(liParent.children);
        const editInputField = createElement('input');
        editInputField.value = span.textContent;
        liParent.prepend(editInputField);
        const submitBtn =createElement('button', liParent, 'Submit');
        span.remove();
        editBtn.remove();
        
        submitBtn.addEventListener('click', submitTaskHandler);
    }

    function submitTaskHandler() {
        const liParent = this.parentNode;
        const id = liParent.id;
        const [ input ] = Array.from(liParent.children); 

        const httpRequests = {
            method: 'PATCH',
            body: JSON.stringify({ name: input.value })
        }

        fetch(`${BASE_URL}${id}`, httpRequests)
            .then(() => loadAllHandler())
            .catch((err) => {
                console.error(err);
            })

    }

    function removeTaskHandler() {
        const id = this.parentNode.id;
        
        const httpRequests = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, httpRequests)
            .then(() => loadAllHandler())
            .catch((err) => {
                console.error(err);
            })
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
