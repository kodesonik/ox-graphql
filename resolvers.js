const Campus = require('./models/Campus.model')

const resolvers = {
    Query : {
        
        getAllCampus: async () => {

            return await Campus.find()
        },

        getCampus: async (_parent, {id}, _context, _info) => {

            return await Campus.findById(id)
        }
    },

    Mutation: {
        createCampus: async (parent, args, context, info) => {
            const { 
                carrieres_taux,
                carrieres_partenariats,
                carrieres_programmes,
                carrieres_services,
                vie_associations,
                vie_evenements,
                vie_engagement,
                vie_actions,
                vie_activites,
                programmes_facultes,
                programmes_principaux,
                programmes_niveaux,
                programmes_possibilites,
                conditions_exigences,
                conditions_processus,
                conditions_dates,
                cout_options,
                cout_possibilites,
                cout_informations,
                campus_descriptions,
                campus_informations,
                campus_bibliotheque,
                campus_services,
                reputations_classement,
                reputations_reconnaissance,
                reputations_prix

             } = args.post;

            const campus = new  Campus({ 
                carrieres_taux,
                carrieres_partenariats,
                carrieres_programmes,
                carrieres_services,
                vie_associations,
                vie_evenements,
                vie_engagement,
                vie_actions,
                vie_activites,
                programmes_facultes,
                programmes_principaux,
                programmes_niveaux,
                programmes_possibilites,
                conditions_exigences,
                conditions_processus,
                conditions_dates,
                cout_options,
                cout_possibilites,
                cout_informations,
                campus_descriptions,
                campus_informations,
                campus_bibliotheque,
                campus_services,
                reputations_classement,
                reputations_reconnaissance,
                reputations_prix 
            });
            await campus.save()

            return campus
        },

        deleteCampus: async (parent, args, context, info) => {
            const { id } = args
            await Campus.findByIdAndDelete(id)
            return "Ok, campus deleted"
        },

        updateCampus : async (parent, args, context, info) => {
            const { id } = args
            const { 
                carrieres_taux,
                carrieres_partenariats,
                carrieres_programmes,
                carrieres_services,
                vie_associations,
                vie_evenements,
                vie_engagement,
                vie_association,
                vie_activites,
                programmes_facultes,
                programmes_principaux,
                programmes_niveaux,
                programmes_possibilites,
                conditions_exigences,
                conditions_processus,
                conditions_dates,
                cout_options,
                cout_possibilites,
                cout_informations,
                campus_descriptions,
                campus_informations,
                campus_bibliotheque,
                campus_services,
                reputations_classement,
                reputations_reconnaissance,
                reputations_prix 
            } = args.post;

            const campus = await Campus.findByIdAndUpdate(id, 
            {
                carrieres_taux,
                carrieres_partenariats,
                carrieres_programmes,
                carrieres_services,
                vie_associations,
                vie_evenements,
                vie_engagement,
                vie_association,
                vie_activites,
                programmes_facultes,
                programmes_principaux,
                programmes_niveaux,
                programmes_possibilites,
                conditions_exigences,
                conditions_processus,
                conditions_dates,
                cout_options,
                cout_possibilites,
                cout_informations,
                campus_descriptions,
                campus_informations,
                campus_bibliotheque,
                campus_services,
                reputations_classement,
                reputations_reconnaissance,
                reputations_prix
            }
            , {new: true});

            return campus
        }

        
    }
};

module.exports = resolvers;