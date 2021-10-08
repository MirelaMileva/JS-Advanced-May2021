function solve(arr){
    let firstNumber = Number(arr.shift());
    let lastNumber = Number(arr.pop());

    let result = firstNumber + lastNumber;
    
    console.log(result);
}

solve(['20', '30', '40']);