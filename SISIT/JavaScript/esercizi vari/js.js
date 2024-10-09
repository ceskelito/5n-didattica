
const list = ["element 1", "element 2", "element 3"];

function listFiller(list){
    
    let htmlList = document.getElementById("dynamicList");

    htmlList.innerHTML += "<ul>";

    for(let element of list){
        console.log(element);
       htmlList.innerHTML += '<li>' + element + '</li>';
    }

    htmlList.innerHTML += "</ul>"
}

function dynamicMessage(){
    let name = prompt("Inserisci il tuo nome: ");
    let age = prompt("Inserisci la tua età: ");

    console.log('Ciao ${name}, vedo che hai ${age} anni');

}

dynamicMessage();
