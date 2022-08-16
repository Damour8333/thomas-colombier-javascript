






function refresh() {
  let textTitre = document.getElementById('titreWysiwyg').value;
  console.log(textTitre);
  document.querySelector("#titreWysiwygResultat").textContent = textTitre;

  //recupurer la valeur de l'input 

  let colorTitle = document.getElementById('colorTitleWysiwyg').value;
  ///*value sert  a recuperer la valeur de la variable */
  console.log(colorTitle);
  document.querySelector("#titreWysiwygResultat").style.color = colorTitle;
  /*//je recuper l 'lemnt qu eje veux grace  amon id et la méthode get elementby id ensuite je selectionne la balise dans laquelle je veux soumettre  mon id pour ça j 'utilise la méthode querySelector  et je mets l 'id de ma balise ave le signe # aprés la parenthése j'utilise la méthode dot c'est a dire le poinyt. ensuite tout et égale =  al avaleur a changé c('est dire la va leur que a de mandé dans notre cas colorTitle)*/
   let tailleTitle =document.getElementById('tailleTitleWysiwyg').value;
   document.querySelector("#titreWysiwygResultat").style.fontSize = ''+tailleTitle+'px';

  let textContent = document.getElementById('contentWysiwyg').value;
  console.log(textContent);
  document.querySelector("#contentWysiwygResultat").textContent = textContent;

  let imgSRC = document.getElementById('imgWysiwyg').value;
  console.log(imgSRC);
  document.querySelector("#imgWysiwygResultat").src = imgSRC;


  let imageMaxWidth = document.getElementById("imgMaxWidth").value;
  console.log(imageMaxWidth);
  document.getElementById("imgWysiwygResultat").style.width = '' + imageMaxWidth + 'px';


}
var btn = document.getElementById("btnGenerer");
btn.addEventListener('click', refresh);




var mesInputWithEvent = document.querySelectorAll(".eventClass");

mesInputWithEvent.forEach(monInput => {
  //mon itérération
  monInput.addEventListener("keyup", refresh)
  monInput.addEventListener("change", refresh)
})


