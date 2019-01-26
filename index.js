const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers");
const { importSchema } = require("graphql-import");
const { makeExecutableSchema } = require("graphql-tools");
const typeDefs = importSchema("./schema.graphql");
const schema = makeExecutableSchema({ typeDefs, resolvers });
const mongoose = require("mongoose");

const server = new GraphQLServer({
  schema,
  context: req => ({ ...req })
});

const options = {
  port: 5000,
  endpoint: "/graphql",
  playground: "/playground"
};

server.start(options, () => {
  console.log("servidor levantado en graphql");
});

mongoose
  .connect("mongodb://localhost:27017/Insta")
  .then(() => {
    console.log("Base de datos levantada en el puerto 27017");
  })
  .catch(() => {
    console.log("Hay un problema al levantar la BD");
  });
