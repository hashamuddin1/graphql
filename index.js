const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const mongoDB = "mongodb://127.0.0.1:27017/restaurant";

//Apollo Server
//typeDefs: Graphql type definitions
//resolvers: how do we resolve quiries/mutations

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Database Connected Successfully");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch(() => {
    console.log("Database is not Connected");
  });
