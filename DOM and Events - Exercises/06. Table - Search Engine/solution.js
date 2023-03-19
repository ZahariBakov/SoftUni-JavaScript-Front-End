function solve() {
   const searchInput = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRows = Array.from(document.querySelectorAll('tbody tr'));
      
      for (const row of tableRows) {
         let rowTextContent = row.textContent.trim();

         row.classList.remove('select');

         if (rowTextContent.includes(searchInput.value)) {
            row.classList.add('select');
         }
      }

      searchInput.value = '';
   }
}