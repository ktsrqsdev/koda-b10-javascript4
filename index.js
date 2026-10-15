const angka = [10,20,30,40,50]

// MAX
let max = angka[0]
for(let i = 0; i < angka.length; i++){
    if(angka[i] > max){
        max = angka[i]
    }
}
console.log(max)

// MIN
let min = angka[0]
for(let i = 0; i < angka.length; i++){
    if(angka[i] < min){
        min = angka[i]
    }
}
console.log(min)

// AVERAGE
let total = 0;

for (let i = 0; i < angka.length; i++) {
    total += angka[i];
}

let average = total / angka.length;

console.log(average);

