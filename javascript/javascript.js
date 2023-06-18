function ventanaDespedida ()
{ 
    var ventana=open(' ',' ','status=yes , width=400, heigth=250');
    ventana.document.write("Gracias por visitar nuestro sitio.");
}


const edadDelUsuario = parseInt (prompt("¿Cuál es tu edad?"));

if (edadDelUsuario >= 18) {
    alert ("Eres mayor de edad, puedes ingresar al sitio");
}else{
    alert ("Eres menor de edad, ingresas al sitio bajo tu responsabilidad");
}
    

