//Sofia Espinoza Vera//

//BLOQUE 1: Ejercicios individuales (un solo número)//
/*1. Serie de Fibonacci
Generar los primeros n términos de la serie de Fibonacci, donde cada término se obtiene
sumando los dos anteriores.*/
function seriFibonacci(){
let nTerminos=parseInt(prompt("Ingrese cantidad de términos: "));
let actual=1, anterior=0, nuevo;
    for(let i=2; i<nTerminos; i++){
        nuevo=anterior+actual;
        console.log(`${nuevo}`);
        anterior=actual;
        actual=nuevo;
    }
}debugger;
seriFibonacci()

/*2. Divisores de un número
Mostrar todos los números que dividen exactamente al número ingresado.*/
function divNum(){
    let num=parseInt(prompt("Ingrese un número: "));
    let div=[];
    for(let i=1; i<=num; i++){
        if(num%i===0){
            div.push(i)
        }
    }
    console.log(`Divisores: ${div}`);
}debugger;
divNum()

/*3. Suma de los divisores de un número
Calcular la suma total de los divisores positivos de un número*/
function sumaDiv(){
    let num=parseInt(prompt("Ingrese un número: "));
    let suma=0;
    for(let i=1; i<=num; i++){
        if(num%i===0){
            suma=suma+i;
        }
    }
    console.log(`Suma de divisores: ${suma}`);
}debugger;
sumaDiv()

/*4. Verificar si un número es perfecto
Un número es perfecto si la suma de sus divisores (sin incluir él mismo) es igual al número.*/
function numPerfecto(){
    let num=parseInt(prompt("Ingrese un número: "));
    let suma=0;
    for(let i=1; i<num; i++){
        if(num%i===0){
            suma=suma+i;
        }
    }
    console.log(`${suma} es un número perfecto.`);
}debugger;
numPerfecto()

/*5. Verificar si un número es primo
Un número primo solo tiene dos divisores: 1 y él mismo.*/
function numPrimo(){
    let num=parseInt(prompt("Ingrese un número: "));
    let numpri=true
    for(let i=2; i<num; i++){
        if(num%i===0){
            numpri=false
        }
    }
    if(numpri===true){
    console.log(`${num} es un número primo.`);
    }
}debugger;
numPrimo()

/*6. Invertir los dígitos de un número
Mostrar el número al revés.*/
function invNum(){
    let num=parseInt(prompt("Digite un número:"));
    let inver=0;
    while(num>0){
        let ultimun=num%10;
        inver=(inver*10)+ultimun;
        num=Math.floor(num/10);
    }
    console.log(`Número invertido: ${inver}`);
}debugger;
invNum()

/*7. Contar dígitos de un número
Determinar cuántos dígitos tiene un número entero.*/
function contarDig(){
    let digitos=parseInt(prompt("Ingrese varios números:"));
    let c=0;
    while(digitos>0){
        digitos=Math.floor(digitos/10);
        c=c+1
    }
    console.log(`Cantidad de digitos: ${c}`)
}debugger;
contarDig()

/*8. Factorial de un número
Calcular el producto de todos los enteros desde 1 hasta n.*/
function factorial(){
    let num=parseInt(prompt("Ingrese un número:"));
    let fac=1;
    for(let i=1; i<=num; i++){
        fac=fac*i;
    }
    console.log(`${num}!= ${fac}`);
}debugger;
factorial()

/*9. Sumas sucesivas
Realizar sumas sucesivas de un número.*/
function sumSucesiva(){
    let num=parseInt(prompt("Ingrese un número:"));
    let repe=parseInt(prompt("Ingrese cantidad a repetir:"));
    let numfinal=0;
    for(let i=0; i<repe; i++){
        numfinal=numfinal+num;
    }
    console.log(`Resultado: ${numfinal}`);
}debugger;
sumSucesiva()

/*10. Restas sucesivas
Restar un número de manera repetitiva hasta llegar a 0 o menor.*/
function resSucesiva(){
    let num=parseInt(prompt("Ingrese un número:"));
    let repe=parseInt(prompt("Ingrese cantidad a repetir:"));
    let c=0;
    while(num>=repe){
        num=num-repe;
        c=c+1;
    }
    console.log(`Resultado final: ${c}`);
}debugger;
resSucesiva()

//BLOQUE 2: Versión con arreglos (listas)//
/*1. Serie de Fibonacci para varios términos
Entrada: n_valores = [5, 8, 10]*/
function arreSeriFibonacci(){
let nTerminos=[5, 8, 10];
for(let i=0; i<nTerminos.length; i++){
    let arre=nTerminos[i], actual=1;
    let resul="", anterior=0, nuevo;
    if(arre>=1){
        resul=resul+anterior;
    }if(arre>=2){
        resul=resul+", "+actual
    }
    for(let a=2; a<arre; a++){
        nuevo=anterior+actual;
        resul=resul+", "+nuevo;
        anterior=actual;
        actual=nuevo;
    }
    console.log(`Fibonacci (${arre}): ${resul}`);
    }
}debugger;
arreSeriFibonacci()

/*3. Suma de divisores de varios números
Entrada: numeros = [6, 12, 28]*/
function arreSumaDiv(){
    let arre=[6, 12, 28];
    for(let i=0; i<arre.length; i++){
        let act=arre[i];
        let sum=0, div="";
        for(let a=1; a<=act; a++){
            if(act%a===0){
            sum=sum+a;
                if(div.length>0){
                div=div+", "+a;
                }else{
                div=div+a;
                }
            }
        }
        console.log(`${act} → ${sum}`);
    }
}debugger;
arreSumaDiv()

/*2. Divisores de varios números
Entrada: numeros = [6, 10, 15]*/
function arreDivNum(){
    let arre=[6, 10, 15];
    for(let i=0; i<arre.length; i++){
        let act=arre[i];
        let div="";
        for(let a=1; a<=act; a++){
            if(act%a===0){
                if(div.length>0){
                div=div+", "+a;
                }else{
                div=div+a;
                }
            }
        }
        console.log(`${act} → ${div}`);
    }
}debugger;
arreDivNum()

/*4. Números perfectos en una lista
Entrada: numeros = [6, 10, 28, 30]*/
function arreNumPerfecto(){
    let arre=[6, 10, 28, 30];
    let nperf="";
    for(let i=0; i<arre.length; i++){
        let act=arre[i]
        let suma=0;
        for(let a=1; a<act; a++){
            if(act%a===0){
            suma=suma+a;
            }
        }
        if(suma===act){
            if(nperf.length>0){
                nperf=nperf+", "+act;
            }else{
                nperf=nperf+act;
            }
        }
    }
    console.log(`Números prefectos: ${nperf}`);
}debugger;
arreNumPerfecto()

/*5. Números primos en una lista
Entrada: numeros = [5, 6, 7, 8, 11]*/
function arreNumPrimo(){
    let arre=[5, 6, 7, 8, 11];
    let npri="";
    for(let i=0; i<arre.length; i++){
        let act=arre[i];
        let numpri=true
        for(let a=2; a<act; a++){
            if(act%a===0){
            numpri=false
            }
        }
        if(numpri===true){
            if(npri.length>0){
                npri=npri+", "+act;
            }else{
                npri=npri+act;
            }
        }
    }
    console.log(`Primos: ${npri}`);
}debugger;
arreNumPrimo()

/*6. Invertir varios números
Entrada: numeros = [123, 456, 780]*/
function arreInvNum(){
    let arre=[123, 456, 780];
    let ninver="";
    for(let i=0; i<arre.length; i++){
        let act=arre[i];
        let inver=0;
        while(act>0){
            let ultimun=act%10;
            inver=(inver*10)+ultimun;
            act=Math.floor(act/10);
        }
        if(ninver.length>0){
            ninver=ninver+", "+inver;
        }else{
            ninver=ninver+inver;
        }
    }
    console.log(`${arre} → ${ninver}`);
}debugger;
arreInvNum()

/*7. Contar dígitos de varios números
Entrada: numeros = [45, 678, 12345]*/
function arreContarDig(){
    let arre=[45, 678, 12345];
    for(let i=0; i<arre.length; i++){
        let act=arre[i];
        let vori=act
        let c=0;
        while(act>0){
            act=Math.floor(act/10);
            c=c+1
        }
        console.log(`${vori} → ${c} digitos.`)
    }
}debugger;
arreContarDig()

/*8. Factorial de varios números
Entrada: numeros = [3, 4, 5]*/
function arreFactorial(){
    let num=[3, 4, 5];
    for(let i=0; i<num.length; i++){
        let nuac=num[i];
        let fac=1;
        for(let c=nuac; c>=1; c--){
            fac*=c;
        }
        console.log(`${nuac}! = ${fac}`)
    }
}debugger;
arreFactorial()

/*9. Sumas sucesivas en una lista
Entrada: numeros = [2, 3, 4] veces = 4*/
function arreSumSucesiva(){
    let arre=[2, 3, 4];
    let repe=4;
    for(let i=0; i<arre.length; i++){
        let act=arre[i];
        let numfinal=0;
        for(let a=0; a<repe; a++){
            numfinal=numfinal+act;
        }
        console.log(`${act} x 4 = ${numfinal}`);
    }
}debugger;
arreSumSucesiva()

/*10. Restas sucesivas en una lista
Entrada: numeros = [15, 22, 30]valor_resta = 4*/
function arreResSucesiva(){
    let arre=[15, 22, 30];
    let repe=4;
    for(let i=0; i<arre.length; i++){
        let nos=arre[i];
        let act=arre[i];
        let c=0;
        while(act>=repe){
            act=act-repe;
            c=c+1;
        }
        console.log(`${nos} → ${act}`);
    }
}debugger;
arreResSucesiva()