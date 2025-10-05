function caliEstu(){
    let e=parseInt(prompt("Ingrese cantidad de estudiantes"));
    for(let i=0; i<e; i++){
        let n=parseInt(prompt("Cantidad de notas por estudiante"));
        let notas=[];
        let sum=0;
        for(let i=0; i<n; i++){
        let nota=parseInt(prompt("Ingrese nota:"));
        notas.push(nota);
        sum+=nota;
        }
        let prom=sum/n;
        if(prom<40){
            console.log(`"Reprueba con: ${prom}"`);
        }else if(prom>=40 && prom<=69){
            console.log(`"Recuperación con: ${prom}"`);
        }else{
            console.log(`"Aprueba con: ${prom}`);
        }
    }
}debugger;
caliEstu()

function suelSub(){
    let c=parseInt(prompt("Cantidad de sueldo"));
    for(let i=0; i<c; i++){
        let suel=parseInt(prompt("Ingrese suledo"));
        iess=suel*0.0945;
        if (suel<450){
        sub=50;
        }else if(suel>=700 && suel<=900){
        sub=20;
        }
        console.log(`"Aporte: ${iess}, Subsidio${sub}"`);
    }
}debugger;
suelSub()

function arePeriVari(){
    let c=parseInt(prompt("Ingrese cantidad de radios"));
    for(let i=0; i<c; i++){
        let radio=parseInt(prompt("Ingrese vaolor de radio"));
        const pi=3.14;
        if (radio>0){
            area=pi*(radio**2);
            peri=(2*pi)*radio;
            console.log(`"Área: ${area}, Perímetro: ${peri}"`);
        }else{
            console.log("Inválido");
        }
    }
}debugger;
arePeriVari()

function areaVariTrian(){
    let c=parseInt(prompt("Cantidad de Triángulos"));
    for(let i=0; i<c; i++){
        let base=parseInt(prompt("Ingrese base"));
        let altu=parseInt(prompt("Ingrese altura"));
        if (base>0 && altu>0){
        area=(base*altu)/2;
        console.log(`"El área es: ${area}"`);
        }else{
        console.log("Inválido");
        }
    }
}debugger;
areaVariTrian()

function ivaDscVarios(){
    let c=parseInt(prompt("Cantidad de precios"));
    for(let i=0; i<c; i++){
        let pre=parseInt(prompt("Ingrese precio"));
        let iva=pre*1.15;
        if(pre>50){
            dsc=pre-(pre*0.20);
            tot=dsc*1.15;
            console.log(`"Total ${tot}"`)
        }else{
            console.log(`"Total ${iva}"`) 
        }
    }
}debugger;
ivaDscVarios()

function dscPreAltos(){
    let c=parseInt(prompt("Cantidad de precios"));
    for(let i=0; i<c; i++){
        let pre=parseInt(prompt("Ingrese precio"));
        if(pre>=100){
            dsc=pre-(pre*0.10);
            console.log(`"Total: ${dsc}"`);
        }else{
            console.log(`"Total: ${pre}`)
        }
    }
}debugger;
dscPreAltos()

function ivadsclote(){
    let p=parseInt(prompt("Cantidad de precios"));
    for(let i=0; i<p; i++){
        let pre=parseInt(prompt("Ingrese precio"));
        let iva=pre*1.15;
        if(pre>10){
            dsc=pre-(pre*0.05);
            tot=dsc*1.15;
            console.log(`"Total ${tot}"`)
        }else{
            console.log(`"Total ${iva}"`)
        }
    }
}debugger;
ivadsclote()

function grupoProme(){
    let g=parseInt(prompt("Cantidad de grupos"));
    for(let i=0; i<g; i++){
        let n=parseInt(prompt("Cantidad de notas por grupo"));
        let notas=[];
        let sum=0;
        for(let i=0; i<n; i++){
        let nota=parseInt(prompt("Ingrese nota:"));
        notas.push(nota);
        sum+=nota;
    }
    let prom=sum/n;
        if(prom>10){
            console.log(`"Promedio=${prom}>10"`);
        }else{
            console.log(`"Promedio=${prom}<10"`)
        }
    }
}debugger;
grupoProme()

function mayorPares(){
     let a1=5, a2=7;
     let b1=9, b2=2; 
     let i=0;
     while(i<=1){
        let num1, num2;
        if(i===0){
            num1=a1;
            num2=a2;
        }else{
            num1=b1;
            num2=b2;
        }
        if(num1>num2){
            console.log(`"Mayor es: "${num1}`);
        }else if(num2>num1){
            console.log(`"Mayor es: "${num2}`);
        }
        i++;
    }
}debugger;
mayorPares()

function nNoms(){
    let nom1=prompt("Ingrese nombre");
    let nom2=prompt("Ingrese nombre");
    let nom3=prompt("Ingrese nombre");
    let i=0;
    while(i<=2){
        let nom;
        if(i===0){
            nom=nom1;
        }else if (i===1){
            nom=nom2;
        }else if(i===2){
            nom=nom3;
        }
        if(nom!==""){
            console.log(`"Bienvenido ${nom}"`)
        }
        i++;
    }
}debugger;
nNoms()

function nomVacio(){
    let noms=["Ana", "Luis", " "];
    if (noms[2]===" "){
        console.log("El último está vacío");
    }
}debugger;
nomVacio()

function sueldoMenor(){
    let suel=[500, 600, 400];
    if (suel[2]<450){
        console.log("El tercero es menor al básico");
    }
}debugger;
sueldoMenor()

function ntMayor(){
    let not=[5, 7, 8, 6];
    if (not[2]>=7){
        console.log("La segunda nota aprueba");
    }
}debugger;
ntMayor()

function dscPrecio(){
    let pre=[250, 150, 100];
    if (pre[0]>200){
        dsc=pre[0]-(pre[0]*0.20);
        console.log(`${dsc}, ${pre[1]}, ${pre[2]}`)
    }
}debugger;
dscPrecio()

function materiaCaracter(){
    let materi=["Física", "Mate", "Historia"];
    let pri=materi[0];
    if (pri.length>5){
        console.log(`"${pri} tiene mas de 5 caracteres"`)
    }
}debugger;
materiaCaracter()

function notasCalifi(){
    let n1=parseInt(prompt("Ingrese nota 1"));
    let n2=parseInt(prompt("Ingrese nota 2"));
    let n3=parseInt(prompt("Ingrese nota 3"));
    let n4=parseInt(prompt("Ingrese nota 4"));
    prom=(n1+n2+n3+n4)/4;
    if (prom<40){
        resu="Reprueba";
    }else if (prom>=40 && prom<=69){
        resu="Recuperación";
    }else{
        resu="Aprueba";
    }
    console.log(`"Promedio de: ${prom}, ${resu}"`);
}debugger;
notasCalifi()

function suelAporSub(){
    let suel=parseInt(prompt("Ingrese el sueldo: "));
    aiess=suel*0.0945;
    if (suel<450){
        sub=50;
    }else if (suel >= 450 & suel<700){
        sub=30;
    }else if(suel>=700 && suel<1000){
        sub=20;
    }else{
        sub=0;
    }
    console.log(`"Aporte IESS: ${aiess}, Subsidio: $${sub}"`);
}debugger;
suelAporSub()

function areaPeri(){
    let radio=parseInt(prompt("Ingrese el radio: "));
    const pi=3.14;
    if (radio>0){
        area=pi*(radio**2);
        peri=(2*pi)*radio;
        console.log(`"Área: ${area}, Perímetro: ${peri}"`);
    }else{
        console.log("No se puede calcular");
    }
}debugger;
areaPeri()

function areaTrian(){
    let base=parseInt(prompt("Ingrese la base: "));
    let altu=parseInt(prompt("Ingrese la altura: "));
    if (base>0 && altu>0){
        area=(base*altu)/2;
        console.log(`"El área es: ${area}"`);
    }else{
        console.log("No se puede calcular");
    }
}debugger;
areaTrian()

function ivaDsc(){
    let pre=parseInt(prompt("Ingrese precio: "));
    const iva=1.15;
    if (pre>50){
        dsc=pre-(pre*0.10);
        tot=dsc*iva;
        console.log(`"Precio total con Iva y descuento: ${tot}"`);
    }else{
        iva=pre*iva;
        console.log(`"Total con IVA: ${iva}"`);
    }
}debugger;
ivaDsc()

function desc10(){
    let pre=parseInt(prompt("Ingrese precio::"));
    if (pre>=100){
        dsc=pre-(pre*0.10);
        console.log(`"Descuento total de: ${dsc}"`);
    }else{
        console.log("No aplica descuento");
    }
}debugger;
desc10()

function iva(){
    let pre=parseInt(prompt("Ingrese precio: "));
    const iva15=1.15;
    if (pre>0){
        total=pre*iva15;
        console.log(`"Total con IVA del 15%: ${total}"`);
    }else{
        console.log("No aplica IVA")
    }
}debugger;
iva()

function promMayor10(){
    let nt1=parseInt(prompt("Ingrese nota: "));
    let nt2=parseInt(prompt("Ingrese nota: "));
    let nt3=parseInt(prompt("Ingrese nota: "));
    prom=(nt1+nt2+nt3)/3;
    if (prom>10){
        console.log("El promedio es mayor a 10");
    }else{
        console.log("El promedio es menor a 10");
    }
}debugger;
promMayor10()

function numMayor(){
    let num1=parseInt(prompt("Ingrese un numero"));
    let num2=parseInt(prompt("Ingrese otro numero"));
    if (num1>num2){
        console.log(`"Numero mayor es: ${num1}"`);
    }else{
        console.log(`"Numero mayor es: ${num2}"`);
    }
}debugger;
numMayor()

function bienvenida(){
    let nombre=""
    nombre=prompt("Ingrese su nombre");
    if (nombre!=""){
        console.log(`"Bienvenida ${nombre}"`);
    }else{
        console.log("No se ingreso nombre");
    }
}debugger;
bienvenida()

function concatenarNom(){
    const nombres=["Ana", "Luis", "Maria", "Pedro", "Lucia"]
    const resul=nombres.join(" ")
    console.log(resul)
}debugger;
concatenarNom()

function aportesDeSueldo(){
    sueldo=[500, 400, 600]
    iess=0.0945
    aiess=(sueldo[0]+sueldo[1]+sueldo[2])*iess
    console.log(`"El aporte total es de: ${aiess}"`)
}debugger;
aportesDeSueldo()

function promCalificacion(){
    notas=[8, 9, 7, 6]
    prom=(notas[0]+notas[1]+notas[2]+notas[3])/4
    console.log(`"El promedio es de: ${prom}"`)
}debugger;
promCalificacion()