/*Function write/clear Grid*/
function previewCell(cell)
{
    if(cell.classList.contains("filled"))
        return;

    let symbol =  document.getElementById("actualPlayer").innerHTML;
    let img = '<img class="symbol" src="symbols/' + symbol + '.svg" alt="' + symbol + '" style="opacity: 30%">';
    cell.innerHTML = img;
}

function clearCell(cell){
    if(cell.classList.contains("filled"))
        return;

    cell.innerHTML = "";
}

function fillCell(cell){
    
    if(cell.classList.contains("filled"))
        return;

    let symbol =  document.getElementById("actualPlayer").innerHTML;
    let img = '<img class="symbol" src="symbols/' + symbol + '.svg" alt="' + symbol + '">';
    cell.innerHTML = img;

    cell.classList.add("filled");
    cell.classList.add(symbol);

    if(checkVictory(cell) == true){
        setTimeout(function(){
        window.alert("ha vinto il giocatore " + symbol);
        clearGrid();
        }, 200)
        return;
    }

    document.getElementById("actualPlayer").innerHTML = (symbol == "cross") ? "circle" : "cross";
}

function clearGrid(){
    removeElementsByClassName("symbol");
    removeClassesByClassName("cell", ...["filled", "cross", "circle"]);
}
/*end of write/clear grid*/

/*html interaction ByClassName*/
function removeElementsByClassName(className){
    let elements = document.getElementsByClassName(className);

    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeClassesByClassName(className, ...classesToRemove){

    let elements = document.getElementsByClassName(className);

    for(let element in elements){
        for(let classToRemove in classesToRemove){
            elements[element].classList.remove(classesToRemove[classToRemove]);
        }
    }
   
}
/*end of html interaction ByClassName*/

function checkVictory(cell){

    let id = cell.id[2] + cell.id[3];
    let tag = (a, b) => document.getElementById("c_" + a + b).classList[document.getElementById("c_" + a + b).classList.length-1];

    if((tag(id[0], 0) == tag(id[0], 1)) && (tag(id[0], 1) == tag(id[0], 2)) && (tag(id[0], 0) != ""))
        return true;
    if((tag(0, id[1]) == tag(1, id[1])) && (tag(1, id[1]) == tag(2, id[1])) && (tag(0, id[1]) != ""))
        return true;

    if((tag(1, 1) == "cross") || (tag(1, 1) == "circle")){
        if((tag(0, 0) == tag(1, 1)) && (tag(1, 1) == tag(2, 2)))
            return true;
        if((tag(0, 2) == tag(1, 1)) && (tag(1, 1) == tag(2, 0)))
            return true;
    }
    return false;
}