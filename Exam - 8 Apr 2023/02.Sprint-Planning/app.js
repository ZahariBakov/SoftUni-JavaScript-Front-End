window.addEventListener('load', solve);

function solve() {

    const inputsDOMSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee')
    }

    const buttons = {
        createBtn: document.getElementById('create-task-btn'),
        deleteBtn: document.getElementById('delete-task-btn')
    }

    const others = {
        taskSection: document.getElementById('tasks-section'),
        totalPoints: document.getElementById('total-sprint-points'),
        taskId: document.getElementById('task-id')
    }

    const values = {
        title: null,
        description: null,
        label: null,
        points: null,
        assignee: null
    }

    const icons = {
        'Feature': ['&#8865', 'feature'],
		'Low Priority Bug': ['&#9737', 'low-priority'],
		'High Priority Bug': ['&#9888', 'high-priority']
    }

    let id = 1;
    let totalPoints = 0;

    buttons.createBtn.addEventListener('click', createNewTask);
    buttons.deleteBtn.addEventListener('click', deleteTask);

    function createNewTask(event) {
        if(event) {
            event.preventDefault();
        }

        if(!validInputs()) {
            return;
        }

        const labelOption = inputsDOMSelectors.label.value;
        const article = createElement('article', others.taskSection, '', ['task-card'], `task-${id}`);
        const iconDiv = createElement('div', article, '', ['task-card-label', icons[labelOption][1]]);
        iconDiv.innerHTML = `${labelOption} ${icons[labelOption][0]}`;
        createElement('h3', article, inputsDOMSelectors.title.value, ['task-card-title']);
        createElement('p', article, inputsDOMSelectors.description.value, ['task-card-description']);
        createElement('div', article, `Estimated at ${inputsDOMSelectors.points.value} pts`, ['task-card-points']);
        createElement('div', article, `Assigned to: ${inputsDOMSelectors.assignee.value}`, ['task-card-assignee']);
        const divBtn = createElement('div', article, '', ['task-card-actions']);
        const deleteTaskBtn = createElement('button', divBtn, 'Delete');

        totalPoints += Number(inputsDOMSelectors.points.value);
        others.totalPoints.textContent = `Total Points ${totalPoints}pts`;

        deleteTaskBtn.addEventListener('click', moveToForm);
        clearFields();
    }

    function clearFields() {
        for (const line in inputsDOMSelectors) {
            values[line] = inputsDOMSelectors[line].value;
            inputsDOMSelectors[line].value = '';
        }
    }

    function moveToForm() {
        others.taskId.value = this.parentElement.parentElement.id;

        for (const line in inputsDOMSelectors) {
            inputsDOMSelectors[line].value = values[line];
            inputsDOMSelectors[line].disabled = true;
        }

        buttons.createBtn.disabled = true;
        buttons.deleteBtn.disabled = false;
    }

    function deleteTask() {
        const form = this.parentNode.parentNode;
        const currentForm = form.querySelector('#task-id').value;
        const removedTask = others['taskSection'].querySelector(`#${currentForm}`);
        others['taskSection'].removeChild(removedTask);
        clearFields();

        buttons.createBtn.disabled = false;
        buttons.deleteBtn.disabled = true;

        totalPoints -= Number(values.points);
        others.totalPoints.textContent = `Total Points ${totalPoints}pts`;

        for (const line in inputsDOMSelectors) {
            inputsDOMSelectors[line].disabled = false;
        }
    }

    function validInputs() {
        for (const line in inputsDOMSelectors) {
            if(inputsDOMSelectors[line].value.trim().length === 0) {
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