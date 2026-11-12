"use strict";

// TODO: utwórz zmienną przechowującą stan licznika
let counter=0;
// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
function addPoint(){
    counter = counter + 1;
    document.getElementById("counter-display").textContent=counter;
}
function resetCounter() {
    counter = 0;
    document.getElementById("counter-display").textContent = counter
}
// TODO: utwórz tablicę z elementami do losowania
let item = ["Wojownik", "Mag", "Łucznik", "Złodziej", "Uzdrowiciel"]
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
function drawItem() {
    let index = Math.floor(Math.random() * item.length);
    document.getElementById("random-display").textContent = item[index]
}
