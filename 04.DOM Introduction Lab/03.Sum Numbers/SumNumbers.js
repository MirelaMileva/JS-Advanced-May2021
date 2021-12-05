function calc() {
   let firstNum = document.getElementById('num1').value;
   let seconNum = document.getElementById('num2').value;
   let sum = Number(firstNum) + Number(seconNum);

   document.getElementById('sum').value = sum;
}