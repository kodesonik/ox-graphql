
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('./db/mongoose')






async function startServer(){
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs : typeDefs,
        resolvers : resolvers 
    })

    await apolloServer.start();

    apolloServer.applyMiddleware( { app : app } );

    app.use( (req, res) => {
        res.send("Campus API project is running")
    })


    mongoose.initDb()

    app.listen(5000, () => {
        console.log(" Server is running on port 5000")
    })
}

startServer();