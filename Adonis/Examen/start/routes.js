'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('producto','ProductoController.index') //Muestra todos los productos 
Route.get('producto/:id','ProductoController.show') //Muestra un producto find() -> id
Route.get('producto/crear','ProductoController.create')  //Crear producto save()
Route.post('producto/crear','ProductoController.store') //crea un producto save()
Route.get('producto/editar/:id','ProductoController.edit') //edita un producto save() ->id
Route.post('producto/editar/:id','ProductoController.update') //edita un producto save() ->id
Route.get('producto/eliminar/:id','ProductoController.destroy') //eliminar un producto delete() ->id

Route.get('marca','MarcaController.index') //Muestra todos las marcas
Route.get('marca/:id','MarcaController.show') //Muestra una marca find() -> id
Route.get('marca/crear','MarcaController.create')  //Crear marca save()
Route.post('marca/crear','MarcaController.store') //crea una marca save()
Route.get('marca/editar/:id','MarcaController.edit') //edita una marca save() ->id
Route.post('marca/editar/:id','MarcaController.update') //edita una marca save() ->id
Route.get('marca/eliminar/:id','MarcaController.destroy') //eliminar una marca delete() ->id

Route.get('proveedor','ProveedorController.index') //Muestra todos las marcas
Route.get('proveedor/:id','ProveedorController.show') //Muestra una marca find() -> id
Route.get('proveedor/crear','ProveedorController.create')  //Crear marca save()
Route.post('proveedor/crear','ProveedorController.store') //crea una marca save()
Route.get('proveedor/editar/:id','ProveedorController.edit') //edita una marca save() ->id
Route.post('proveedor/editar/:id','ProveedorController.update') //edita una marca save() ->id
Route.get('proveedor/eliminar/:id','ProveedorController.destroy') //eliminar una marca delete() ->id