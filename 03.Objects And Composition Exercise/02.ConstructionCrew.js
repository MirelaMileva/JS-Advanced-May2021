function solve(worker){
    // let worker = {
    //     weight : Number(inputWorker[0]),
    //     experience : Number(inputWorker[1]),
    //     levelOfHydrated : Number(inputWorker[2]),
    //     dizziness : Boolean(inputWorker[3]),
    // }

    if(worker.dizziness === true){
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

console.log({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }  
  );