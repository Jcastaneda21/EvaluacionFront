const guajira = 1000000;
const canonChica = 1600000;
const llanosOrient = 1500000;

let subtotal,descuentos,neto,descSub, respuesta

let acumGuajiraA=0, acumCanonA=0 ,acumLLanosA=0,acumGuajiraN=0, acumCanonN=0 ,acumLLanosN=0; 

let acumVueGua = 0; acumVueCan = 0, acumVueLLano = 0, acumDesc = 0; acumNeto = 0;

const descuentoNino = 0.6;

respuesta = parseInt(prompt("1.Si\n2.No\nDesea realizar una cotizacion?"))

while(respuesta === 1){
    let cliente = prompt("Digite el nombre del cliente: ");
    let adulto = parseInt(prompt("Digite la cantidad de adultos: "));
    let nino = parseInt(prompt("Digite la cantidad de ninos: "));
    let destino = parseInt(prompt("Elija su destino\n 1. Guajira.\n 2.Cañon del Chicamocha. \n 3.Llanos Orientales"));

    if (adulto > 4 && nino > 2){
         descSub = 0.2;
    }else{
         descSub = 0;
    }

    if(destino === 1){
        subtotal = ((adulto * guajira) + (nino * (guajira * descuentoNino)));
        lugar = "Guajira";
        descuentos = subtotal * descSub;
        neto = subtotal - (subtotal * descSub);
        acumGuajiraA += adulto
        acumGuajiraN += nino
        acumVueGua += subtotal

    }else if(destino === 2){
        subtotal = ((adulto * canonChica) + (nino * (canonChica * descuentoNino)));
        lugar = "Cañon Chicamocha";
        descuentos = subtotal * descSub;
        neto = subtotal - (subtotal * descSub);
        acumCanonA += adulto
        acumCanonN += nino
        acumVueCan += subtotal
    }else if(destino === 3){
        subtotal = ((adulto * llanosOrient) + (nino * (llanosOrient * descuentoNino)));
        lugar = "Llanos Orientales";
        descuentos = subtotal * descSub;
        neto = subtotal - (subtotal * descSub);
        acumLLanosA += adulto
        acumLLanosN += nino
        acumVueLLano += subtotal
    }else{
        console.log("Digite un destino correcto");
    }

    totalAdultos = acumCanonA + acumGuajiraA + acumLLanosA;
    totalNinos = acumGuajiraN + acumCanonN + acumLLanosN;
    acumDesc += descuentos
    acumNeto += neto


    console.log(`┌──────────────────────────────────────────────────┐<br>`);
    console.log(`│                    COTIZACION                    │<br>`);
    console.log(`└──────────────────────────────────────────────────┘<br>`);

    console.log(`Nombre Cliente: ${cliente}`);
    console.log(`Nombre Destino: ${lugar}`);
    console.log(`Cantidad de Adultos: ${adulto}`);
    console.log(`Cantidad de Niños: ${nino}`);
    console.log(`El Subtotal es: ${subtotal}`);
    console.log(`El valor descuento es de ${descuentos}`);
    console.log(`El neto a pagar es: ${neto}`);

respuesta = parseInt(prompt("1.Si\n2.No\nDesea ingresar una factura?"))

}

console.log(`┌──────────────────────────────────────────────────┐<br>`);
console.log(`│                TOTAL DE VENTAS                   │<br>`);
console.log(`└──────────────────────────────────────────────────┘<br>`);

console.log(`Total de personas adultas: ${totalAdultos}`);
console.log(`Totral de niños: ${totalNinos}`);
console.log(`Cantidad de niños y adultos(Guajira): ${acumGuajiraA + acumGuajiraN}`);
console.log(`Cantidad de niños y adultos(Cañon Chicamocha): ${acumCanonA + acumCanonN}`);
console.log(`Cantidad de niños y adultos(Llanos Orientales): ${acumLLanosA + acumLLanosN}`);
console.log(`Dinero ganado de vuelos a la Guajira: ${acumVueGua}`);
console.log(`Dinero ganado de vuelos a la Cañon Chicamocha: ${acumVueCan}`);
console.log(`Dinero ganado de vuelos a la Llanos Orientales: ${acumVueLLano}`);
console.log(`Total de descuentos en vuelos: ${acumDesc}`);
console.log(`Total del neto pagado: ${acumNeto}`);

