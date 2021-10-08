function solve(number){
    let numberString = String(number);
    let isSame = true;
    let sum = numberString.length > 0 ? Number(numberString[0]) : 0;
    
    for (let i = 0; i < numberString.length - 1; i++) {
        const element = Number(numberString[i]);
        const nextElement = Number(numberString[i + 1]);

        if(element !== nextElement){
            isSame = false;
        }

        sum += nextElement;
    }

    console.log(isSame);
    console.log(sum);
}

solve(2222222);