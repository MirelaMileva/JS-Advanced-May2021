function solve(arr){
    let newArr = [];
    for (const number of arr) {
        if(number < 0){
            newArr.unshift(number);
        } else {
            newArr.push(number);
        }
    }

    for (const num of newArr) {
        console.log(num);
    }
}

solve([7, -2, 8, 9]);