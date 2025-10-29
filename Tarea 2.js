/*SOFIA GABRIELA ESPINOZA VERA*/
//Bloque 1: Ejercicios con Cadenas//
/*1. Contar caracteres de una frase publicitaria
•	Entrada: "La tecnología avanza"
•	Salida: "La frase tiene 19 caracteres."*/
function contarCaracter(){
    let frase=prompt("Digite una frase");
    if (frase){
        let ccaracter=frase.length;
        console.log(`"La frase tiene ${ccaracter} caracteres"`);
    }else{
        console.log("No digito una frase")
    }
}debugger;
contarCaracter()

/*2. Contar apariciones de una vocal en un título
•	Entrada: "Programación avanzada"
•	Salida: "La vocal 'a' aparece 5 veces."*/
function contarApariciones(){
    let titulo=prompt("Digite un título");
    let vocal=prompt("Digite la vocal a contar");
    let c=0;
    for(let i=0; i<titulo.length; i++){
        if (titulo[i]===vocal){
            c++;
        }
    }
    console.log(`"La vocal '${vocal}' aparece ${c} veces"`);
}debugger;
contarApariciones()

/*3. Invertir un nombre de producto
•	Entrada: "Laptop"
•	Salida: "potpaL"*/
function invertirNombre(){
    let nom=prompt("Digite nombre de un producto");
    let ninver="";
    for(let i=nom.length-1; i>=0; i--){
        cactual=nom[i];
        ninver=ninver+cactual;
    }
    console.log(`"El nombre invertido es: '${ninver}'"`)
}debugger;
invertirNombre()

/*4. Comparar nombres de ciudades por longitud
•	Entrada: "Milagro" y "Guayaquil"
•	Salida: "La palabra 'Guayaquil' tiene más letras."*/
function compararNom(){
    let ciudad1=prompt("Digite nombre de una ciudad");
    let ciudad2=prompt("Digite nombre de una ciudad");
    if(ciudad1.length>ciudad2.length){
        console.log(`"La palabra '${ciudad1}' tiene más letras"`);
    }else{
        console.log(`"La palabra '${ciudad2}' tiene más letras"`);
    }
}debugger;
compararNom()

/*5. Obtener iniciales de un cargo profesional
•	Entrada: "Director General Académico"
•	Salida: "D.G.A."*/
function obtenerIniciales(){
    let cargo=prompt("Digite su cargo");
    let ini=""
    for (let i=0; i<cargo.length; i++){
        inicargo=cargo[i];
        if (inicargo>= "A" && inicargo <="Z"){
            ini+=inicargo+".";
        }
    }
    console.log(`"Las iniciales del cargo son: '${ini}'"`);
}debugger;
obtenerIniciales()

//Bloque 2 (versión con Arreglos del bloque1)//
/*1. Dado un arreglo con frases publicitarias, contar cuántos caracteres tiene cada una.
Entrada: ["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"]
Salida:
"La tecnología avanza" → 19 caracteres  
"Innovar para crecer" → 20 caracteres  
"Calidad garantizada" → 21 caracteres*/
function contarCaracter2(){
    let arre=["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"];
    for (let i=0; i<arre.length; i++){
        let fraactual=arre[i];
        let ccaracter=fraactual.length;
        console.log(`"${fraactual}" → ${ccaracter} caracteres`);
    }
}debugger;
contarCaracter2()

/*2. Dado un arreglo de títulos y una vocal específica, contar cuántas veces aparece esa vocal en cada título.
Entrada: ["Programación avanzada", "Desarrollo web", "Análisis de datos"]
vocal = 'a'
Salida:
"Programación avanzada" → 5 veces la 'a'  
"Desarrollo web" → 1 vez la 'a'  
"Análisis de datos" → 4 veces la 'a'*/
function contarApariciones2(){
    let arre=["Programación avanzada", "Desarrollo web", "Análisis de datos"];
    let vocal="a";
    for(let i=0; i<arre.length; i++){
        let fraactual=arre[i];
        let c=0;
        for(let i=0; i<fraactual.length; i++){
            if (fraactual[i]===vocal){
            c++;
            }
        }
        console.log(`"${fraactual}" → ${c} veces la '${vocal}'`);
    }
}debugger;
contarApariciones2()

/*3. Dado un arreglo con nombres de productos, mostrar cada uno invertido.
Entrada: ["Laptop", "Celular", "Tablet"]
Salida:
"Laptop" → "potpaL"  
"Celular" → "raluleC"  
"Tablet" → "telbaT"*/
function invertirNombre2(){
    let arre=["Laptop", "Celular", "Tablet"];
    for(i=0; i<arre.length; i++){
        let nactual=arre[i];
        let ninver=""
        for(let i=nactual.length-1; i>=0; i--){
            cactual=nactual[i];
            ninver=ninver+cactual;
        }
        console.log(`"${nactual}" → "${ninver}"`)
    }
}debugger;
invertirNombre2()

/*4. Dado un arreglo con nombres de ciudades, identificar cuál tiene más letras.
Entrada: ["Milagro", "Guayaquil", "Quito", "Cuenca"]
Salida: "La ciudad con más letras es 'Guayaquil' (9 letras)."*/
function compararNom2(){
    let arre=["Milagro", "Guayaquil", "Quito", "Cuenca"];
    let clarga=""
    let lonmax=0
    for(i=0; i<arre.length; i++){
        let cactual=arre[i];
        let lonactual=cactual.length;
        if(lonactual>lonmax){
            lonmax=lonactual;
            clarga=cactual
        }
    }
    console.log(`"La ciudad con más letras es '${clarga}' (${lonmax} letras)"`);
}debugger;
compararNom2()

/*5. Dado un arreglo con nombres de cargos profesionales, obtener las iniciales de cada uno.
Entrada: ["Director General Académico", "Jefe de Laboratorio", "Asistente Administrativo"]
Salida:
"Director General Académico" → D.G.A.  
"Jefe de Laboratorio" → J.D.L.  
"Asistente Administrativo" → A.A.*/
function obtenerIniciales2(){
    let arre=["Director General Académico", "Jefe de Laboratorio", "Asistente Administrativo"];
    for(i=0; i<arre.length; i++){
        let pactual=arre[i];
        let ini="";
        for (let i=0; i<pactual.length; i++){
            inicargo=pactual[i];
            if (inicargo>= "A" && inicargo <="Z"){
            ini+=inicargo+".";
            }
        }
        console.log(`"${pactual}" → ${ini}`);
    }
}debugger;
obtenerIniciales2()

//Bloque 3: Ejercicios Individuales con Ciclos//
/*1. Promedio de calificaciones mayores a 70
Descripción: Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
Entrada / Proceso:
•	Ingresar la cantidad de calificaciones n.
•	Leer n notas dentro de un ciclo for.
•	Acumular y contar solo las notas ≥ 70.
•	Calcular el promedio correspondiente.
Salida esperada:
Ingrese número de calificaciones: 5  
Notas: 65, 80, 90, 50, 75  
Promedio de notas ≥ 70: 81.67*/
function promedio(){
    let cancali=prompt("Ingresar la cantidad de calificaciones");
    let suma=0, acunot=0
    let arrenotas=[]
    for(i=0; i<cancali; i++){
        let nnotas=parseInt(prompt("Ingrese notas"));
        arrenotas.push(nnotas);
        if(nnotas>=70){
            suma=suma+nnotas;
            acunot=acunot+1
        }
    }
    let pro=0;
        if(acunot>0){
            pro=suma/acunot;
        }
    console.log(`Ingrese número de calificaciones: ${cancali}`);
    console.log(`Notas: ${arrenotas.join(", ")}`);
    console.log(`Promedio de notas ≥ 70: ${pro}`);
}debugger;
promedio()

/*2. Contar cuántos números negativos se ingresan
Descripción: Ingresar n números y contar cuántos son negativos.
Entrada / Proceso:
•	Leer n.
•	Usar un ciclo for o while para pedir los números.
•	Contar los valores menores a 0.
Salida esperada:
Ingrese cuántos números desea ingresar: 6  
Valores: 3, -5, 0, 7, -1, -8  
Cantidad de negativos: 3*/
function numerosNegativos(){
    let cannumero=prompt("Ingrese cuantos números desea ingresar");
    let arrenum=[], c=0;
    for(i=0; i<cannumero; i++){
        let num=parseFloat(prompt("Digite un valor"));
        arrenum.push(num);
        if(num<0){
            c++
        }
    }
    console.log(`Ingrese cuántos números desea ingresar: ${cannumero}`);
    console.log(`Valores: ${arrenum.join(", ")}`);
    console.log(`Cantidad de negativos: ${c}`);
}debugger;
numerosNegativos()

/*3. Promedio de edades: mayores vs menores de edad
Descripción: Dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
Entrada / Proceso:
•	Ingresar el número de personas n.
•	Leer las edades una por una con un ciclo.
•	Mantener contadores y acumuladores separados para mayores y menores.
•	Calcular los promedios respectivos.
Salida esperada:
Ingrese número de personas: 5  
Edades: 17, 20, 35, 15, 18  
Promedio de mayores de edad: 24.33  
Promedio de menores de edad: 16.00*/
function mayorMenorEdad(){
    let nper=prompt("Ingresar el número de personas");
    let arreedad=[], sumema=0, cmayor=0, sumeme=0, cmenor=0;
    for(i=0; i<nper; i++){
        let edades=parseInt(prompt("Digite la edad"));
        arreedad.push(edades);
        if(edades>=18){
            sumema+=edades;
            cmayor++
        }else{
            sumeme+=edades;
            cmenor++
        }
    }
    let promayor=0, promenor=0;
    if(cmayor>0){
        promayor=sumema/cmayor;
    }if(cmenor>0){
        promenor=sumeme/cmenor;
    }
    console.log(`Ingrese número de personas: ${nper}`);
    console.log(`Edades: ${arreedad}`);
    console.log(`Promedio de mayores de edad: ${promayor}`);
    console.log(`Promedio de menores de edad: ${promenor}`);
}debugger;
mayorMenorEdad()

/*4. Mostrar la tabla de multiplicar de un número
Descripción: Dado un solo número, mostrar su tabla de multiplicar del 1 al 10.
Entrada / Proceso:
•	Ingresar el número.
•	Usar un ciclo for desde 1 hasta 10.
•	Mostrar el producto en cada iteración.
Salida esperada:
Ingrese un número: 4  
Tabla del 4:
4 × 1 = 4  
4 × 2 = 8  
4 × 3 = 12*/
function tablaMultiplicar(){
    let ntabla=parseInt(prompt("Digite el número de la tabla"));
    console.log(`Ingrese un número: ${ntabla}`);
    console.log(`Tabla del ${ntabla}`);
    for(i=1; i<=10; i++){
        let producto=ntabla*i;
        console.log(`${ntabla} x ${i} = ${producto}`)
    }
}debugger;
tablaMultiplicar()

/*5. Promedio de números pares e impares
Descripción: Ingresar n números y calcular el promedio de los números pares y de los números impares por separado.
Entrada / Proceso:
•	Ingresar n.
•	Leer cada número dentro de un ciclo for.
•	Acumular por separado los pares (n % 2 == 0) y los impares (n % 2 != 0).
•	Calcular los promedios respectivos.
Salida esperada:
Ingrese cantidad de números: 6  
Valores: 2, 5, 8, 9, 4, 7  
Promedio de pares: 4.67  
Promedio de impares: 7.00*/
function paresImpares(){
    let nnum=prompt("Digite cantidad de números");
    let arrenum=[], sumpar=0, acupar=0, sumimp=0, acuimp=0;
    for(i=0; i<nnum; i++){
        let numeros=parseInt(prompt("Digite un número"));
        arrenum.push(numeros);
        if(numeros % 2 == 0){
            sumpar+=numeros;
            acupar++
        }if(numeros % 2 != 0){
            sumimp+=numeros,
            acuimp++
        }
    }
    let propar=0, proimp=0;
    if(acupar>0){
        propar=sumpar/acupar;
    }if(acuimp>0){
        proimp=sumimp/acuimp;
    }
    console.log(`Ingrese cantidad de números: ${nnum}`);
    console.log(`Valores: ${arrenum}`);
    console.log(`Promedio de pares: ${propar}`);
    console.log(`Promedio de impares: ${proimp}`);
}debugger;
paresImpares()

//Bloque 4: Versión con Arreglos (versión con arreglos del bloque 3)//
/*1. Descripción: Dada una lista de calificaciones, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
Entrada: calificaciones = [65, 80, 90, 50, 75]
Proceso:
•	Recorrer la lista con un ciclo for.
•	Sumar y contar solo las calificaciones ≥ 70.
•	Calcular el promedio correspondiente.
Salida esperada: Promedio de calificaciones ≥ 70: 81.67*/
function promedio2(){
    let arre=[65, 80, 90, 50, 75];
    let suma=0, acunot=0;
    for(i=0; i<arre.length; i++){
        let nactual=arre[i];
        if(nactual>=70){
            suma=suma+nactual;
            acunot=acunot+1
        }
    }
    let pro=0;
        if(acunot>0){
            pro=suma/acunot;
        }
    console.log(`Promedio de calificaciones ≥ 70: ${pro} `)
}debugger;
promedio2()

/*2. Descripción: Dada una lista de números, contar cuántos son negativos.
Entrada: numeros = [3, -5, 0, 7, -1, -8]
Proceso:
•	Usar un ciclo for para recorrer la lista.
•	Contar los valores menores a 0.
Salida esperada: Cantidad de números negativos: 3*/
function numerosNegativos2(){
    let arre=[3, -5, 0, 7, -1, -8];
    let c=0;
    for(i=0; i<arre.length; i++){
        let nactual=arre[i];
        if(nactual<0){
            c++
        }
    }
    console.log(`Cantidad de números negativos: ${c}`);
}debugger;
numerosNegativos2()

/*3. Descripción: Dada una lista con edades de personas, obtener el promedio de los mayores de edad (≥ 18) y de los menores de edad (< 18).
Entrada: edades = [17, 20, 35, 15, 18]
Proceso:
•	Recorrer la lista con un ciclo for.
•	Separar acumuladores y contadores para mayores y menores.
•	Calcular los promedios correspondientes.
Salida esperada:
Promedio de mayores de edad: 24.33  
Promedio de menores de edad: 16.00*/
function mayorMenorEdad2(){
    let arre=[17, 20, 35, 15, 18];
    let sumema=0, cmayor=0, sumeme=0, cmenor=0;
    for(i=0; i<arre.length; i++){
        let nactual=arre[i];
        if(nactual>=18){
            sumema+=nactual;
            cmayor++
        }else{
            sumeme+=nactual;
            cmenor++
        }
    }
    let promayor=0, promenor=0;
    if(cmayor>0){
        promayor=sumema/cmayor;
    }if(cmenor>0){
        promenor=sumeme/cmenor;
    }
    console.log(`Promedio de mayores de edad: ${promayor}`);
    console.log(`Promedio de menores de edad: ${promenor}`);
}debugger;
mayorMenorEdad2()

/*4. Descripción: Dada una lista de números, mostrar la tabla de multiplicar del 1 al 10 para cada uno.
Entrada: numeros = [3, 5]
Proceso:
•	Ciclo externo: recorrer cada número.
•	Ciclo interno: multiplicar del 1 al 10.
Salida esperada:
Tabla del 3:
3, 6, 9, 12, 15, 18, 21, 24, 27, 30
Tabla del 5:
5, 10, 15, 20, 25, 30, 35, 40, 45, 50*/
function tablaMultiplicar2(){
    let arre=[3, 5];
    for(i=0; i<arre.length; i++){
        let nactual=arre[i];
        console.log(`Tabla del ${nactual}`);
        for(c=1; c<=10; c++){
            let producto=nactual*c;
            console.log(`${nactual} x ${c} = ${producto}`)
        }
    }
}debugger;
tablaMultiplicar2()

/*5. Descripción: Dada una lista de números, calcular el promedio de los pares y de los impares.
Entrada: numeros = [2, 5, 8, 9, 4, 7]
Proceso:
•	Recorrer el arreglo con un ciclo for.
•	Sumar y contar pares e impares por separado.
•	Calcular los promedios respectivos.
Salida esperada: 
Promedio de pares: 4.67  
Promedio de impares: 7.00*/
function paresImpares2(){
    let arre=[2, 5, 8, 9, 4, 7];
    let sumpar=0, acupar=0, sumimp=0, acuimp=0;
    for(i=0; i<arre.length; i++){
        let nactual=arre[i];
        if(nactual % 2 == 0){
            sumpar+=nactual;
            acupar++
        }if(nactual % 2 != 0){
            sumimp+=nactual,
            acuimp++
        }
    }
    let propar=0, proimp=0;
    if(acupar>0){
        propar=sumpar/acupar;
    }if(acuimp>0){
        proimp=sumimp/acuimp;
    }
    console.log(`Promedio de pares: ${propar}`);
    console.log(`Promedio de impares: ${proimp}`);
}debugger;
paresImpares2()