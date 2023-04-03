window.addEventListener('load', solve);
    

// function solve() {
//     const nextStepBtn = document.getElementById('next-btn');
    
//     const firstNameInput = document.getElementById('first-name');
//     const lastNameInput = document.getElementById('last-name');
//     const numberOfPeopleInput = document.getElementById('people-count');
//     const firstDateInput = document.getElementById('from-date');
//     const stayDaysInput = document.getElementById('days-count');

//     const ulTicketInfo = document.querySelector('.ticket-info-list');
//     const ulConfirmTicket = document.querySelector('.confirm-ticket');
//     const inputsForm = document.querySelector('.container-text > form');
//     const divMain = document.getElementById('main');
//     const bodyElement = document.getElementById('body');

//     nextStepBtn.addEventListener('click', nextStepHandler);

//     let firstName;
//     let lastName;
//     let firstDate;
//     let numberOfPeople;
//     let stayDays;

//     function nextStepHandler(event) {
//         if(event) {
//             event.preventDefault();
//         }

//         firstName = firstNameInput.value;
//         lastName = lastNameInput.value;
//         firstDate = firstDateInput.value;
//         numberOfPeople = numberOfPeopleInput.value;
//         stayDays = stayDaysInput.value;

//         if(!firstName || !lastName || !numberOfPeople || !firstDate || !stayDays) {
//             return;
//         }

//         const liItemTicket = createElement('li', ulTicketInfo, '', ['ticket']);
//         const article = createElement('article', liItemTicket);
//         createElement('h3', article, `Name: ${firstName}${lastName}`);
//         createElement('p', article, `From date: ${firstDate}`);
//         createElement('p', article, `For ${stayDays} days`);
//         createElement('p', article, `For ${numberOfPeople} people`);
//         const editBtn = createElement('button', liItemTicket, 'Edit', ['edit-btn']);
//         const continueBtn = createElement('button', liItemTicket, 'Continue', ['continue-btn']);

//         inputsForm.reset();
//         nextStepBtn.disabled = true;

//         editBtn.addEventListener('click', editBtnHandler);
//         continueBtn.addEventListener('click', continueBtnHandler);
//     }

//     function editBtnHandler() {
//         nextStepBtn.disabled = false;
//         document.querySelector('.ticket').remove();

//         firstNameInput.value = firstName;
//         lastNameInput.value = lastName;
//         firstDateInput.value = firstDate;
//         numberOfPeopleInput.value = numberOfPeople;
//         stayDaysInput.value = stayDays;
//     }

//     function continueBtnHandler(event) {
//         liTicketContent = event.target.parentNode;
//         ulConfirmTicket.appendChild(liTicketContent);
//         document.querySelector('.edit-btn').remove();
//         document.querySelector('.continue-btn').remove();
//         let liElement = ulConfirmTicket.querySelector('li');
//         liElement.removeAttribute('ticket');
//         liElement.className = 'ticket-content';
        
//         const confirmBtn = createElement('button', liElement, 'Confirm', ['confirm-btn'])
//         const cancelBtn = createElement('button', liElement, 'Cancel', ['cancel-btn']);

//         confirmBtn.addEventListener('click', confirmHandler);
//         cancelBtn.addEventListener('click', cancelHandler);
//     }

//     function confirmHandler() {
//         divMain.remove();
//         createElement('h1', bodyElement, 'Thank you, have a nice day!', '', 'thank-you');
//         const backBtn =  createElement('button', bodyElement, 'Back', '', 'back-btn');
//         backBtn.addEventListener('click', () => location.reload());
//     }

//     function cancelHandler(e) {
//         e.target.parentNode.remove();
//         nextStepBtn.disabled = false;
//     }


//     function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml){
//         const htmlElement = document.createElement(type)

//         if(content && useInnerHtml) {
//             htmlElement.innerHTML = content;
//         }

//         else {
//             if(content && type !== 'input'){
//                 htmlElement.textContent = content;
//             }
             
//             if(content && type === 'input'){
//                 htmlElement.value = content;
//             }
//         }

//         if(classes && type !== 'input') {
//             htmlElement.value = content;
//         }

//         if(classes && classes.length > 0) {
//             htmlElement.classList.add(...classes);
//         }
       
       
//         if(id){
//             htmlElement.id = id;
//         }
       
//         if (classes){
//             htmlElement.classList.add(...classes);
//         }
       
//         //{ src: 'link to img', href: 'link to site' }
//         if (attributes) {
//             for (const key in attributes) {
//             htmlElement.setAttribute(key, attributes[key]); 
//             }
//         }

//         if (parentNode){
//             parentNode.appendChild(htmlElement);
//         }

//         return htmlElement
//       }
// }

function solve() {
    const nextStepBtn = document.getElementById('next-btn');
    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        numberOfPeople: document.getElementById('people-count'),
        firstDate: document.getElementById('from-date'),
        stayDays: document.getElementById('days-count')
    }
    const inputsForm = document.querySelector('.container-text > form');
    const divMain = document.getElementById('main');
    const body = document.getElementById('body');

    nextStepBtn.addEventListener('click', nextStepHandler);

    let currentClient = {};

    function nextStepHandler(event) {
        if(event) {
            event.preventDefault();
        }

        if(inputs.firstName.value === '' || inputs.lastName.value === '' || inputs.numberOfPeople.value === '' || inputs.firstDate.value === '' || inputs.stayDays.value === '') {
            return;
        }

        ulTicketInfo = document.querySelector('.ticket-info-list');
        liItemTicket = createElement('li', ulTicketInfo, '', ['ticket']);
        const article = createElement('article', liItemTicket);
        createElement('h3', article, `Name: ${inputs.firstName.value} ${inputs.lastName.value}`);
        createElement('p', article, `From date: ${inputs.firstDate.value}`);
        createElement('p', article, `For ${inputs.stayDays.value} days`);
        createElement('p', article, `For ${inputs.numberOfPeople.value} people`);
        const editBtn = createElement('button', liItemTicket, 'Edit', ['edit-btn']);
        const continueBtn = createElement('button', liItemTicket, 'Continue', ['continue-btn']);

        addInfoToCurrentClient();

        inputsForm.reset();
        nextStepBtn.disabled = true;

        editBtn.addEventListener('click', editBtnFormHandler);
        continueBtn.addEventListener('click', continueBtnFormHandler);
    }

    function addInfoToCurrentClient() {
        for (const key in inputs) {
            currentClient[key] = inputs[key].value
        }
    }

    function editBtnFormHandler(event) {
        nextStepBtn.disabled = false;
        
        for (const key in inputs) {
            inputs[key].value = currentClient[key];
        }

        liItemTicket.remove();
    }

    function continueBtnFormHandler(event) {
        const ulConfirmTicket = document.querySelector('.confirm-ticket');
        liTicketContent = event.target.parentNode;
        ulConfirmTicket.appendChild(liTicketContent);
        document.querySelector('.edit-btn').remove();
        document.querySelector('.continue-btn').remove();
        let liElement = ulConfirmTicket.querySelector('li');
        liElement.removeAttribute('ticket');
        liElement.className = 'ticket-content';
        
        const confirmBtn = createElement('button', liElement, 'Confirm', ['confirm-btn'])
        const cancelBtn = createElement('button', liElement, 'Cancel', ['cancel-btn']);

        confirmBtn.addEventListener('click', confirmHandler);
        cancelBtn.addEventListener('click', cancelHandler);
    }

    function confirmHandler() {
        divMain.remove();
        createElement('h1', body, 'Thank you, have a nice day! ', '', 'thank-you');
        const backBtn =  createElement('button', body, 'Back', '', 'back-btn');
        backBtn.addEventListener('click', () => location.reload());
    }

    function cancelHandler() {
        document.querySelector('.ticket-content').remove();
        nextStepBtn.disabled = false;
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