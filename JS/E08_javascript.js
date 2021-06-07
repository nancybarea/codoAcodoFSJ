var varNombre 
var varNota1
var varNota2
var varNota3
var varPromedio

varNombre = prompt('Ingrese nombre del alumno');
varNota1 = Number(prompt('Ingrese la primer nota'));
varNota2 = Number(prompt('Ingrese la segunda nota'));
varNota3 = Number(prompt('Ingrese la tercer nota'));

varPromedio = (varNota1 + varNota2 + varNota3 ) / 3

if (isNaN(varPromedio)) 
    alert('No es posible calcular el promedio ya que una de las notas ingresadas no es numérica')
else
    alert ('El alumno '+ varNombre + ' tiene un promedio de : ' + varPromedio);