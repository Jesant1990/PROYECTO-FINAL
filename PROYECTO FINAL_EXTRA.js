do{
    var precio_base = 2000
    
    var edad_18 = 0.1
    var edad_25 = 0.2
    var edad_50 = 0.3
    
    var casado_18 = 0.1
    var casado_25 = 0.2
    var casado_50 = 0.3
    
    var hijos_recargo = 0.2
    
    var popiedades_recargo = 0.35
    var ingresos_recargo = 0.05
    
    var recargo = 0
    var recargo_total = 0
    
    var precio_final = 0
    
    var nombre = prompt("Ingrese su nombre, por favor")
    var edad = parseInt(prompt("¿Cuantos años tiene?"))
    
    var casado = prompt("¿Está casado actualmente?")
    var edad_conyuge 
    
    if("SI" == casado.toUpperCase()){
      edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a?"))
    }
    
    
    var hijos = prompt("¿Tiene hijos o hijas?")
    var cantidad_hijos
    
    if("SI" == hijos.toUpperCase()){
      cantidad_hijos = parseInt(prompt("¿Cuantos hijos o hijas tiene?"))
    
    }
    
    
    var propiedades = prompt("¿Tiene propiedades?")
    var cantidad_propiedades
    
    if("SI" == propiedades.toUpperCase()){
      cantidad_propiedades = parseInt(prompt("¿Cuantas propiedades tiene?"))
    
    }
    
    var ingresos = prompt("¿Tiene ingresos?")
    var cantidad_ingresos
    
    if("SI" == ingresos.toUpperCase()){
      cantidad_ingresos = parseInt(prompt("¿Cuales son sus ingresos?"))
    
    }
          
    if(edad >= 18 && edad < 25){
      recargo = precio_base * edad_18
      recargo_total = recargo_total + recargo
    
    }
    
    else if(edad >= 25 && edad < 50) {
      recargo = precio_base * edad_25
      recargo_total = recargo_total + recargo
      
    }
    
    else if(edad >= 50) {
      recargo = precio_base * edad_50
      recargo_total = recargo_total + recargo
      
    }
    
    if(edad_conyuge >= 18 && edad_conyuge < 25) {
      recargo = precio_base * casado_18
      recargo_total = recargo_total + recargo
      
    }
    
    else if(edad_conyuge >= 25 && edad_conyuge < 50) {
      recargo = precio_base * casado_25
      recargo_total = recargo_total + recargo
    
    }
    
    else if( edad_conyuge >= 50) {
      recargo = precio_base * casado_50
      recargo_total = recargo_total + recargo
    
    }
    
    if(cantidad_hijos) {
      recargo = (precio_base * hijos_recargo) * cantidad_hijos
      recargo_total = recargo_total + recargo
     
    }
    
    if(cantidad_propiedades){
      recargo = (precio_base * popiedades_recargo) * cantidad_propiedades
      recargo_total = recargo_total + recargo
    }
    
    
    if(cantidad_ingresos){
        recargo = cantidad_ingresos * ingresos_recargo
        recargo_total = recargo_total + recargo
      }
    
    precio_final = precio_base + recargo_total
    
    alert ("Para el asegurado: " + nombre)
    alert ("El recargo total sera de: " + recargo_total)
    alert ("El precio sera de: " + precio_final)
    var otracotizacion = prompt("¿Quiere realizar otra cotización?")
    } 
    
    while ("SI" == otracotizacion.toUpperCase())
    
