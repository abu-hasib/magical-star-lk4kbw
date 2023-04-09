import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import typeDefs from "./schema";
import {addMocksToSchema} from "@graphql-tools/mock";
import {makeExecutableSchema} from "@graphql-tools/schema"

const mocks  = {
    Query: () => ({
        chaptersList: () => [...new Array(9)]
    }),
    Chapter: () => ({
        id: () => "chapter_01",
        name_arabic: () => "arabic",
        name_complex: () => "al-fatiha",
        verses_count: () => "5",
    })
} 

async function startApolloServer() {
    const server = new ApolloServer({schema: addMocksToSchema({
        schema: makeExecutableSchema({typeDefs}),
        mocks
    })})
    const { url }  = await startStandaloneServer(server, {
        listen: {
        port: Number(process.env.PORT) || 4000,
    }})
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer()