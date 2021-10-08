function solve(arr, number){
    let newArr = [];
    for (let i = 0; i < arr.length; i+= number) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
));