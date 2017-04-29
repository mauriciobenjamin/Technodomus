<<<<<<< HEAD
# Technodomus readme

Generated on 2016-06-27 using
[generator-yeogurt@1.5.2](https://github.com/larsonjj/generator-yeogurt)

## Description

This is an example readme file.
Describe your site/app here.

## Technologies used

JavaScript
- [Browserify](http://browserify.org/)
- [Node](https://nodejs.org/)

Testing
- [Karma](http://karma-runner.github.io/0.13/index.html)
- [Jasmine](http://jasmine.github.io/)

Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup
- [Jade](http://jade-lang.com/)

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Linting
- [ESlint](http://eslint.org/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


## Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.
The tasks are as follows:

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint and runs all `*.test.js` file unit tests through [Karma](http://karma-runner.github.io/0.13/index.html) and Jasmine
`gulp test --watch`: Same as `gulp test` but will constantly watch `*.test.js` files and rerun tests when changes are detected

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***
=======
# Archivos del nuevo website de Techonodomus

Los siguientes archivos sirven para el desarrollo del nuevo website responsivo que incluye también elementos para el desarrollo de una app movil.

Elementos principales:
- Productos
- Novedades
- Contacto

## Elementos de partida
La página web requiere una actualización que contemple lo siguiente:
- Actualizada y de facil actualización, especialmente con novedades
- Facil de mantener, especialmente los contenidos
- Optimizada para los motores de busqueda y para el uso de AdWords

Se integrara además en una estrategía dígital con el uso de campañas de **emaling B2B** y **AdWords**

### Contenidos actuales y contenidos planteados
+ Inicio
  + Descripción
  + Misión
  + Visión
  + Lineas de productos
    + Imagenología
    + Esterilización
    + Informática médica
  + Redes sociales (Twitter)
+ Portafolios
  + Descripción de productos
  > Hay demasiadas palabras clave en un sola página, prácticamente cada producto es una palabra clave.
+ Líneas de productos
  > Lo mismo que en la pagina de inicio, incluyendo enlaces a los provedores y datos técnicos   
+ Contacto
  + Formato de datos
  + Datos de la empresa
  > No hay aviso de privacidad y no se le pregunta al posible cliente datos sobre como quiere ser contactado

#### Planeado
+ Imagen
  + Digitalización
  + Rayos X
  + PAC's
  + Monitores grado médico
  + Análogico
+ Esterilización
  + Plasma
  + Trazabilidad
  + Vapor
  + Lavado
  + Validación

### Referentes
[Carestream](http://www.carestream.com)  

[Getinge Infection Control](http://www.getinge.com/es/)  

[Laoken Sterilization Supplier](http://en.laoken.com)  

[GKE Cleaning and Sterilization Monitoring](http://www.gke.eu/en/)  

### Competencia
#### [TAQ Sistemas Médicos](http://taq.com.mx)
+ Sitio no responsivo, cuenta con elementos de e-comerce y un blog. 
+ No tiene keywords.
+ Blog sin contenidos.
+ Redes sociales, facebook, twiter, google y youtube
+ Tienen junto imagenología con sistemas de nutrición y control corporal, educación y veterinaria
+ > ¿Convendría hacer un sitio separado?
 

#### [Medica Siller](http://www.medicasiller.com)
+ Sitio no responsivo
+ Navegación por categorias de productos que incluyen *Laboratorio Clinico*
+ Información básica de cada equipo con PDFs de información

 
#### [Imágenes del Potosí](http://www.imagenesdelpotosi.com)
+ Sitio responsivo
+ Navegación por categorias y busquedas internas
+ Información básica sin opción a encontrar más datos

 
#### [Reliable](http://reliable.com.mx)
+ Su página no aparece de incio en google, sino su página de facebook
+ Contenido desordenado

 
#### [Hova Live Technology](http://www.hovanetworks.com)
+ La página solo tienen información general y los links te envian a páginas que no cargan


## Consideraciones iniciales

### Arquitectura del sitio
1. Diagrama de contenidos
  2. Lista de contenidos
  3. 
2. Diagrama del sitio
3. Diagramas de la descripción de paginas
4. Diagramado

# Resumen del proyecto

## Objetivos del proyecto

* Actualizar la presencia en Internet de Techonodomus para facilitar el acercamiento de clientes a los productos y servicios que la compañía ofrece, traduciendo esto en ventas para la empresa.

* Generar un sitio interactivo en el que los usuarios encuentren información actual sobre esterilización e imagenografía médica, relacionada con los productos y servicios que Technodomus ofrece y que le permita identificar sus necesidades en dichas áreas.

* Orientar, registrar, canalizar y retroalimentar a posibles clientes, para que conozcan la oferta de la empresa, generen un contacto permanente con ella y accedan a sus los servicios especializados.

## Fecha de lanzamiento propuesta 

Finales del primer cuarto de 2016

# Perfil de la audiencia

Nuestra audiencia principal son los usuarios de tecnologías médicas en las áreas de esterilización e imagenología. Profesionales médicos con nivel de especialidad o subespecialidad, con experiencia moderada de Internet, entre los 30 y los 50 años.

## Audiencias secundarias

* Administradores médicos y hospitalarios.

* Estudiantes de ciencias médicas en nivel posgrado.

* Funcionarios del sector salud.

## Tareas que la audiencia desarrollara en el sitio:

* Descubrir los productos y servicios de Technodomus.

* Obtener información que le permita identificar necesidades y oportunidades en sus labores diarias que podrían ser resueltas con la ayuda de Technodomus.

* Solicitar información especifica (cotizaciones, demostraciones, especificaciones técnicas) de los equipos y servicios que ofrece Technodomus.

## Necesidades de la audiencia

* Obtener información puntual que le ayude a definir compras de equipo y/o servicios tecnológicos para uso medico.

* Conocer las ventajas y oportunidades que genera el uso de nuevas tecnologías en sus actividades.

* Obtener soporte técnico para el manejo de soluciones ya adquiridas.

# Percepción de la audiencia

## Actual

Sin estudios específicos de los visitantes a la página se puede inferir que la percepción actual es de un servicio desactualizado y sin información oportuna, que solo es un medio estático.

## Deseada

* Innovadores en tecnología y servicios 

* Interactuando con nuestros usuarios

* Con soluciones fuera del mercado usual

* Disponibles y accesibles

* Fácil de identificar y usar nuestros servicios

* Actualizados

* Como una referencia de información del área

## ¿Cómo ayudara el nuevo sitio a impulsar esta percepción?

El nuevo sitio tienen la misión de acercar al cliente potencial o al usuario de nuestros productos a la empresa. Para ello el sitio tienen que ser atractivo, desde el punto de vista visual, pero también por sus contenidos. Deberá ofrecer al visitante información accesible y útil para identificar las necesidades que Technodomus puede cubrir. La información se actualizara de manera periódica para que el usuario se vea motivado a visitar de nuevo la página. Ofrecerá la posibilidad de suscripción a las novedades del sitio así como formatos para solicitar información especifica. 

* Adjetivos que describen al nuevo sitio:

    * Innovador

    * Actual

    * Accesible

    * Informativo

# Mensaje

Tecnodomus es una empresa de tecnología para usos médicos innovadora, accesible y disponible para interactuar con los usuarios ayudando a estos a seleccionar y sacar mayor provecho de las innovaciones en las áreas de competencia de la empresa.

## ¿Cómo vamos a transmitir este mensaje?

* Generando un sitio interactivo que permita al usuario:

    * Conocer el **catalogo** de Tecnodomus con la información más relevante de sus productos y servicios

    * Obtener información adicional y especializada sobre la oferta de la empresa que permita distinguir sus ventajas y su aplicabilidad en el contexto de cada usuario a través de la difusión de **actualizaciones y noticias.**

    * Ayudar al usuario a la selección de soluciones por medio de **herramientas **interactivas y de una **comunicación** efectiva por parte de la empresa.

    * Integrando la comunicación de la empresa con el cliente mediante **canales de retroalimentación** en los que la página web ofrezca el portal de entrada.

# Ventaja competitiva

En que somos diferentes a nuestros competidores

* Combinación de tecnologías que cubre aspectos esenciales de la operación de cualquier instalación de salud.

* Tecnología de origen europeo y asiático que busca la competitividad e innovación

* Con conocimiento profundo del área de especialización

* Contacto directo con los fabricantes/proveedores

* Orientados a las soluciones tecnológicas adecuadas al contexto de nuestros usuarios
>>>>>>> 6b00ef9db8293fb19efa85674d7beed4f3977ca5
