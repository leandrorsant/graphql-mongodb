const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()
console.log(process.env.URL)

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.URL, {useNewUrlParser: true})
    .then(() =>{
        console.log("Connected to database")
        return server.listen({port:5000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })