const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    identifier: { type: String, required: true},
    tour: { type: String, required: true},
    num_quartier: { type: Number, required: true},
    num_arrondissement: { type: Number, required: true},
    num_bureau: { type: Number, required: true},
    nb_procu: { type: Number, required: true},
    nb_inscr: { type: Number, required: true},
    nb_emarg: { type: Number, required: true},
    nb_votant: { type: Number, required: true},
    nb_blanc: { type: Number, required: true},
    nb_nul: { type: Number, required: true},
    nb_exprim: { type: Number, required: true}
}, {
    collection: 'tour',
    minimize: false,
    versionKey: false,
}).set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
    }
})

module.exports = Schema