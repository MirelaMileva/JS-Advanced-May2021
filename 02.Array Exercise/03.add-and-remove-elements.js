function solve(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        if(arr[i] === 'add'){
            newArr.push(i + 1);
        } else if (arr[i] === 'remove') {
            newArr.pop();
        }
    }

    if(newArr.length === 0){
        console.log('Empty');
    } else {
        for (const currNum of newArr) {
            console.log(currNum);
        }     
    }
}

console.log(solve(['add', 
'add', 
'add', 
'add']
));