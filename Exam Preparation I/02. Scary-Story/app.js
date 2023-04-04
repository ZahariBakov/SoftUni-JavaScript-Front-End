window.addEventListener("load", solve);

function solve() {
  const inputsDomSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story')
  };

  const publishBtn = document.getElementById('form-btn');
  const ulPreview = document.getElementById('preview-list');
  const divMain = document.getElementById('main');

  let currentStory = {
    firstName: null,
    lastName: null,
    age: null,
    title: null,
    genre: null,
    story: null
  }

  publishBtn.addEventListener('click', previewHandler);

  function previewHandler(event) {
    const allInputsHaveValue = Object.values(inputsDomSelectors)
      .every((input) => input.value !== '');

    if(!allInputsHaveValue) {
      return;
    }

    const { firstName, lastName, age, title, genre, story } = inputsDomSelectors;

    const li = createElement('li', ulPreview, '', ['story-info']);
    const article = createElement('article', li);
    createElement('h4', article, `Name: ${firstName.value} ${lastName.value}`);
    createElement('p', article, `Age: ${age.value}`);
    createElement('p', article, `Title: ${title.value}`);
    createElement('p', article, `Genre: ${genre.value}`);
    createElement('p', article, `${story.value}`);

    const saveBtn = createElement('button', li, 'Save Story', ['save-btn']);
    const editBtn = createElement('button', li, 'Edit Story', ['edit-btn']);
    const deleteBtn = createElement('button', li, 'Delete Story', ['delete-btn']);

    saveBtn.addEventListener('click', saveStoryHandler);
    editBtn.addEventListener('click', editStoryHandler);
    deleteBtn.addEventListener('click', deleteStoryHandler);

    for (const key in inputsDomSelectors) {
      currentStory[key] = inputsDomSelectors[key].value;
    }

    publishBtn.disabled = true;
     Object.values(inputsDomSelectors) 
      .forEach((input) => {
        input.value = '';
      })

    function saveStoryHandler(e) {
      divMain.innerHTML = '';
      createElement('h1', divMain, 'Your scary stroy is saved!');
    }

    function editStoryHandler(e) {
      publishBtn.disabled = false;
      
      for (const key in currentStory) {
        inputsDomSelectors[key].value = currentStory[key];
      }

      const li = this.parentNode;
      li.remove();
    }

    function deleteStoryHandler(e) {
      const li = this.parentNode;
      li.remove();

      publishBtn.disabled = false;
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
}
