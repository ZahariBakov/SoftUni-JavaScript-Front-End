function search() {
   const towns = Array.from(document.querySelectorAll('li'));
   const input = document.querySelector('#searchText');
   let result = document.querySelector('#result');
   let items = 0;
   
   towns.forEach(town => {
      if (town.textContent.toLowerCase().includes(input.value.toLowerCase()) && input.value.length !== 0) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         items ++;
      }

      else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }
   });

   result.textContent = `${items} matches found`;
   input.value = '';
   items = 0;
}
