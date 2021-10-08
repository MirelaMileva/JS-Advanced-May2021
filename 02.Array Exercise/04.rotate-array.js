function solve(arr, number){
    let rotations = number % arr.length;
    for (let i = 0; i < rotations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);