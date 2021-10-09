function solve(inputName, inputPopulation, inputTreasury){
    let city = {};

    city.name = inputName;
    city.population = inputPopulation;
    city.treasury = inputTreasury;

    return city;
}

console.log(solve('Tortuga',
7000,
15000
));