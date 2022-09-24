function create(words) {
   let mainDiv = document.getElementById('content');

   for (let index = 0; index < words.length; index++) {
      let createDiv = document.createElement('div');
      let createParagraph = document.createElement('p');
      createParagraph.textContent = words[index];
      createParagraph.style.display = 'none';

      createDiv.appendChild(createParagraph);
      createDiv.addEventListener('click', (e) => {
         let showP = e.target.children[0];
         showP.style.display = 'block';
      })

      mainDiv.appendChild(createDiv);
   }
}