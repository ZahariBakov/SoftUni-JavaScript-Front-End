function generateReport() {
    let output = document.getElementById('output');
    const thead = Array.from(document.querySelectorAll('th'));
    let columns = Array.from(document.querySelectorAll('tbody > tr'));
    let checkedArr = [];
    let allElements = [];

    for (let i = 0; i < thead.length; i++) {
        let element = thead[i].firstElementChild;
        if(element.checked) {
            checkedArr.push([i, element.name]);
        }
    }

    for (const column of columns) {
        let tdElements = column.children;
        let currentElementObj = {};

        for (const line of checkedArr) {
            currentElementObj[line[1]] = tdElements[line[0]].textContent;
        }

        allElements.push(currentElementObj);
    }

    output.textContent = JSON.stringify(allElements);

}

