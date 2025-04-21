import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excusas").innerHTML = generarExcusa();
};
function generarExcusa() {
  let quien = ["Mi perro", "Un gato", "Mi primo", "Su abuela",];
  let accion = ["comió","encontró","rompió", "aplastó"];
  let que = ["la comida","el lápiz","su moto de juguete","un arbol","la tarea"];
  let donde = ["en mi casa","en el parque","en su finca","en una alcantarilla"];

  let Quien = quien[Math.floor(Math.random() * quien.length)];
  let Accion = accion[Math.floor(Math.random() * accion.length)];
  let Que = que[Math.floor(Math.random() * que.length)];
  let Donde = donde[Math.floor(Math.random() * donde.length)];

return `${Quien} ${Accion} ${Que} ${Donde}.`;}
console.log(excusas);