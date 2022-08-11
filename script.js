function disBonjour() {
    alert("Bonjour monsieur");
}

function disAuRevoir() {
    alert('Ciao les amis');
}

function utiliseLesSelecteurs() {
    //alert('ma fonction');
//recuprer tous les elements via leur nom de balise html
 let mesDIV=  document.getElementsByTagName('div');
 console.log(mesDIV);
 //recuperer les elements par leur id
 let monElement = document.getElementById('noeud');
 console.log(monElement);
 //recuperer les elements via leurs noms
 //<input name ="monnom"/>
 let ElementByName = document.getElementsByName('monNom');
 console.log(ElementByName);
 //recuperer les elements via leurs classes
 let ElemByClass = document.getElementsByClassName('maClasse');
 console.log(ElemByClass);
}


//reprendre  a 37 min

