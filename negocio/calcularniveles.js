
exports.calcularNivel = function (articulo, libro, proyecto, acesor) {
    if (articulo > 10 && libro > 2 && proyecto > 2 && acesor > 4)
        return 3
    else if (articulo > 6 && libro > 1 && proyecto > 1 && acesor > 2)
        return 2
    else if (articulo > 3 && libro > 0 && proyecto > 1 && acesor > 0)
        return 1
    else
    return 0;
}
