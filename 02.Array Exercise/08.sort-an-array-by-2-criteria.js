// function solve(arr){
//     return arr.sort((a, b) =>  {
//         if(a.lenght === b.lenght){
//             return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
//         } else {
//             return a.lenght - b.lenght;
//         }

//     }).join('\n');
// }

function solve(arr) {
    return arr
        .sort((a, b) =>
            a.length - b.length === 0
                ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
                : a.length - b.length
        )
        .join("\n")
}

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));