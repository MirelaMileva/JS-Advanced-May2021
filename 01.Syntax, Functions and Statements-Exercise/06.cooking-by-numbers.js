function solve(num, opr1, opr2, opr3, opr4, opr5){

    num = applyOperation(num, opr1);
    console.log(num);
    num = applyOperation(num, opr2);
    console.log(num);
    num = applyOperation(num, opr3);
    console.log(num);
    num = applyOperation(num, opr4);
    console.log(num);
    num = applyOperation(num, opr5);
    console.log(num);


    function applyOperation(num, opr){
        switch (opr) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                  num = Math.sqrt(num);  
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.8;
                break;
        }

        return num;
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');