const mongoose = require('mongoose')

const CampusShema = new mongoose.Schema({

    carrieres_taux: {
        type: Number,
         required: true
    },
    carrieres_partenariats: {
        type: String,
    },
    carrieres_programmes: {
        type: String
    },
    carrieres_services: {
        type: String
    },
    vie_associations: {
        type: String
    },
    vie_evenements: {
        type: String
    },
    vie_engagment: {
        type: String
    },
    vie_actions: {
        type: String
    },
    vie_activites: {
        type: String
    },
    programmes_facultes: {
        type: String
    },
    programmes_principaux: {
        type: String
    },
    programmes_niveaux: {
        type: String
    },
    programmes_possibilités: {
        type: String
    },
    conditions_exigences: {
        type: String
    },
    conditions_processus: {
        type: String
    },
    conditions_dates: {
        type: String
    },
    cout_options: {
        type: String
    },
    cout_possibilites: {
        type: String
    },
    cout_informations: {
        type: String
    },
    campus_descriptions: {
        type: String
    },
    campus_informations: {
        type: String
    },
    campus_bibliotheques: {
        type: String
    },
    campus_services: {
        type: String
    },
    reputations_classement: {
        type: String
    },
    reputations_reconnaissance: {
        type: String
    },
    reputaions_prix: {
        type: Number
    }

});

const Campus = mongoose.model('campus', CampusShema)

module.exports = Campus;

