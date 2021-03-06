const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const {
    ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

//graphql server needs types and resolvers

//Types
//Adding a ! means that it can't be null or empty
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;

//Resolvers
const resolvers = {
    Query: {
        totalPosts: () => {
            return 100;
        },
    },
};

//GraphQL Server
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

apolloServer.listen(process.env.PORT, () => {
    console.log(`Server Started On Port ${process.env.PORT}`);
});
