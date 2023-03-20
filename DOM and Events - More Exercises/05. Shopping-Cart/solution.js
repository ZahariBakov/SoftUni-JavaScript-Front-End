function solve() {
   let order = {};

   const addsButtons = Array.from(document.getElementsByClassName('add-product'));
   const output = document.querySelector('textarea');
   const checkoutBtn = document.querySelector('.checkout');
   
   addsButtons.forEach(btn => btn.addEventListener('click', addProduct));
   checkoutBtn.addEventListener('click', buyProducts);


   function addProduct() {
      const productDiv = Array.from(this.parentElement.parentElement.children);
      const productTitle = productDiv[1].children[0].innerText;
      const productPrice = Number(productDiv[3].innerText);

      if (!order[productTitle]) {
         order[productTitle] = 0;
      }

      order[productTitle] += productPrice;
      output.textContent += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`
   }

   function buyProducts() {
      let products = [];
      let totalPrice = 0;

      Object.keys(order).forEach(product => {
         products.push(product);
         totalPrice += Number(order[product]);
      })

      output.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`

      addsButtons.forEach(btn => btn.disabled = true);
      checkoutBtn.disabled = true;
   }
}
