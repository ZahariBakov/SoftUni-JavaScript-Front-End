window.addEventListener('load', solve);

function solve() {
    const inputsDomSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count')
    };

    const nextBtn = document.getElementById('next-btn');
    const ulInfoList = document.querySelector('.info-list');
    const ulConfirmList = document.querySelector('.confirm-list');
    const outputVerification = document.getElementById('verification');
    const inputForm = document.querySelector('form');

    let currentReservation = {};
    let outputText = '';

    nextBtn.addEventListener('click', nextReservationHandler);

    function nextReservationHandler(event) {
        if(event) {
            event.preventDefault();
        }

        if(inputsDomSelectors.firstName.value === '' || inputsDomSelectors.lastName.value === '' || inputsDomSelectors.dateIn.value === '' || inputsDomSelectors.dateOut.value === '' || inputsDomSelectors.peopleCount.value === '') {
            return;
        }

        const liReservationContent = createElement('li', ulInfoList, '', ['reservation-content']);
        const article = createElement('article', liReservationContent);
        createElement('h3', article, `Name: ${inputsDomSelectors.firstName.value} ${inputsDomSelectors.lastName.value}`);
        createElement('p', article, `From date: ${inputsDomSelectors.dateIn.value}`);
        createElement('p', article, `To date: ${inputsDomSelectors.dateOut.value}`);
        createElement('p', article, `For ${inputsDomSelectors.peopleCount.value} people`);

        const editBtn = createElement('button', liReservationContent, 'Edit', ['edit-btn']);
        const continueBtn = createElement('button', liReservationContent, 'Continue', ['continue-btn']);

        addReservationInfo();

        inputForm.reset();
        nextBtn.disabled = true;

        editBtn.addEventListener('click', editReservationHandler);
        continueBtn.addEventListener('click', continueReservationHandler);

    }

    function addReservationInfo() {
        for (const key in inputsDomSelectors) {
            currentReservation[key] = inputsDomSelectors[key].value;
        }
    }

    function editReservationHandler() {
        for (const key in inputsDomSelectors) {
            inputsDomSelectors[key].value = currentReservation[key];
        }

        nextBtn.disabled = false
        document.querySelector('.reservation-content').remove();
    }

    function continueReservationHandler() {
        const liReservationContent = this.parentNode;
        ulConfirmList.appendChild(liReservationContent);
        document.querySelector('.edit-btn').remove();
        document.querySelector('.continue-btn').remove();
        
        const confirmBtn = createElement('button', liReservationContent, 'Confirm', ['confirm-btn']);
        const cancelBtn = createElement('button', liReservationContent, 'Cancel', ['cancel-btn']);

        confirmBtn.addEventListener('click', confirmBtnHandler);
        cancelBtn.addEventListener('click', cancelBtnHandler);
    }

    function confirmBtnHandler() {
        const liElement = this.parentNode;
        liElement.remove();
        outputVerification.textContent = 'Confirmed.';
        outputVerification.className = 'reservation-confirmed';
        nextBtn.disabled = false;
    }

    function cancelBtnHandler() {
        const liElement = this.parentNode;
        liElement.remove();
        outputVerification.textContent = 'Cancelled.';
        outputVerification.className = 'reservation-cancelled';
        nextBtn.disabled = false;
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
