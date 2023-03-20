function solve() {
  const text = document.getElementById('text').value.toLowerCase().split(' ');
  const convention =document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (text && convention) {
    if (convention === 'Camel Case') {
      for (let i = 1; i < text.length; i++) {
        text[i] = `${text[i][0].toUpperCase()}${text[i].slice(1)}`
      }

      result.textContent = text.join('');
      console.log(result.textContent);
    }

    else if (convention === 'Pascal Case') {
      for (let i = 0; i < text.length; i++) {
        text[i] = `${text[i][0].toUpperCase()}${text[i].slice(1)}`
      }

      result.textContent = text.join('');
      console.log(result.textContent);
    }

    else {
      result.textContent = 'Error!';
    }
  }
}
