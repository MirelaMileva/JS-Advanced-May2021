function solve(input){
    let towns = {};
    
    for (const item of input) {
        let [townName, productName, price] = item.split(' | ');
        price = Number(price);

        if(!towns.hasOwnProperty(productName)){
            towns[productName] = {};
        }

        towns[productName][townName] = price;
    }

    let result = [];
    //let productsEntries = Object.entries(towns);
    for (const key in towns) {
        let sortedTows = Object.entries(towns[key]).sort((a, b) => a[1] - b[1]);
        let cheapestTown = sortedTows[0];
        result.push(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
    }

    return result.join('\n');
}

console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
));