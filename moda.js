function calculoModa() {
    const input = document.getElementById("Arreglos");
    const value = input.value; //value es una palabra reservada
    const numero = value;
    //let str = numero.split(','); 
   // for (let i = 0; i <= str; i++) {
   //     str = str + i;
    //  }
    const resultado = document.getElementById("Resultado");
    resultado.innerText = "La moda es  " + numero;
  }