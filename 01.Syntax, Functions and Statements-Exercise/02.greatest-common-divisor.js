function solve(firstNum, secondNum){

    while(secondNum > 0){
        let temp = secondNum;
        secondNum = firstNum % secondNum; 
        firstNum = temp;
    }

    console.log(firstNum);
}

solve(2154, 458);