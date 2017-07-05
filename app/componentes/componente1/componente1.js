
// Definimos un objeto con un controlador
var componente = {
  // controlador
  controller : compCtrl,
  // template html
  templateUrl: "app/componentes/componente1/componente1.html"
}

// Declaramos el modulo al que pertenece nuestro componente
angular
  // Modulo
  .module("miPrimerApp")
  // Declaracion del componente con comillas el nombre como será llamado en html, sin comillas mandamos a llamar el objeto que definimos al principio
  .component("componente", componente)
// Declaracion de la funcion del controlador de nuestro componente
function compCtrl(){

}