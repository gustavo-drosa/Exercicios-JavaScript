function fibonacci(){
    var numero_input = document.getElementById("numero_sequencia");

    var numero_sequencia = parseInt(numero_input.value);

    var ultimo_num = 1;
    var penultimo_num = 0;

    var resultado_html = document.getElementById("resultado");

    if(numero_sequencia <= 2){
        resultado = 1;
    }else{
        for(var i=2; i<= numero_sequencia; i++){
            resultado = penultimo_num + ultimo_num;

            penultimo_num = ultimo_num;
            ultimo_num = resultado;
        }
    }

    resultado_html.textContent = "" +resultado;

    console.log(resultado);
}