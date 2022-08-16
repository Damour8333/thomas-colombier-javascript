/* 1ere ligne js */
/*ce ligne est un outil de débogage ouvrir la console avec l inspecteur */ 
console.log('connecté!!!');

function  disBonjour(){
    alert("Bonjour monsieur"
    );
}

function disAuRevoir(){
    alert('Ciao les amis');
}


function utiliseLesSelecteurs(){
    // recuperer tous les elements via leur nom de balise html 
    let DIV = document.getElementsByTagName('p');console.log(DIV);

    //par leur id
    let id = document.getElementById('leTexteARemplacer');
    console.log(id);

    //par leur nom d'input

    let Name = document.getElementsByName('monNom');

    console.log(Name);


    //par leur classes
    

    let salleDeclass = document.getElementsByClassName('maClasse');
    console.log(salleDeclass);

    //querySelector
    
    let querySelector = document.querySelector('p i.maClasse');
    console.log(querySelector);

    //querySelectorAll

    let querySelectorAll = document.querySelectorAll('div');

    console.log(querySelectorAll);

}