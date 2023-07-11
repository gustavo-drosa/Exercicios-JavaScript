// Vai identificar o poligono selecionado e envia-lo para sua função
function identificarPoligono(){
    var poligono = document.getElementById("selecionar_poligono");

    switch(poligono.value){
        case "triangulo":
            calcularTriangulo();
            break;
        case "quadrado":
            calcularQuadrado();
            break;
        case "circunferencia":
            calcularCircunferencia();
            break;
        default:
            console.log("valor não identificado!");
            
    }
}

function calcularTriangulo(){
    var altura = parseFloat(document.getElementById("inputAltura").value);
    var comprimento = parseFloat(document.getElementById("inputComprimento").value); 

    var perimetro = altura * 3;
    var area = (comprimento * altura) / 2;

    console.log("Triangulo:")
    console.log("perimetro do triangulo: "+perimetro )
    console.log("área do triangulo: "+area)

    perimetro_resposta.textContent = perimetro;
    area_resposta.textContent = area;
}

function calcularQuadrado(){
    var altura = parseFloat(document.getElementById("inputAltura").value)

    var perimetro = altura * 4;
    var area = altura * altura;

    console.log("Quadrado: ")
    console.log("Perímetro: " + perimetro)
    console.log("Área: " + area)

    perimetro_resposta.textContent = perimetro;
    area_resposta.textContent = area;
}

function calcularCircunferencia(){
    var raio = parseFloat(document.getElementById("inputRaio").value);

    var perimetro = 2 * Math.PI * raio;
    var area = Math.PI * Math.pow(raio, 2);

    console.log("Circunferência: ");
    console.log("Perímetro: " + perimetro);
    console.log("Área: " + area);

    perimetro_resposta.textContent = perimetro;
    area_resposta.textContent = area;  
}