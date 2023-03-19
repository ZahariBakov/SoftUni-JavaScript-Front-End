function solve() {
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
  const tbody = document.querySelector('.table > tbody');


  generateBtn.addEventListener('click', generateHandler);
  buyBtn.addEventListener('click', buyHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const {img, name, price, decFactor} of data) {
      const tableRow = elementCreator('tr', '', tbody);
      const firstColumnTd = elementCreator('td', '', tableRow);
      elementCreator('img', '', firstColumnTd, '', '', {src: img});
      const secondColumnTd = elementCreator('td', '', tableRow);
      elementCreator('p', name, secondColumnTd);
      const thirdColumnTd = elementCreator('td', '', tableRow);
      elementCreator('p', price, thirdColumnTd);
      const fourthColumnTd = elementCreator('td', '', tableRow);
      elementCreator('p', decFactor, fourthColumnTd);
      const fifthColumnTd = elementCreator('td', '', tableRow);
      elementCreator('input', '', fifthColumnTd, '', '', {type: 'checkbox'});
    }
  }

  function buyHandler() {
    const allCheckedInput = Array.from(document.querySelectorAll('input:checked'));

    let boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const input of allCheckedInput) {
      const tableRow = input.parentElement.parentElement;
      const [_firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children);

      let items = secondColumn.children[0].textContent;
      boughtItems.push(items);

      let price = Number(thirdColumn.children[0].textContent);
      totalPrice += price;

      let decFactor = Number(fourthColumn.children[0].textContent);
      totalDecFactor += decFactor;
    }

    buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextArea.value += `Average decoration factor: ${totalDecFactor / allCheckedInput.length}`;
  }

  function elementCreator(type, content, parentNode, id, classes, attributes) {
    // type = string
    // content = string (text content)
    // id = string
    // classes  =array of strings
    // attributes = object
    const htmlElement = document.createElement(type);
  
    if (content && type !== 'input') {
      htmlElement.textContent = content;
    }
  
    if (content && type === 'input') {
      htmlElement.value = content;
    }
  
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
  
    if (id) {
      htmlElement.id = id;
    }
  
    // ['list', 'item']
    if (classes) {
      htmlElement.classesList.add(...classes);
    }
  
    // {src: 'link to image', href: 'link to site', ....}
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
  
    return htmlElement;
  }
}

