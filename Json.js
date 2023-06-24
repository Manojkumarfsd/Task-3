//json iterate over all loops(for,for of,for in, forEach)

let dailyRoutine =  ["study", "exam", "result"];

//for loop
for (let i=0; i<3; i++) {
    console.log(dailyRoutine[i]);
}

//for of-loop
for(let routine of dailyRoutine) {
    console.log(routine);
}

//for in 
for (let routine in dailyRoutine) {
    console.log(dailyRoutine[routine]);
}

//for each loop
dailyRoutine.forEach (function(routine) {
    console.log(routine);
});