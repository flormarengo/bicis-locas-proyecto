// //function validateForm(){
// 	/* Escribe tú código aquí */
// window.onload=function(){
//
// var formulario = document.getElementById("formulario");
// var botón = document.getElementById("botón");
//
// //expresiones para cada input
// var números = /[0-9]/;
// var minúsculas =  /^[a-z]/;
// var arroba = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// validarNombre = function(){
//   if(formulario.name.value == 0){
//   alert("ingrese su nombre");
//   }
//   else if(números.test(formulario.name.value)){
//   alert("no ingrese números")}else{
//   }
// };
//
// validarApellido = function(){
//   if(formulario.lastname.value == 0){
//     alert("ingrese su apellido");
//   }
//     else if(minúsculas.test(formulario.lastname.value.charAt(0))){
//       alert("ingrese la primera letra en mayúscula");
//     }else{
//     }
// };
//
// validarCorreo = function(){
//   if(formulario.correo.value == 0){
//     alert("Ingrese su email");
//   }else if(arroba.test(formulario.correo.value)){
//   }else{
//     alert("escribe un correo válido");
//   }
// };
//
// validarContraseña = function(){
//
//   if(formulario.contraseña.value == 0  || formulario.contraseña.value == 123456 || formulario.contraseña.value == 098754){
//     alert("ingrese su contraseña");
//   }
//   else if(formulario.contraseña.value.length < 7){
//   }else{
// alert("ingrese una contraseña de 6 digitos como máximo");
//   }
// };
//
//
// var validar = function(){
// validarNombre();
// validarApellido();
// validarCorreo();
// validarContraseña();
// };
//
// document.getElementById("formulario").addEventListener("submit", function)
// }
//function validateForm(){
	/* Escribe tú código aquí */

var formulario = document.getElementById("formulario");
var botón = document.getElementById("botón");

//expresiones para cada input
var números = /[0-9]/;
var minúsculas =  /^[a-z]/;
var arroba = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
validarNombre = function(){
  if(formulario.name.value == 0){
  alert("ingrese su nombre");
  }
  else if(números.test(formulario.name.value)){
  alert("no ingrese números")}else{
  }
};

validarApellido = function(){
  if(formulario.lastname.value == 0){
    alert("ingrese su apellido");
  }
    else if(minúsculas.test(formulario.lastname.value.charAt(0))){
      alert("ingrese la primera letra en mayúscula");
    }else{
    }
};

validarCorreo = function(){
  if(formulario.correo.value == 0){
    alert("Ingrese su email");
  }else if(arroba.test(formulario.correo.value)){
  }else{
    alert("escribe un correo válido");
  }
};

validarContraseña = function(){

  if(formulario.contraseña.value == 0  || formulario.contraseña.value == 123456 || formulario.contraseña.value == 098754){
    alert("ingrese su contraseña");
  }
  else if(formulario.contraseña.value.length < 7){
  }else{
alert("ingrese una contraseña de 6 digitos como máximo");
  }
};


var validar = function(){
validarNombre();
validarApellido();
validarCorreo();
validarContraseña();
};

formulario.addEventListener("submit", validar);
