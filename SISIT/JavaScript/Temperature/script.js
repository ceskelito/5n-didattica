let temp = [];
let days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

for(var i = 0; i < 7; i++){
    temp [i] = prompt("Inserire la tempratura di " + days[i]);
}

let indexMin = temp.indexOf(Math.min(...temp).toString());
let indexMax = temp.indexOf(Math.max(...temp).toString());

console.log("Il giorno più caldo era " + days[indexMax] + " con " + temp[indexMax] + "gradi");
console.log("Il giorno più freddo era " + days[indexMin] + " con " + temp[indexMin] + "gradi");