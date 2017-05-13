/*
Ingresar un listado de nombres de alumnos por pantalla. Cada vez que se ingresa un nuevo usuario, preguntar si se quiere ingresar otro utilizando la función "Confirm". En caso de que el usuario no quiera ingresar otro alumno, mostrar los siguientes resultados por consola:

Indicar la cantidad de alumnos que se ingresaron

Preguntar si "Maradona" vino a la clase. Hacerlo con otra función que tome un array como parámetro y retorne true o false dependiendo si lo encontró

Mostrar el listado de alumnos por pantalla.

*/




    var ingresarAlumno = confirm("Bievenido. Desea ingresar un alumno?");
    var contador = 0;
    var alumnos = [];
    
    if (ingresarAlumno) {
        var alumno = prompt("Por favor ingrese el nombre de un alumnno");
    
        if (alumno != '') {
            contador = contador + 1;
            console.log(alumno);
    		alumnos.push(alumno);
        }
    
        while (confirm('ingresar otro?')) {
                var alumno = prompt("Por favor ingrese el nombre de un alumnno");
                if (alumno != '') { 
                    contador = contador + 1;
                    console.log(alumno);
    				alumnos.push(alumno);
                }
        }
    	
    	if(VinoMaradona(alumnos))
    		console.log("Vino Maradona");
    	else 
    		console.log("No vino Maradona");
    	
        console.log(contador);
    }
    
    function VinoMaradona(lista)
    {
    	for (var i = 0; i < lista.length; i++) {
    		if(lista[i] == "Maradona")
    		return true;
    	}
    	
    	return false;
    }
