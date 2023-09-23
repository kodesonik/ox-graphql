const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type Post {
        id: ID
        carrieres_taux : Float,
        carrieres_partenariats : String,
        carrieres_programmes : String,
        carrieres_services : String,
        vie_associations : String,
        vie_evenements : String,
        vie_engagement : String,
        vie_actions : String,
        vie_activites : String,
        programmes_facultes : String,
        programmes_principaux : String,
        programmes_niveaux : String,
        programmes_possibilites : String,
        conditions_exigences : String,
        conditions_processus : String,
        conditions_dates : String,
        cout_options : String,
        cout_possibilites : String,
        cout_informations : String,
        campus_descriptions : String,
        campus_informations : String,
        campus_bibliotheque : String,
        campus_services : String,
        reputations_classement : String,
        reputations_reconnaissance : String,
        reputations_prix : Float
    }

    type Query {
        hello: String
        getAllCampus : [Post]
        getCampus(id : ID): Post
    }

    input PostInput {
        carrieres_taux : Float,
        carrieres_partenariats : String,
        carrieres_programmes : String,
        carrieres_services : String,
        vie_associations : String,
        vie_evenements : String,
        vie_engagement : String,
        vie_actions : String,
        vie_activites : String,
        programmes_facultes : String,
        programmes_principaux : String,
        programmes_niveaux : String,
        programmes_possibilites : String,
        conditions_exigences : String,
        conditions_processus : String,
        conditions_dates : String,
        cout_options : String,
        cout_possibilites : String,
        cout_informations : String,
        campus_descriptions : String,
        campus_informations : String,
        campus_bibliotheque : String,
        campus_services : String,
        reputations_classement : String,
        reputations_reconnaissance : String,
        reputations_prix : Float
    }

    type Mutation {
        createCampus( post: PostInput ): Post
        deleteCampus(id: ID) : String
        updateCampus(id: ID, post: PostInput ): Post
    }
`
 
module.exports = typeDefs;