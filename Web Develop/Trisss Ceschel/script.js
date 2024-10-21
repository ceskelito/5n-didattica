function previewCell(cell)
{
    if(cell.classList.contains("filled"))
        return;
    let symbol =  document.getElementById("player").innerHTML;
    let html = '<div class="symbol-' + symbol + '"  style = "opacity: 30%">'
    cell.innerHTML = html;
}

function clearCell(cell){
    if(cell.classList.contains("filled"))
        return;
    cell.innerHTML = "";
}

function fillCell(cell){
    
    if(cell.classList.contains("filled"))
        return;

    let symbol =  document.getElementById("player").innerHTML;
    let html = '<div class="symbol-' + symbol + '">'

    cell.innerHTML = html;
    cell.classList.add("filled");
    cell.classList.add(symbol);


    if(checkVictory(cell) == true){
        window.alert("ha vinto il giocatore " + symbol);
        clearGrid();
        return;
    }

    document.getElementById("player").innerHTML = (symbol == "x") ? "o" : "x";
}
function removeElementsByClassName(className){
    let elements = document.getElementsByClassName(className);

    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeClassByClassName(className, classToRemove){
    let elements = document.getElementsByClassName(className);

    for(let element in elements){
        elements[element].classList.remove("filled");
        elements[element].classList.remove("x");
        elements[element].classList.remove("o");
    }
}

function clearGrid(){
    removeElementsByClassName("symbol-x");
    removeElementsByClassName("symbol-o");
    removeClassByClassName("cell", "filled");
}
function checkVictory(cell){

    let id = cell.id[2] + cell.id[3];
    let tag = (a, b) => document.getElementById("c_" + a + b).classList[document.getElementById("c_" + a + b).classList.length-1];

    console.log(tag(0,0));

    if((tag(id[0], 0) == tag(id[0], 1)) && (tag(id[0], 1) == tag(id[0], 2)) && (tag(id[0], 0) != ""))
        return true;
    if((tag(0, id[1]) == tag(1, id[1])) && (tag(1, id[1]) == tag(2, id[1])) && (tag(0, id[1]) != ""))
        return true;

    if((tag(1, 1) == "x") || (tag(1, 1) == "o")){
        if((tag(0, 0) == tag(1, 1)) && (tag(1, 1) == tag(2, 2)))
            return true;
        if((tag(0, 2) == tag(1, 1)) && (tag(1, 1) == tag(2, 0)))
            return true;
    }
    return false;
}


