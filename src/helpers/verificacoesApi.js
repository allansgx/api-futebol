async function verificarModel (obj, type) {
    if (!obj) {
        throw new Error('Nenhum registro encontrado.')
    }

    if (!(obj instanceof type)) {
        throw new Error('Item não é uma instancia do tipo necessário.')
    }
}

module.exports = verificarModel;