function attachEvents() {
  // Get all elements:
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  const loadBtn = document.getElementById('loadBooks');
  const booksContainer = document.querySelector('table > tbody');
  const [ titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'));
  const submitBtn = document.querySelector('#form > button');
  let formTitle = document.querySelector('#form > h3');

  let allBooks = {};
  let editBookId = null;

  // Add 'click' event to buttons:
  loadBtn.addEventListener('click', loadAllBooksHandler);
  submitBtn.addEventListener('click', submitBookHandler);

  // Load all books:
  async function loadAllBooksHandler() {
    booksContainer.innerHTML = '';
    const response = await fetch(BASE_URL);
    const data = await response.json();
    allBooks = data;

    for (const bookId in data) {
      const { author, title } = data[bookId];

      const tableRow = document.createElement('tr');
      const bookColumn = document.createElement('td');
      const authorColumn = document.createElement('td');
      const buttonsColumn = document.createElement('td');
      const editBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');

      bookColumn.textContent = title;
      authorColumn.textContent = author;
      editBtn.textContent = 'Edit';
      deleteBtn.textContent = 'Delete';
      deleteBtn.id = bookId;

      editBtn.addEventListener('click', () => {
        editBookId = bookId;
        formTitle.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';
        titleInput.value = title;
        authorInput.value = author;
      });

      deleteBtn.addEventListener('click', deleteHandler);

      tableRow.appendChild(bookColumn);
      tableRow.appendChild(authorColumn);
      buttonsColumn.appendChild(editBtn);
      buttonsColumn.appendChild(deleteBtn);
      tableRow.appendChild(buttonsColumn);
      booksContainer.appendChild(tableRow);
    }
  }

  // 1. Create new book and add to list of books when 'click' 'Submit' button
  // 2. If button textContent === 'Save' save changes
  async function submitBookHandler() {
    const title = titleInput.value;
    const author = authorInput.value;
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ title, author })
    }

    let url = BASE_URL;

    if (formTitle.textContent === "Edit FORM") {
      httpHeaders.method = 'PUT';
      url += editBookId;
    }

    const responseData = await fetch(url, httpHeaders);
    loadAllBooksHandler();
    if (formTitle.textContent === 'Edit FORM') {
      submitBtn.textContent = 'Submit';
      formTitle.textContent = 'FORM';
    }
    titleInput.value = '';
    authorInput.value = '';
  }

  async function deleteHandler() {
    const id = this.id;
    const httpHeaders = {
      method: 'DELETE'
    };

    await fetch(BASE_URL + id, httpHeaders);
    loadAllBooksHandler();
  }

}

attachEvents();