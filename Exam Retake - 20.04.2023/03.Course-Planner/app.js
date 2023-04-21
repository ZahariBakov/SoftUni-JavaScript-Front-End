function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.getElementById('load-course');
    const addCourseBtn = document.getElementById('add-course');
    const editCourseBtn = document.getElementById('edit-course');

    let currentCourses = [];
    let courseToEdit = {};

    const divList = document.getElementById('list');
    const inputForm = document.querySelector('#form > form');

    const inputs = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name')
    }

    loadBtn.addEventListener('click', loadCourseHandler);
    addCourseBtn.addEventListener('click', addCourseHandler);
    editCourseBtn.addEventListener('click', editCourseHandler);

    function loadCourseHandler(e) {
    if(e) {
        e.preventDefault();
    }

    divList.innerHTML = '';

    fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
            currentCourses = Object.values(data);
            
            for (const { title, type, description, teacher, _id } of currentCourses) {
                const divContainer = createElement('div', divList, '', ['container']);
                divContainer.id = _id
                createElement('h2', divContainer, title);
                createElement('h3', divContainer, teacher);
                createElement('h3', divContainer, type);
                createElement('h4', divContainer, description);
                const editBtn = createElement('button', divContainer, 'Edit Course', ['edit-btn']);
                const finishBtn = createElement('button', divContainer, 'Finish Course', ['finish-btn']);

                editBtn.addEventListener('click', updateFormHandler);
                finishBtn.addEventListener('click', deleteCourseHandler);
            }
            });
    }

    function addCourseHandler(e) {
        if(e) {
            e.preventDefault();
        }

        const { title, type, description, teacher } = inputs;
        const payLoad = JSON.stringify({
            title: title.value,
            type: type.value,
            description: description.value,
            teacher: teacher.value
        });

        const httpRequests = {
            method: 'POST',
            body: payLoad
        }

        fetch(BASE_URL, httpRequests)
            .then(() => {
                loadCourseHandler();
                inputForm.reset();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    function editCourseHandler(e) {
        if(e) {
            e.preventDefault();
        }

        const { title, type, description, teacher } = inputs;
        const payLoad = JSON.stringify({
            title: title.value,
            type: type.value,
            description: description.value,
            teacher: teacher.value
        });

        const httpRequests = {
            method: 'PATCH',
            body: payLoad
        }
        
        fetch(`${BASE_URL}${courseToEdit._id}`, httpRequests)
            .then(() => {
                loadCourseHandler();
                addCourseBtn.disabled = false;
                editCourseBtn.disabled = true;
                inputForm.reset();
            })
    }
    
    function updateFormHandler() {
        const id = this.parentNode.id;
        
        courseToEdit = currentCourses.find((e) => e._id === id);
        
        for (const key in inputs) {
            inputs[key].value = courseToEdit[key];
        }

        addCourseBtn.disabled = true;
        editCourseBtn.disabled = false;
    }

    function deleteCourseHandler() {
        const id = this.parentNode.id;
        
        const httpRequests = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, httpRequests)
            .then(() => loadCourseHandler())
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

solve();