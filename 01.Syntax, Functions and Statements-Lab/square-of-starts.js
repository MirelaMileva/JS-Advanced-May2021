function solve(number){
    const num = 5;

    if (number == undefined) {
        for (let i = 0; i <= num; i++) {
            console.log('*');
        }
    } else {
        for (let i = 0; i <= number; i++) {
            console.log('*' + ' ' + '*');
        }
    }
    
}

solve(1);