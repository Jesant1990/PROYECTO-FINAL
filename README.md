FUNCIONAMIENTO DEL PROGRAMA

Para entender el funcionamiento del programa y realizar las mejoras solicitadas, es necesario analizar sus partes principales, asumiré que el programa original realiza una cotización de seguro y a partir de la solicitud se generarán recargos adicionales según la cantidad de propiedades y los ingresos del asegurado.

Partes del problema a considerar en el programa original:
-	Solicitud de información: El programa debe solicitar al usuario la información necesaria para calcular la cotización del seguro, la cantidad de propiedades y los ingresos del asegurado.
-	Cálculo de cotización inicial: Se realiza un cálculo inicial de la cotización del seguro basándose en la información proporcionada por el usuario.
-	Recargos adicionales: Según la nueva especificación, se deben agregar dos recargos adicionales, uno del 35% por cada propiedad y otro del 5% sobre el salario del asegurado.
-	Cotización final: Se suma la cotización inicial con los recargos adicionales para obtener el costo total del seguro.
-	Repetición hasta que el usuario ingrese "Salir": El programa debe permitir al usuario solicitar cotizaciones múltiples hasta que decida salir del programa.
Consideraciones para mejorar el programa:
-	Bucle para solicitar cotizaciones múltiples: Modificar el programa para incluir un bucle que permita al usuario ingresar información para obtener cotizaciones múltiples hasta que decida salir, utilizar un bucle do while y solicitar al usuario que ingrese "Salir" para 
  finalizar.
-	Implementar recargos adicionales: Agregar la lógica necesaria para calcular los recargos adicionales del 35% por propiedad y del 5% sobre el salario del asegurado, estos recargos deben aplicarse a la cotización inicial.
-	Mostrar la cotización total: Asegurarse de que el programa muestre la cotización total incluyendo los recargos adicionales al usuario después de cada solicitud de cotización.
-	Manejo de errores: Incluir manejo de errores para casos en los que el usuario ingrese información incorrecta o inesperada, esto garantizará la estabilidad y la usabilidad del programa.
