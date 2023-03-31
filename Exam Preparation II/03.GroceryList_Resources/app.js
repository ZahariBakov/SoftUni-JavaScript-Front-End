function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

    const LoadBtn = document.getElementById('load-product');
    const addBtn = document.getElementById('add-product');
    const updateBtn = document.getElementById('update-product');

    const tableContainer = document.getElementById('tbody');
    const inputForm  = document.querySelector('.list');

    const inputs = {
        product: document.getElementById('product'),
        count: document.getElementById('count'),
        price: document.getElementById('price')
    }
    
    let currentProducts = [];
    let productToEdit = {};

    LoadBtn.addEventListener('click', loadAllProductHandler);
    addBtn.addEventListener('click', addProductHandler);
    updateBtn.addEventListener('click', updateProductHandler);

    function loadAllProductHandler(event) {
        if(event) {
            event.preventDefault();
        }

        tableContainer.innerHTML = '';

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                currentProducts = Object.values(data);
                
                for (const { product, price, count, _id} of currentProducts) {
                    const tableRow = createElement('tr', tableContainer);
                    tableRow.id = _id
                    createElement('td', tableRow, product, ['name']);
                    createElement('td', tableRow, count, ['count-product']);
                    createElement('td', tableRow, price, ['product-price']);
                    const tdButtons = createElement('td', tableRow, '', ['btn']);
                    const updateBtn = createElement('button', tdButtons, 'Update', ['update']);
                    const deleteBtn = createElement('button', tdButtons, 'Delete', ['delete']);

                    updateBtn.addEventListener('click', updateFormHandler);
                    deleteBtn.addEventListener('click', deleteFormHandler);
                }
            })
    }

    function updateFormHandler() {
        const id = this.parentNode.parentNode.id;
        productToEdit = currentProducts.find((e) => e._id === id);
        for (const key in inputs) {
            inputs[key].value = productToEdit[key];
        }
        addBtn.disabled = true;
        updateBtn.disabled = false;
    }

    function updateProductHandler(event) {
        event.preventDefault();

        const { product, count, price}  = inputs;
        const payLoad = JSON.stringify({
            product: product.value,
            count: count.value, 
            price: price.value
        });
        const httpHeaders = {
            method: 'PATCH',
            body: payLoad
        }

        fetch(`${BASE_URL}${productToEdit._id}`, httpHeaders)
            .then(() => {
                loadAllProductHandler();
                addBtn.disabled = false;
                updateBtn.disabled = true;
                inputForm.reset();
            })
            .catch((err) => {
                console.error(err);
            })
    }

    function deleteFormHandler(event) {
        event.preventDefault();
        
        const id = this.parentNode.parentNode.id;
        const httpHeaders = {
            method: 'DELETE'
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadAllProductHandler())
            .catch((err) => {
                console.error(err);
            })
    }

    function addProductHandler(event) {
        event.preventDefault();

        const { product, count, price}  = inputs;
        const payLoad = JSON.stringify({
            product: product.value,
            count: count.value, 
            price: price.value
        });
        const httpHeaders = {
            method: 'POST',
            body: payLoad
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadAllProductHandler();
                inputForm.reset();
            })
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

solve();
