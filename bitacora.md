# Bitacora de cambios de la página

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