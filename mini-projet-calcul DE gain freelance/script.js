function CalculGain(){
    //on récupére le formulaire dans le html
    let myForm = document.getElementById('formCalculGain');
    //on le transforme en objet en forme data 
    let formObj = new FormData(myForm);
// On récupére les inputs de notre formulaire par leurs noms
    let tauxHoraire =  formObj.get('TH');
    let tauxJournalier =  formObj.get('TJM');
    let Extras =  formObj.get('Extras');

    let qtetauxHoraire =  formObj.get('QteTH');
    let qtetauxJournalier =  formObj.get('QteTJM');
    let qteExtras =  formObj.get('QteExtras');
    let charges = formObj.get('Charges');
    //on commence le calcul
    let gainHeure = tauxHoraire *  qtetauxHoraire;
    //alert(gainHeure);

    let gainJour =tauxJournalier *qtetauxJournalier;

    let gainExtras = Extras * qteExtras;

    let total = gainHeure + gainJour +gainExtras;

    document.getElementById('resultatBrut').innerText=(total +"€");
}