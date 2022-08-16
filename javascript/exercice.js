function remplace(){
    let textInput = document.getElementById("leTexteARecuperer").value;
    let Paragraphe = document.querySelector("#leTexteARemplacer");
      Paragraphe.textContent = textInput;
  }