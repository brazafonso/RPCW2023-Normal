var Contrato = require('../models/contratos')
// Contract list
module.exports.list = () => {
    return Contrato.contratoModel
    .find()
    .then(docs => {
        return docs
    })
    .catch( error => {
        return error
    })
}


module.exports.list_all_inst = (inst) => {
    return Contrato.contratoModel
    .find({NIPCInstituicao:inst})
    .then(docs => {
        return docs
    })
    .catch( error => {
        return error
    })
}

module.exports.list_all_year = (year) => {
    return Contrato.contratoModel
    .find({DataInicioContrato:{$regex:/.+2020/}})
    .then(docs => {
        return docs
    })
    .catch( error => {
        return error
    })
}

module.exports.get_contract = (id) => {
    return Contrato.contratoModel
    .find({_id:id})
    .then(docs => {
        return docs
    })
    .catch( error => {
        return error
    })
}


module.exports.get_distinct_institutions = () => {
    return Contrato.contratoModel
    .distinct("NomeInstituicao")
    .then(docs => {
        return docs
    })
    .catch( error => {
        return error
    })
}


module.exports.get_distinct_courses = () => {
    return Contrato.contratoModel
    .distinct("Curso")
    .then(docs => {
        return docs
    })
    .catch( error => {
        return error
    })
}




module.exports.put_contract = (contract) => {
    return Contrato.contratoModel
    .create(contract)
    .then(docs => {
        return docs
    })
    .catch( error => {
        return error
    })
}

module.exports.delete_contract = (id) => {
    return Contrato.contratoModel
    .deleteOne({_id:id})
    .then(docs => {
        return docs
    })
    .catch( error => {
        return error
    })
}

