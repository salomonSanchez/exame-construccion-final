var consultas = require("../acceso a datos/consultas");
var niveles = require("../negocio/calcularniveles")

//consultar, traer y redirigir datos a la vista.
exports.consultaDatos = function (req, res) {
	var sql = 'select * from personas';
	consultas.traerDatos(sql, function (err, result) {
		res.render("index", { Data: result })
	});
}

//insercion de datos en la BD
exports.insertar = (req, res) => {
	//const data = req.body

	const data = {
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		grado: req.body.grado,
		articulos: req.body.articulos,
		libros: req.body.libros,
		proyectos: req.body.proyectos,
		acesor: req.body.acesor,
		nivel: niveles.calcularNivel(req.body.articulos, req.body.libros, req.body.proyectos, req.body.acesor)
	}

	/*  console.log(req.body.nombre)
	 console.log(req.body.apellido)
	 console.log(req.body.grado)
	 console.log(req.body.articulos)
	 console.log(req.body.libros)
	 console.log(req.body.proyectos)
	 console.log(req.body.acesor)
	 console.log("niveles") */

	console.log(data)
	var sql = 'INSERT INTO personas SET?'
	consultas.agregarData(sql, data)
	res.redirect("/")
}



//eliminacionde datos de la BD
exports.borrar = function (req, res) {
	var ID = req.params.id
	var sql = 'DELETE FROM personas WHERE id = ?'
	consultas.eliminar(sql, ID);
	res.redirect("/")
}

//modificacion de datos
exports.editar = function (req, res) {
	var ID = req.params.id
	console.log(ID)
	var sql = 'select * from personas where id = ?'
	consultas.editar(sql, ID, function (err, result) {
		res.render("resultadosEditar", { Data: result[0] })
	})
}

//actualizacion de datos
exports.actualiza = function (req, res) {
	const data = req.body;
	var ID = req.params.id;
	var sql = 'UPDATE personas set ? where id = ?'
	consultas.actualizar(sql, data, ID);
	res.redirect("/")

}
