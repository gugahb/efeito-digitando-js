let i = 0;
let message = "Aqui vai o texto que você quer animar com a escrita. Tutorial do @sujeitoprogramador";

typing();

function typing(){
    if (i < message.length){
        document.getElementById('text').innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
