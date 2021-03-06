process.env.NODE_PATH = __dirname;
require("module").Module._initPaths();
require("dotenv").config();
require("express-async-errors");

const { GraphQLServer, PubSub } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const Subscription = require("resolvers/Subscription");
const Mutation = require("resolvers/Mutation");
const Query = require("resolvers/Query");

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers: {
    Subscription,
    Mutation,
    Query
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({ ...req, prisma, pubsub })
});

server.express.use(cookieParser());
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  // console.log(token)

  if (!token) {
    req.userId = null;
  }
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = userId;
  } catch (ex) {
    req.userId = null;
  }
  next();
});

server.express.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    res.status(500).send(err);
  }
  next();
});

server.start(
  {
    port: process.env.PORT,
    cors: {
      credentials: true,
      origin: process.env.CLIENT_URL
    }
  },
  deets => {
    console.info(`App is now running on port ${deets.port}`);
  }
);
