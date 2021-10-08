function solve(pies, firstFlavor, secondFlavor){
    let startIndex = pies.indexOf(firstFlavor);
    let endIndex = pies.indexOf(secondFlavor) + 1;

    let result = pies.slice(startIndex, endIndex);

    return result;
}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));