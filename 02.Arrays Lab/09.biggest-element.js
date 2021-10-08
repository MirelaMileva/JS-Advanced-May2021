function solve(matrix){

    //return matrix.map(a => Math.max(...a));

    return matrix.reduce((a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a), -Infinity);
}

console.log(solve([[20, 50, 10], [8, 33, 145]]));