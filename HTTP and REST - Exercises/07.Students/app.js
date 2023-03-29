function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  const tBody = document.querySelector('#results > tbody');
  const submitBn = document.getElementById('submit');
  const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('.inputs input');
  getDataBase();

  submitBn.addEventListener('click', createStudent)

  function createStudent() {
    if(firstName.value && lastName.value && facultyNumber.value && grade.value) {
      let newStudent = {
        'firstName': firstName.value,
        'lastName': lastName.value,
        'facultyNumber': facultyNumber.value,
        'grade': grade.value
      }

      fetch(BASE_URL, {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify(newStudent)
      })
        .then(() => getDataBase())
        .catch((err) => console.log(err))

        Array.from([firstName, lastName, facultyNumber, grade]).forEach((x) => x.value = '');
    }
  };

  function getDataBase() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => outputData(data))
      .catch((err) => console.log(err))
  };

  function outputData(data) {
    while(tBody.firstChild) { tBody.removeChild(tBody.lastChild) }
    Object.values(data).forEach(student => {
      const tr = document.createElement('tr');
      const tdFName = document.createElement('td');
      const tdLName = document.createElement('td');
      const tdFNumber = document.createElement('td');
      const tdGrade = document.createElement('td');

      tdFName.textContent = student.firstName;
      tdLName.textContent = student.lastName;
      tdFNumber.textContent = student.facultyNumber;
      tdGrade.textContent = student.grade;

      [tdFName, tdLName, tdFNumber, tdGrade].forEach((x) => tr.appendChild(x))
      tBody.appendChild(tr);
    })
  }

}  
attachEvents();