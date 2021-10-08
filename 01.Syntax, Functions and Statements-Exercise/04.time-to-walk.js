function solve(steps, studentFootprint, studentSpeed){

    let distance = steps * studentFootprint;
    let speedSec = studentSpeed / 3.6;
    let rest = Math.floor(distance / 500);
    let time = distance / speedSec + rest * 60;

    let timeInHour = Math.floor(time / 3600);
    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.round(time - (timeInMin * 60));


    console.log(`${timeInHour < 10 ? 0 : ""}${timeInHour}:${timeInMin < 10 ? 0 : ""}${timeInMin}:${timeInSec < 10 ? 0 : ""}${timeInSec}`);
}

solve(2564, 0.70, 5.5);