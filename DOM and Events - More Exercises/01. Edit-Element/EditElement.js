function editElement(element, currentText, replacer) {
    while (element.textContent.includes(currentText)) {
        element.textContent = element.textContent.replace(currentText, replacer);
    }
}