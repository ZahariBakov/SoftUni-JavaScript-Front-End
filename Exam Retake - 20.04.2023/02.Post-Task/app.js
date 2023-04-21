window.addEventListener("load", solve);

function solve() {
    const inputs = {
    title: document.getElementById('task-title'),
    category: document.getElementById('task-category'),
    content: document.getElementById('task-content')
    }

    const reviewList = document.getElementById('review-list');
    const publishedList = document.getElementById('published-list');

    const publishBtn = document.getElementById('publish-btn');

    const values = {
        title: null,
        category: null,
        content: null
    }

    publishBtn.addEventListener('click', publishTaskHandler);

    function publishTaskHandler(e) {
        if(e) {
            e.preventDefault();
        }

        if(!validInputs()) {
            return;
        }
        
        const li = createElement('li', reviewList, '', ['rpost']);
        const article = createElement('article', li);
        createElement('h4', article, inputs.title.value);
        createElement('p', article, `Category: ${inputs.category.value}`);
        createElement('p', article, `Content: ${inputs.content.value}`);
        const editBtn = createElement('button', li, 'Edit', ['action-btn', 'edit']);
        const postBtn = createElement('button', li, 'Post', ['action-btn', 'post']);

        editBtn.addEventListener('click', editTaskHandler);
        postBtn.addEventListener('click', postTaskHandler);

        clearFields();
    }

    function editTaskHandler() {
        for (const line in inputs) {
            inputs[line].value = values[line];
        }

        reviewList.innerHTML = '';
    }

    function postTaskHandler() {
        const li = this.parentNode;
        const editBtn = li.querySelector('.edit').remove();
        const postBtn = li.querySelector('.post').remove();
        publishedList.appendChild(li);
    }

    function clearFields() {
        for (const line in inputs) {
            values[line] = inputs[line].value;
            inputs[line].value = '';
        }
    }

    function validInputs() {
        for (const line in inputs) {
            if(inputs[line].value.trim().length === 0) {
                return false;
            }
        }

        return true;
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
    
    
        if(classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }
       
       
        if(id){
            htmlElement.id = id;
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