const v = ["giorgio_casaregola@pippomail.com", "mariafilippa21122012@pippomail.com", "persona_casuale_89@topolino.com", "bagginsfrodo_lotr@mordor.com", "jhondoe404@pippomail.com"];

let mail = prompt("Email per l'accesso");
let verifica = false;
for (var i=0; i<5 ;i++){
    if(mail==v[i]){
        verifica=true;
    }
}


if(verifica){
    document.getElementById("accesso_eseguito").innerHTML =  "Accesso eseguito con successo";
}
else{
    document.getElementById("accesso_negato").innerHTML =  "Accesso fallito... email non riconosciuta";
}


