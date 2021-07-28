const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const http = require("http");
const {
    fileLoader,
    mergeTypes,
    mergeResolvers,
} = require("merge-graphql-schemas");
require("dotenv").config();
const mongoose = require("mongoose");

const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.log(`DB CONNECTED`);
    } catch (error) {
        console.log(`ERROR OCCURED: ${error}`);
    }
};

//Connecting to the database
db();

//Express Server
const app = express();

//Types
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./typedefs")));

//Resolvers
const resolvers = mergeResolvers(
    fileLoader(path.join(__dirname, "./resolvers"))
);

//GraphQL Server
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

//applyMiddleware method connects apollo server to a specific http framework
apolloServer.applyMiddleware({ app });

//http server
const httpserver = http.createServer(app);

app.get("/rest", (req, res) => {
    res.json({
        data: "hit rest endpoint",
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Express Server Started On Port ${process.env.PORT}`);
    console.log(
        `Graphql Server Started On Port ${process.env.PORT}, Endpoint-> ${apolloServer.graphqlPath}`
    );
});
