


var imagenes = [
  "./img/reformas1.png",
  "./img/reformas2.png",
  "./img/reformas3.png"
];

document.Imagen.src = imagenes[0]

var SliderDerecha = document.querySelector(".slider.derecho");
var SliderIzquieda = document.querySelector(".slider.izquierdo");

var Contador = 0;

function MoverDerecha()
{
  Contador++;
  if(Contador > imagenes.length - 1)
    {
      Contador = 0;
    }
  document.Imagen.src = imagenes [Contador]
  
}
var Intervalo = setInterval(MoverDerecha,2500);
SliderDerecha.addEventListener("click", function()
{
  clearInterval(Intervalo);
  MoverDerecha();
  Intervalo = setInterval(MoverDerecha, 2500);
  
})


function MoverIzquierda()
{
  Contador--;
  if(Contador < 0)
    {
      Contador = imagenes.length -1;
    }
  document.Imagen.src = imagenes [Contador]

}

SliderIzquieda.addEventListener("click", MoverIzquierda);