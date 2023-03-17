function create(words) {
   let contentDiv = document.getElementById('content');
   for (const word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';

      div.addEventListener('click', ({}) => {
         paragraph.style.display = 'block';
      });

      // Attaching to DOM tree
      div.appendChild(paragraph);
      contentDiv.appendChild(div);
   }
}