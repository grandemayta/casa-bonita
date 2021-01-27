function pannello_CB() {
  var plasma_CB = document.getElementById("plasma_CB").style.visibility;
  var menu_CB = document.getElementById("menu_CB").style.visibility;

  if (plasma_CB == "visible" && menu_CB == "visible") {
    document.getElementById("plasma_CB").style.visibility = "hidden";
    document.getElementById("menu_CB").style.visibility = "hidden";
  } else {
    document.getElementById("plasma_CB").style.visibility = "visible";
    document.getElementById("menu_CB").style.visibility = "visible";
  }
}

function home_CB() {
  document.location.href = "index.html";
}

function platos() {
  document.location.href = "platos.html";
}

function licores() {
  document.location.href = "licores.html";
}

function fiestas() {
  document.location.href = "fiestas.html";
}

function chicas() {
  document.location.href = "chicas.html";
}

function donde() {
  document.location.href = "donde.html";
}

/***************************** FUNZIONE TASTI AUMENTO DECREMENTO PLATOS*****************************/
//GUACAMOLE
function guacamole_plus() {
  var valore = document.getElementById("guacamole").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("guacamole").innerHTML = valore;
  }
}
function guacamole_minus() {
  var valore = document.getElementById("guacamole").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("guacamole").innerHTML = valore;
  }
}
//ENCHILADAS
function enchiladas_plus() {
  var valore = document.getElementById("enchiladas").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("enchiladas").innerHTML = valore;
  }
}
function enchiladas_minus() {
  var valore = document.getElementById("enchiladas").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("enchiladas").innerHTML = valore;
  }
}
//SALMON EN SALSA VERDE
function salmonensalsaverde_plus() {
  var valore = document.getElementById("salmonensalsaverde").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("salmonensalsaverde").innerHTML = valore;
  }
}
function salmonensalsaverde_minus() {
  var valore = document.getElementById("salmonensalsaverde").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("salmonensalsaverde").innerHTML = valore;
  }
}
//CARNE ASADA ALLA TAMPIQUENA
function carneasadatampiquena_plus() {
  var valore = document.getElementById("carneasadatampiquena").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("carneasadatampiquena").innerHTML = valore;
  }
}
function carneasadatampiquena_minus() {
  var valore = document.getElementById("carneasadatampiquena").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("carneasadatampiquena").innerHTML = valore;
  }
}

/***************************** FUNZIONE TASTO CALCOLA *****************************/
function calcolaPlatos() {
  var prezzi = new Array(7, 8, 10, 13);
  var quantita = new Array();
  var totale = 0;
  quantita[0] = document.getElementById("guacamole").innerHTML;
  quantita[1] = document.getElementById("enchiladas").innerHTML;
  quantita[2] = document.getElementById("salmonensalsaverde").innerHTML;
  quantita[3] = document.getElementById("carneasadatampiquena").innerHTML;

  for (var i = 0; i < 4; i++) {
    var prodotto = prezzi[i] * quantita[i];
    totale += prodotto;
  }
  if (totale < 1) {
    document.getElementById("totalePlatos").innerHTML = "";
    document.getElementById("compraPlatos").style.display = "none";
    alert("Devi comprare almeno un piatto!");
  } else {
    document.getElementById("totalePlatos").innerHTML =
      "Totale: &#8364; " + totale;
    document.getElementById("compraPlatos").style.display = "block";
  }
}

/***************************** FUNZIONE TASTO COMPRA *****************************/
function compraPlatos() {
  var decisione = confirm("Seleziona OK per conferma l'acquisto");

  if (decisione == true) {
    document.getElementById("totalePlatos").innerHTML = "";
    document.getElementById("compraPlatos").style.display = "none";
    alert("L'acquisto è stato inviato correttamente, Torna presto!");
  }
}

/***************************** FUNZIONE TASTI AUMENTO DECREMENTO PLATOS*****************************/
//EL MACHO
function macho_plus() {
  var valore = document.getElementById("macho").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("macho").innerHTML = valore;
  }
}
function macho_minus() {
  var valore = document.getElementById("macho").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("macho").innerHTML = valore;
  }
}
//MAMASITA
function mamasita_plus() {
  var valore = document.getElementById("mamasita").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("mamasita").innerHTML = valore;
  }
}
function mamasita_minus() {
  var valore = document.getElementById("mamasita").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("mamasita").innerHTML = valore;
  }
}
//DESIERTO
function desierto_plus() {
  var valore = document.getElementById("desierto").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("desierto").innerHTML = valore;
  }
}
function desierto_minus() {
  var valore = document.getElementById("desierto").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("desierto").innerHTML = valore;
  }
}
//MARGARITA
function margarita_plus() {
  var valore = document.getElementById("margarita").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("margarita").innerHTML = valore;
  }
}
function margarita_minus() {
  var valore = document.getElementById("margarita").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("margarita").innerHTML = valore;
  }
}
//CACHACA
function cachaca_plus() {
  var valore = document.getElementById("cachaca").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("cachaca").innerHTML = valore;
  }
}
function cachaca_minus() {
  var valore = document.getElementById("cachaca").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("cachaca").innerHTML = valore;
  }
}
//OROVANA
function orovana_plus() {
  var valore = document.getElementById("orovana").innerHTML;
  if (valore < 20) {
    valore++;
    document.getElementById("orovana").innerHTML = valore;
  }
}
function orovana_minus() {
  var valore = document.getElementById("orovana").innerHTML;
  if (valore > 0) {
    valore--;
    document.getElementById("orovana").innerHTML = valore;
  }
}
/***************************** FUNZIONE CALCOLO LICORES*****************************/
function calcolaLicores() {
  var prezzi = new Array(10, 12, 13, 15, 12, 13);
  var quantita = new Array();
  var totale = 0;
  quantita[0] = document.getElementById("macho").innerHTML;
  quantita[1] = document.getElementById("mamasita").innerHTML;
  quantita[2] = document.getElementById("desierto").innerHTML;
  quantita[3] = document.getElementById("margarita").innerHTML;
  quantita[4] = document.getElementById("cachaca").innerHTML;
  quantita[5] = document.getElementById("orovana").innerHTML;

  for (var i = 0; i < 6; i++) {
    var prodotto = prezzi[i] * quantita[i];
    totale += prodotto;
  }
  if (totale < 1) {
    document.getElementById("totaleLicores").innerHTML = "";
    document.getElementById("compraLicores").style.display = "none";
    alert("Devi comprare almeno un piatto!");
  } else {
    document.getElementById("totaleLicores").innerHTML =
      "Totale: &#8364; " + totale;
    document.getElementById("compraLicores").style.display = "block";
  }
}

/***************************** FUNZIONE TASTO COMPRA LICORES *****************************/
function compraLicores() {
  var decisione = confirm("Seleziona OK per conferma l'acquisto");

  if (decisione == true) {
    document.getElementById("totaleLicores").innerHTML = "";
    document.getElementById("compraLicores").style.display = "none";
    alert("L'acquisto è stato inviato correttamente, Torna presto!");
  }
}

/***************************** FUNZIONE INVIA MESSAGGIO *****************************/
function invia() {
  var valore1 = document.getElementById("email").value;
  var valore2 = document.getElementById("messaggio").value;

  if (valore1 == "") {
    document.getElementById("email").focus();
    alert("Non puoi lasciare il campo email vuoto...");
  } else if (valore2 == "") {
    document.getElementById("messaggio").focus();
    alert("Non puoi lasciare il campo messaggio vuoto...");
  } else
    alert(
      "Il messaggio è stato inviato correttamente, avrai una risposta al più presto!"
    );
}

/***************************** FUNZIONE CHICA BONITA *****************************/
function vinciChica() {
  var numInserito = document.getElementById("numInserito").value;

  var numVincente = Math.floor(Math.random() * 100 + 1);

  if (numInserito == "") {
    alert("Non puoi lasciare il campo vuoto...");
  } else if (isNaN(numInserito)) {
    alert("Devi inserire un numero...");
  } else if (numInserito < 1 || numInserito > 100) {
    alert("Devi inserire un numero compreso tra 1 e 100...");
  } else {
    if (numInserito == numVincente) {
      alert(
        'Congratulazioni! Hai vinto una cena con la nostra chica bonita, segnati questo codice "2MSG29" e portalo da noi.'
      );
    } else alert("Mi dispiace hai perso...");
  }
}
