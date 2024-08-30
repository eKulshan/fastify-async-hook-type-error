import fastify, { FastifyInstance } from "fastify";

const asyncFunc = async () => Promise.resolve("ok")

const asyncHook = async () => {
  await asyncFunc();
};

const main = () => {
  const app = fastify()

  app.route({
    method: "GET",
    url: "/",
    onRequest: asyncHook,
    handler: async () => Promise.resolve("ok")
  });
}

main()
