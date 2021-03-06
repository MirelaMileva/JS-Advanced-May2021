function solve(matrix){
    let magicSum = Number.MIN_SAFE_INTEGER;
    let isMagicMatrix = true;

    for (let row = 0; row < matrix.length; row++) {
        let sum = matrix[row].reduce((acc, elem) => acc + elem);
        if(magicSum === Number.MIN_SAFE_INTEGER){
            magicSum = sum;
        }

        if(sum !== magicSum){
            isMagicMatrix = false;
        } 
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sum = 0;
        for (let row = 0; row < matrix.length; row++) {
            let el = matrix[row][col];
            sum += el;
        }

        if(sum !== magicSum){
            isMagicMatrix = false;
        }
    }

    return isMagicMatrix;
}

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]   
   ));