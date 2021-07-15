function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = value*value;
    //alert(area);
    const resultado = document.getElementById("Resultado");
    resultado.innerText = "El área es  " + area;
  }