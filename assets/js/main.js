// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

$(document).ready(function(){   //a fine caricamento della pagina

  newGame(); // avvio la funzione di gioco al caricamento della pagina

  $('.reset').click(newGame); // se clicco il tasto reset si riavvia la funzione di gioco

  function newGame(){
    //reset delle variabili di gioco e dell'html
    $('.tableContainer').html('');
    $('.prossa').html("Quadrati rossi: " + "<span>" + 0 + "</span>");
    $('.pverde').html("Quadrati rossi: " + "<span>" + 0 + "</span>");

    // creo 64 quadrati con classe "square"
    for(var i = 0; i < 64; i++){
        $('.tableContainer').append('<div class="square"></div>');
    }

    //ripeto 15 volte la creazione di un numero random da 1 a 64
    var quantiRandom = 1; // tengo il conto di quanti numeri random genero
    var arrayRandom = []; // qui salvo i numeri random per confrontarli con quelli estratti

    do{
        var random64 = Math.floor(Math.random() * (64 - 1) + 1);  // creo il numero da 1 a 64
        // controllo che il numero random non si ripeta più volte
        if(arrayRandom.includes(random64)){   // se il numero è già uscito
            // se è uscito non fare nulla
            // console.log("quantiRandom: "+ quantiRandom + ". Questo numero è già uscito");
        }else{ // se non è uscito
            $('div.container .square:nth-child(' + random64 + ')').addClass('redWannabe'); //dai al div.square in posizione random la classe redWannabe in base al numero uscito
            /* console.log("quantiRandom: "+ quantiRandom + ". Aggiunto"); */
            quantiRandom++; //aumento di 1 il contatore
        }
    }while(quantiRandom <= 15)
  
    // tenere il punteggio dei Verdi VS Rossi
  var redPoint = 0, greenPoint = 0;
    $('.square').click(  //al click
      function () {
        if($(this).hasClass('active')){ // se l'elemento cliccato ha la classe .active      
        } else if($(this).hasClass('redWannabe')){  //se non ha classe .active e se ha classe .redWannabe
          $(this).css('background', 'rgb(167, 71, 70)'); // aggiungi classe .active
          redPoint++; // aggiungi classe .active
          $(this).addClass('active'); // aggiungi classe .active
          /* console.log("punteggio rosso: " + redPoint);   */
          $('.prossa').html("Quadrati rossi: " + "<span>" + redPoint + "</span>"); // scrivo nell'html punteggio
        } else {
          $(this).css('background', '#43BF85'); // aggiungi classe .active
          greenPoint++; // aggiungi classe .active
          $(this).addClass('active'); // aggiungi classe .active
          /* console.log("punteggio verde: " + greenPoint); */
          $('.pverde').html("Quadrati verdi: " + "<span>" + greenPoint + "</span>"); // scrivo nell'html punteggio
        }
      }
    );
  }


  
  });