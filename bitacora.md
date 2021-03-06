# Bitacora de cambios de la página

## Pendientes
- [ ] Agregar datos estructurados a los productos
## 15 de julio de 2021

Se comenzaron a migrar contenidos del blog a Odoo, no he encontrado una forma eficaz de agregar los markdown en Odoo ya que siempre se insertan con formatos diferentes al default del tema. Se estan agregando redireccionamientos a cada página modificada y se hará una tabla de redireccionamientos ya que los blogs de odoo tienen una forma ideosicratica de nombrar las URL

## 1 de julio de 2021

Se elimino el chat de drift del sitio, el cual estaba asociado a Google Tag Manager, y no lo recordaba, por lo que estuve buscando bastante tiempo el código de inserción del chat, que no existía ya que todo se incertaba desde GTM. Ademas de eso se eliminaron los archivos de scripts de Drift que ya no se usaban, de paginas de suscripción de mailchimp, botones de google+ y se recentraron los iconos en los botones. Al final se agrego el chat de Odoo en la página mediante el script en el head, ya que en GTM parece no funcionar en tiempo real.

## 29 de junio de 2021
Comenzamos a redireccionar las solicitudes de cotización con `window.location.replace` a la pagina de `https://technodomus.odoo.com/cotiza`

## 23 de junio de 2021
Se creo un redireccionamiento vía `window.location.replace` de la pagina de dry view al sitio de odoo/promociones

## 16 de junio de 2021
Para el registro al próximo webinar se implemento la página de webinars, pero ante el cambio de plataforma a Odoo se decidió redireccionar a la página de Odoo directamente con la función de javascript `window.location.replace("https://technodomus.odoo.com/webinars")`

## 8 de junio de 2021

Se comenzó a diseñar una landing page para las ofertas de dryview y se vio la necesidad de mejorar el desempeño de las imágenes. Para ello se usaron utilidades de optimización de imagen en un script.

Se hizo un respaldo de las imagenes originales en `/data/Desarrollo/optimizacion_imagenes/originales` y en esa carpeta estan los scripts de optimización.
```bash
#!/bin/bash

input_dir="$1"
quality="$2"
output_dir="$3"

if [[ -z "$input_dir" ]]; then
        echo "Especifica un directorio de entrada"
        exit 1
elif [[ -z "$quality" ]]; then 
        echo "Especifica una calidad para los JPEG"
        exit 1
elif [[ -z "$output_dir" ]]; then
        echo "Especifica un directorio de salida"
        exit 1
fi

# Convirte los webp a png ya que el generador no los reconoce
for img in $( find $input_dir -type f -iname "*.webp" );
do
        dwebp $img -o ${img%.*}.png
done

# Optimiza todos los png
for img in $( find $input_dir -type f -iname "*.png" );
do
        optipng $img -out $output_dir/${img#$input_dir/}
done

# Optimiza todos los jpeg
for img in $( find $input_dir -type f -iname "*.jpeg" -o -iname "*.jpg" );
do
        cp $img $output_dir/${img#$input_dir/}
        jpegoptim -m $quality $output_dir/${img#$input_dir/}
done

# Optimiza los svg
for img in $( find $input_dir -type f -iname "*.svg" );
do
        svgo $img -o $output_dir/${img#$input_dir/}
done

```
También para ello se tuvo que instalar varias aplicaciones segun [estas indicaciones](https://css-tricks.com/converting-and-optimizing-images-from-the-command-line/)

```bash
sudo apt install webp jpegoptim optipng
npm install -g svgexport svgo
```

## 7 de junio de 2021

El formulario de registro de prospectos tenia errores en el atributo `for` que no correspondian con el `input` y también estaban mal asignados los valores de `name` e `id` por lo que no llegaban los valores a SalesForce, por eso perdimos dos prospectos. **IMPORTANTE** Hay que hacer más testing antes de subir una funcionalidad.

Se eliminó la página de los respiradores ya que ese producto ya no se seguira promocionando.

## 26 de mayo de 2021

Se modificó el formulario de solicitud de cotizaciones para que ahora los datos lleguen directamente al CRM con las instrucciones del panel de configuración de SalesForce `Configuración>Herramientas de la plataforma>Configuración de funciones>Marketing>Prospectos Web` que genera el HTML para un formulario de registro. Era algo que no estaba buscando.

```html
<!--  ----------------------------------------------------------------------  -->
<!--  NOTA: Agregue el siguiente elemento <META> a su página <HEAD>.  Si es   -->
<!--  preciso, modifique el parámetro charset para especificar el conjunto    -->
<!--  de caracteres de su página HTML.                                        -->
<!--  ----------------------------------------------------------------------  -->

<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">

<!--  ----------------------------------------------------------------------  -->
<!--  NOTA: Agregue el siguiente elemento <FORM> a su página.                 -->
<!--  ----------------------------------------------------------------------  -->

<form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

<input type=hidden name="oid" value="00D4P0000010eaY">
<!-- Esta es la página de destino después de llenar el formulario -->
<input type=hidden name="retURL" value="http://technodomus.com/hola">

<!--  ----------------------------------------------------------------------  -->
<!--  NOTA: Estos campos son elementos de depuración opcionales. Elimine      -->
<!--  los comentarios de estas líneas si desea realizar una prueba en el      -->
<!--  modo de depuración.                                                     -->
<!--  <input type="hidden" name="debug" value=1>                              -->
<!--  <input type="hidden" name="debugEmail"                                  -->
<!--  value="bjimenez@technodomus.com">                                       -->
<!--  ----------------------------------------------------------------------  -->

<label for="first_name">Nombre</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br>

<label for="last_name">Apellidos</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br>

<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br>

<label for="company">Compañía</label><input  id="company" maxlength="40" name="company" size="20" type="text" /><br>

<label for="city">Ciudad</label><input  id="city" maxlength="40" name="city" size="20" type="text" /><br>

<label for="state">Estado/Provincia</label><input  id="state" maxlength="20" name="state" size="20" type="text" /><br>

<input type="submit" name="submit">

</form>

```


## 24 de mayo de 2021

Se incluiran dentro de los layouts elementos de datos estructurados para mejorar el posicionamiento. Entre los datos estan los *breadcrumbs* el esquema para articulos en los dos layouts (productos y productos2).
Se siguieron las recomendaciones de Moz en este [ artículo ](https://moz.com/learn/seo/schema-structured-data).

Para la inclusión de las etiquetas de datos estructurados se siguieron las [ recomendaciones de Google ](https://developers.google.com/search/docs/data-types/article?hl=es)

El esquema para agregar datos estructurados sugerido es:
```html
<html>
  <head>
    <title>Article headline</title>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "Article headline",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "datePublished": "2015-02-05T08:00:00+08:00",
      "dateModified": "2015-02-05T09:20:00+08:00"
    }
    </script>
  </head>
  <body>
  </body>
</html>
```
Para probar los datos estructurados se puede usar la herramienta de verificación de google [aquí](https://search.google.com/test/rich-results?id=6R4Ok3DeK9qATRbx1Pk_Ig)

Al día de hoy solo se estructuraron los datos para los artículos de blog. Ahora hay que incluir entre las variables:
+ Titulo
+ Imagen (Que se mostrara en los resultados de busqueda)
+ Fechas

Para ello se agrego a la plantilla base el bloque `block structured-data`, donde se puede hacer un adicción por página al `<head>` de cada página.