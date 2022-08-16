function disBonjour() {
    alert("Bonjour monsieur");
  }
  
  function disAuRevoir() {
    alert('Ciao les amis');
  }
  
  function utiliseLesSelecteurs() {
    //alert('ma fonction');
    //recuprer tous les elements via leur nom de balise html
    let mesDIV = document.getElementsByTagName('div');
    console.log(mesDIV);
    //recuperer les elements par leur id
    let monElement = document.getElementById('noeud');
    console.log(monElement);
    //recuperer les elements via leurs noms
    //<input name ="monNom"/>
    let ElementByName = document.getElementsByName('monNom');
    console.log(ElementByName);
    //recuperer les elements via leurs classes
    let ElemByClass = document.getElementsByClassName('maClasse');
    console.log(ElemByClass);
  
    //recuperer un élément comme on pourrait le fairee en css class
    //va recupere le premier élément
    let querySelector = document.querySelector('p i.maClasse');
    console.log(querySelector);
    //va recuperer tou s les élements correspondabts
    let querySelectorAll = document.querySelectorAll('div');
    console.log(querySelectorAll);
  }
  
  var btn =document.getElementById("btnGenerer");


  function RemplaceLeTexte() {
  
    //Récupére le texte qui  est dans l'input 
    let textInput = document.getElementById("leTexteARecuperer").value;
  
    // Récupérer le noeud <p id =leTexteARemplacer></p>
    let monParagraphe = document.querySelector("#leTexteARemplacer");
  
    //Mettre le texte de l'input
    //dans le noeud
  
    monParagraphe.textContent = textInput;
  }
  //let textInput = document.getElementById("leTexteARemplacer");
  //console.log(textInput);
  //let monParagraphe = document.querySelector("#leTexteARemplacer");
  //console.log(monParagraphe);


  // btn.addEventListener('click', RemplaceLeTexte);//on ne met pas les parenthéses

  function refresh(){
    let textTitre = document.getElementById('titreWysiwyg').value;
    console.log(textTitre);
    document.querySelector("#titreWysiwygResultat").textContent= textTitre;


    let textContent =document.getElementById('contentWysiwyg').value;
    console.log(textContent);
    document.querySelector("#contentWysiwygResultat").textContent=textContent;

    let imgSRC =document.getElementById('imgWysiwyg').value;
    console.log(imgSRC);
    document.querySelector("#imgWysiwygResultat").src=imgSRC;
  }

  btn.addEventListener('click',refresh);

  // var inputTitre =document.querySelector('#titreWysiwyg');
  // console.log(inputTitre);
  // inputTitre.addEventListener('keyup',refresh);
  // inputTitre.addEventListener('change',refresh);
  

  // var imgSource =document.querySelector('#imgWysiwyg');
  // console.log(imgSource);
  // imgSource.addEventListener('keyup',refresh);
  // imgSource.addEventListener('change',refresh);
  

  // var contenu =document.querySelector('#contentWysiwyg');
  // console.log(contenu);
  // contenu.addEventListener('keyup',refresh);
  // contenu.addEventListener('change',refresh);


  var mesInputWithEvent=document.querySelectorAll(".eventClass");

  mesInputWithEvent.forEach(monInput =>{
    //mon itérération
    monInput.addEventListener("keyup",refresh)
    monInput.addEventListener("change",refresh)
  })
  

