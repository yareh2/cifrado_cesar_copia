function myFunction(){

let cifrar=document.getElementById("example").value;
let offset=document.getElementById("offset").value;
let scii2="";
let posicionscii =0;


for(let i=0;i<cifrar.length;i++){
  let posicionscii=cifrar.charCodeAt(i);
  if (65<=posicionscii && posicionscii<=90){

  let posicion2=((posicionscii-65+parseInt(offset))% 26 + 65);
  console.log(posicion2);
  let posicionscii2=String.fromCharCode(posicion2);

scii2+=posicionscii2;
  }
  else if (posicionscii>=97&& posicionscii<=122){
    let posicion2=((posicionscii-97+parseInt(offset))% 26 + 97);
    let posicionscii2=String.fromCharCode(posicion2);
    console.log(posicionscii2);
  scii2+=posicionscii2;
}
else if(posicionscii==32){
  scii2+=String.fromCharCode(posicionscii);
   }

 }

 return document.getElementById('cifrar').value = scii2;
}

// codigo para Decifrar
function encode(){

let decifrar=document.getElementById("example").value;
let offset=document.getElementById("offset").value;
let decifrarMensaje="";
let posicionscii =0;


for(let i=0;i<decifrar.length;i++){
  let posicionscii=decifrar.charCodeAt(i);
  if (65<=posicionscii && posicionscii<=90){

  let posicion2=((posicionscii-65-parseInt(offset))% 26 + 65);
  console.log(posicion2);
  let posicionscii2=String.fromCharCode(posicion2);

decifrarMensaje+=posicionscii2;
  }
  else if (posicionscii>=97&& posicionscii<=122){
    let posicion2=((posicionscii-122-parseInt(offset))% 26 + 122);
    let posicionscii2=String.fromCharCode(posicion2);
    console.log(posicionscii2);
  decifrarMensaje+=posicionscii2;
}
else if(posicionscii==32){
  decifrarMensaje+=String.fromCharCode(posicionscii);
  console.log(decifrarMensaje);
   }

 }

 return document.getElementById('example').value =decifrarMensaje;
}
//document.getElemen
