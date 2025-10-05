//Bloque 1: Ejercicios con Cadenas//
/* 1. Contar caracteres de una palabra
o Entrada: "Manzana"
o Salida: "La palabra tiene 7 letras." */
function caracter(){
    let palabra=prompt("Ingrese una palabra");
    if (palabra){
        let ncaracter=palabra.length;
        console.log(`"La palabra tiene ${ncaracter} caracteres"`);
    }else{
        console.log("No se ingreso palabra")
    }
}debugger;
caracter()

/* 2. Contar apariciones de una letra específica
o Entrada: "Me encanta el café"
o Salida: "La letra 'e' aparece 4 veces." */
function letraEspecifica(){
    let palabra=prompt("Ingrese una palabra").toLocaleLowerCase();
    let letra=prompt("Ingrese una letra").toLocaleLowerCase();
    let c=0;
    for(let i=0; i<palabra.length; i++){
        if (palabra[i]===letra){
            c++;
        }
    }
    console.log(`La letra ${letra} aparece ${c} veces`);
}debugger;
letraEspecifica()

/* 3. Invertir un texto
o Entrada: "Quito"
o Salida: "otiuq" */
function textoInve(){
    let palabra=prompt("Ingrese una palabra a invertir");
    let tinver="";
    for (let i=palabra.length-1; i>=0; i--){
        cactual=palabra[i];
        tinver=tinver+cactual;
    }
    console.log(`La palabra invertida es "${tinver}"`);
}debugger;
textoInve()

/* 4. Comparar longitudes de cadenas
o Entrada: "García" y "Pérez"
o Salida: "El apellido 'García' tiene más letras." */
function lonCadenas(){
    let c1=prompt("Ingrese apellido");
    let c2=prompt("Ingrese apellido");
    if(c1.length>c2.length){
        console.log(`El apellido "${c1}" tiene más letras`);
    }else{
        console.log(`El apellido "${c2}" tiene más letras`);
    }
}debugger;
lonCadenas()

/* 5. Iniciales de un nombre completo
o Entrada: "Ana María Torres"
o Salida: "A.M.T." */
function iniNomCompleto(){
    let nom=prompt("Ingrese nombre completo");
    let ini=""
    for (let i=0; i<nom.length; i++){
        ininom=nom[i];
        if (ininom >= "A" && ininom <= "Z"){
            ini+=ininom+".";
        }
    }
    console.log(`Las iniciales son ${ini}`);
}debugger;
iniNomCompleto()

/* 6. Reemplazo de caracteres
o Entrada: "Programador"
o Salida: "Pr#gramad#r" */
function reemCaracter(){
    let palabra=prompt("Ingrese palabra");
    let cam=""
    for (let i=0; i<palabra.length; i++){
        carac=palabra[i];
        if (carac === "r"){
            cam+="#";
        }else{
            cam+=carac;
        }
    }
    console.log(`El cambio queda asi: ${cam}`);
}debugger;
reemCaracter()

/* 7. Palabra palíndroma
o Entrada: "radar"
o Salida: "La palabra 'radar' es un palíndromo." */
function palabraPalindroma(){
    let palabra=prompt("Ingrese una palabra palíndroma en minuscula");
    let pinver="";
    for (let i=palabra.length-1; i>=0; i--){
        cactual=palabra[i];
        pinver=pinver+cactual;
        if (palabra===pinver){
            console.log(`La palabra "${palabra}" es un palíndromo`)
        }
    }
}debugger;
palabraPalindroma()

/* 8. Frase con mayor cantidad de caracteres
o Entrada: "Me gusta el fútbol" y "Prefiero el baloncesto"
o Salida: "La frase 'Prefiero el baloncesto' tiene más caracteres." */
function fraMaCaracter(){
    let fra1=prompt("Ingrese una frase");
    let fra2=prompt("Ingrese una frase");
    if( fra1.length>fra2.length){
        console.log(`La frase "${fra1}" tiene más caracteres`);
    }else{
        console.log(`La frase "${fra2}" tiene más caracteres`);
    }
}debugger;
fraMaCaracter()

/* 9. Contar apariciones de un carácter elegido
o Entrada: Texto: "Examen de programación", Carácter: "m"
o Salida: "La letra 'm' aparece 3 veces." */
function conCaracElegido(){
    let texto=prompt("Ingrese texto");
    let caracter=prompt("Ingrese caracter a contar");
    let c=0
    for (let i=0; i<texto.length; i++){
        cactual=texto[i];
        if (cactual===caracter){
            c+=1;
        }
    }
    console.log(`La letra "${caracter}" aparece ${c} veces`)
}debugger;
conCaracElegido()

/* 10. Dividir oración en palabras
• Entrada: "Me gusta aprender programación" */
function divOraPalabras(){
    let ora=prompt("Ingrese una oración");
    let pactual="";
    let oprocesar=ora+" ";
    for ( let i=0; i<oprocesar.length; i++){
        carac=oprocesar[i];
        if (carac===" "){
            if(pactual.length>0){
                console.log(pactual);
                pactual="";
            }
        }else{
            pactual+=carac;
        }
    }
}debugger;
divOraPalabras()

// Bloque 2: Ejercicios con Arreglos //
/* 11. Divisores de números en un arreglo
• Entrada: [6, 10]
• Salida: Divisores de 6: 1, 2, 3, 6. Divisores de 10: 1, 2, 5, 10 */
function divNumArre(){
    let numeros=[6, 10];
    for (i=0; i<numeros.length; i++){
        let numact=numeros[i];
        let divsor="";
        for (let c=1; c<=numact; c++){
            let r=numact%c;
            if(r===0){
                if(divsor.length>0){
                    divsor+=", ";
                }
                divsor+=c;
            }
        }
        console.log(`Divisores de ${numact}: ${divsor}`);
    }
}debugger;
divNumArre()

/* 12. Suma de divisores en un arreglo
• Entrada: [6, 12]
• Salida: Suma divisores de 6 = 12. Suma divisores de 12 = 28 */
function sumDivArre(){
    let numeros=[6, 12];
    for (i=0; i<numeros.length; i++){
        let numact=numeros[i];
        let sumdiv=0;
        for (let c=1; c<=numact; c++){
            let r=numact%c;
            if(r===0){
                sumdiv+=c;
            }
        }
        console.log(`Suma divisores de ${numact}: ${sumdiv}`);
    }
}debugger;
sumDivArre()

/* 13. Números perfectos en un arreglo
• Entrada: [6, 10, 28]
• Salida: "Números perfectos: 6, 28" */
function numPerfecto(){
    let numero=[6, 10, 28];
    for (i=0; i<numero.length; i++){
        let nact=numero[i];
        let sumdiv=0;
        for (let c=1; c<nact; c++){
            if(nact%c===0){
                sumdiv+=c;
            }
        }
        if (sumdiv===nact){
            console.log(`Numeros perfectos: ${nact}`)
        }
    }
}debugger;
numPerfecto()

/* 14. Números primos en un arreglo
• Entrada: [7, 8, 13]
• Salida: "Números primos: 7, 13" */
function numPrimos(){
    let nume=[7, 8, 13];
    for (i=0; i<nume.length; i++){
        let nuac=nume[i];
        let npri=true;
        for (let d=2; d<nuac; d++){
            if (nuac%d===0){
                npri=false;
                break;
            }
        }
        if (npri){
            console.log(`Numero primo: ${nuac}`)
        }
    }
}debugger;
numPrimos()

/* 15. Factorial de números en un arreglo
• Entrada: [3, 5]
• Salida: 3! = 6. 5! = 120*/
function numFactorial(){
    let num=[3, 5];
    for(let i=0; i<num.length; i++){
        let nuac=num[i];
        let fac=1;
        for(let c=nuac; c>=1; c--){
            fac*=c;
        }
        console.log(`${nuac}! = ${fac}`)
    }
}debugger;
numFactorial()

/* 16. Invertir números en un arreglo
• Entrada: [123, 450]
• Salida: [321, 54] */
function inverArre(){
    let arre=[123, 450];
    let arrinv=[];
    for (let i=arre.length-1; i>=0; i--){
        let cactual=arre[i];
        let cade=String(cactual);
        let cadeinv="";
        for(let c=cade.length-1; c>=0; c--){
            cadeinv+=cade[c];
        }
        arrinv.push(cadeinv);
    }
    console.log(`[${arrinv}]`);
}debugger;
inverArre()

//Arreglos clásicos de práctica//
/* 17. Promedio de un arreglo
• Entrada: [5, 7, 9, 3, 6]
• Salida: "El promedio es 6." */
function proArre(){
    let nota=[5, 7, 9, 3, 6];
    let sumt=0, prom=0;
    for(let i=0; i<nota.length; i++){
        sumt+=nota[i];
    }
    prom=sumt/nota.length;
    console.log(`Promedio: ${prom}`)
}debugger;
proArre()

/* 18. Contar impares en un arreglo
• Entrada: [2, 5, 7, 8, 10]
• Salida: "Cantidad de impares: 2" */
function conImparArre(){
    let ns=[2, 5, 7, 8, 10];
    let cimpar=0;
    for(let i=0; i<ns.length; i++){
        let num=ns[i];
        if (num%2!==0){
            cimpar+=1;
        }
    }
    console.log(`Cantidad de impares: ${cimpar}`)
}debugger;
conImparArre()

/* 19. Mayores de edad en un arreglo
• Entrada: [15, 22, 18, 30, 12]
• Salida: "Mayores de edad: 3" */
function mayEdadArre(){
    let ed=[15, 22, 18, 30, 12];
    let ced=0;
    for(i=0; i<ed.length; i++){
        let e=ed[i];
        if(e>=18){
            ced+=1;
        }
    }
    console.log(`Mayores de edad: ${ced}`);
}debugger;
mayEdadArre()

/* 20. Buscar valor en un arreglo
• Entrada: [4, 8, 15, 23], valor = 15
• Salida: "El valor 15 sí existe en el arreglo." */
function busValArre(){
    let arre=[4, 8, 15, 23];
    let valor=15;
    for(let i=0; i<arre.length; i++){
        let eact=arre[i];
        if(eact===valor){
            console.log(`El valor ${valor} existe en el arreglo`);
        }
    }
}debugger;
busValArre()

/* 21. Concatenar palabras de un arreglo
• Entrada: ["Me", "gusta", "programar"]
• Salida: "Me gusta programar" */
function conPalaArre(){
    let arre=["Me", "gusta", "programar"];
    let arrecon="";
    for (let i=0; i<arre.length; i++){
        arrecon+=arre[i];
        if(i<arrecon.length-1){
            arrecon+=" ";
        }
    }
    console.log(`"${arrecon}"`);
}debugger;
conPalaArre()

/* 22. Cubo de elementos de un arreglo
• Entrada: [2, 3, 4]
• Salida: [8, 27, 64] */
function cuboEleArre(){
    let arre=[2, 3, 4];
    let arrecu=[];
    for(i=0; i<arre.length; i++){
        let pactu=arre[i];
        let cub=pactu*pactu*pactu;
        arrecu.push(cub);
    }
    console.log(`[${arrecu}]`)
}debugger;
cuboEleArre()

/* 23. Tabla de multiplicar de elementos
• Entrada: [3, 5]
• Salida: Tabla de 3: 3, 6, 9, …, 30. Tabla de 5: 5, 10, 15, …, 50 */
function tablaMulti(){
    let nutabla=[3, 5];
    for (let i=0; i<nutabla.length; i++){
        let resul="";
        let nbase=nutabla[i];
        resul+=`Tabla de ${nutabla[i]}: `;
        for(let mul=1; mul<=10; mul++){
            let r=nbase*mul;
            resul+=r;
            if(mul<10){
                resul+=", ";
            }
        }
        console.log(`${resul}`);
    }
}debugger;
tablaMulti()

/* 24. Factorial de cada número en un arreglo
• Entrada: [4, 6]
• Salida: [24, 720] */
function facNumArre(){
    let arre=[4, 6];
    let arrfac=[];
    for(let i=0; i<arre.length; i++){
        let nuac=arre[i];
        let fac=1;
        for(let c=nuac; c>=1; c--){
            fac*=c;
        }
        arrfac.push(fac);
    }
    console.log(`[${arrfac}]`)
}debugger;
facNumArre()

/* 25. Copiar pares a otro arreglo
• Entrada: [3, 8, 11, 14, 25]
• Salida: [8, 14] */
function copParArre(){
    let arre=[3, 8, 11, 14, 25], arreuni=[];
    for(let i=0; i<arre.length; i++){
        let parre=arre[i];
        if (parre%2===0){
            arreuni.push(parre);
        }
    }
    console.log(`[${arreuni}]`)
}debugger;
copParArre()

/* 26. Suma de dos arreglos en un tercero
• Entrada: A = [2, 4, 6], B = [1, 3, 5]
• Salida: C = [3, 7, 11] */
function sumArre(){
    let arreA=[2, 4, 6], arreB=[1, 3, 5], arreC=[];
    for(let i=0; i<arreA.length; i++){
        let caracA=arreA[i], caracB=arreB[i];
        let sum=caracA+caracB;
        arreC.push(sum);
    }
    console.log(`[${arreC}]`);
}debugger;
sumArre()