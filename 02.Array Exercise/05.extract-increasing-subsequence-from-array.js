function solve(input){
    // let result = aggregate(input, reducer, []);

    // function reducer(acc, el){
    //     if(acc.length === 0 || el >= acc[acc.length - 1]){
    //         acc.push(el);
    //     }

    //     return acc;
    // }


    // function aggregate(arr, reducerFunc, initialValue){
    //     for (let i = 0; i < arr.length; i++) {
    //         const element = arr[i];
    //         initialValue = reducerFunc(initialValue, element);
    //     }

    //     return initialValue;
    // }

    let result = input.reduce((acc, el) => {
        if(acc.length === 0 | el >= acc[acc.length - 1]){
            acc.push(el);
        }
        return acc;
    }, []);

    return result;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));