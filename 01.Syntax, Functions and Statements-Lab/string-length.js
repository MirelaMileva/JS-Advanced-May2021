function solve(first, second, third){
    let sumString = first.length + second.length + third.length;
    let averageLength = Math.floor(sumString / 3);

    console.log(sumString);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');