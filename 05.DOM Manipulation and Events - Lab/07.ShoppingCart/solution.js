function solve() {
   let addButtonElements = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea');

   let checkoutButton = document.querySelector('.checkout');
   let sum = 0;
   let products = [];
   
   for (const addProductButton of addButtonElements) {
      addProductButton.addEventListener('click', (e) => {
         let currentProductElement = e.currentTarget.parentElement.parentElement;
         let productName = currentProductElement.querySelector('.product-title').textContent;
         let productPrice = Number(currentProductElement.querySelector('.product-line-price').textContent);

         sum += productPrice;
         products.push(productName);
          
          textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      });
   }

   checkoutButton.addEventListener('click', (e) => {
      let uniqueProducts = products.reduce((a, x) => {
         if(!a.includes(x)) {
            a.push(x);
         }

         return a;
      }, []);

      textAreaElement.textContent += `You bought ${uniqueProducts.join(', ')} for ${sum.toFixed(2)}.`;
   })
   
}