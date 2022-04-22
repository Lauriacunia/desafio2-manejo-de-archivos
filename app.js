/** Consejos
 *  👾 1- Separar el código en pequeñas funciones reutilizables.
 *  👾 2- Intentar usar funciones puras, es decir que modifiquen las variables dentro de
 *     su propio scope y no que sobreesriban otras variables globales (Pej: miren como viaja en file de 
 *      funcion en funcion en esta app).
 *  👾 3- Usar ciclos para no repetir código. Por ejemplo para salvar los productos.
 *  👾 4- Según las necesidades de mi app puedo crear el archivo file en su constructor,
 *     o puedo crearlo en el método onInit como un archivo independiente de la clase.
 *  👾 5- Leo mi código cuando lo termino y me pregunto ¿es legible? ¿cualquier programador leerlo facilemente? 
 *     ¿definí variables claras? ¿podría separar parte de mi cógigo en una función reutilizable?
 *     ¿El programa cumple con los requisitos de mi app? 
 *     ¿El programa corre solo o tengo que atajar problemas por todos lados?
 */

const Container = require('./contenedor')

const container = new Container();
const file = './products.txt';
const productsArray = [                                                                                                                                                     
    {                                                                                                                                                    
      title: 'Escuadra',                                                                                                                                 
      price: 123.45,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                                                                                                                                                                 
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Calculadora',                                                                                                                              
      price: 234.56,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                                                                                                                                                                       
    },                                                                                                                                                   
    {                                                                                                                                                    
      title: 'Globo Terráqueo',                                                                                                                          
      price: 345.67,                                                                                                                                     
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                                                                                                                                                                
    }                                                                                                                                                    
  ]

function onInit(){   
    console.log('Inicio de la app 📲');   
    const fileCreated = container.createFile(file);
    fileCreated ? saveAllProducts(): console.log('No se pudo guardar productos');
    fileCreated ? getAllProducts() : console.log('No se pudo leer productos');
    // Pongo null en el false porque no quiero hacer nada. Hay otras formas de hacerlo.
    const productFound = fileCreated ? findOneById(1) : null;
    productFound ? deleteProduct(1) : null;
    finishApp();
}

function saveAllProducts(){
      productsArray.map(product => {
      container.save(product, file);
  });
}

function getAllProducts(){
    const allProductsArray = container.read(file);
    console.log('Productos: ', allProductsArray);
}

function findOneById(id){   
    const product = container.getById(id, file);
    product ? console.log('Producto encontrado: ', product): console.log('Producto no encontrado');
    return product ?  true : false;
}

function deleteProduct(id){
    const productDeleted = container.deleteById(id, file);
    console.log('Producto eliminado ID: ', productDeleted);
}

function finishApp(){
    container.deleteAll(file);
    console.log('Fin de la app 💻💣❗');
}

onInit();