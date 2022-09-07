# Estructura del proyecto:

Este proyecto de frontend consiste en realizar peticiones al servicio Rest creado con spring boot , con el fin de listarme los eventos para cada plataforma seleccionada, dicha implementación del frontend se llevó a cabo con el framework de angular en la versión 12.
La estructura del proyecto está conformada por módulos y la organizacion de los componentes (plataformas, eventos) y el componente principal que es el app.comonet , cada componente esta compuesto con su respectivo archivo de typescript y el archivo de html , la clase entity y el archivo de servicios el cual tiene el llamado al servicio Rest.

## Diseño:

La decisión de diseño que se llevó a cabo en el proyecto se tomó teniendo en cuenta principalmente la mantenibilidad de la arquitectura , realizando el intercambio de datos entre componentes atreves del modelo de EventEmitter que observa cambios y valores y emite los datos a los componentes suscritos, evitando así inyectar referencias de componente y poder mantener así el bajo acoplamiento y la alta cohesión de nuestro código.


## Análisis:

Se realizó un análisis para este proyecto de frontend el cual consiste en crear dos componentes principales que son el componente de eventos y el componente de plataformas con su respectiva clase entity y la clase de servicio , para la clase de servicio de plataforma se diseñó una función para listar las diferentes plataformas y para la clase de servicio de eventos se tiene la función para listar todos los eventos acorde a la plataforma id que se envié.
