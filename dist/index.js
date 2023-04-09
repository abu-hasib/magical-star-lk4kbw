"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = __importDefault(require("./schema"));
const mock_1 = require("@graphql-tools/mock");
const schema_2 = require("@graphql-tools/schema");
const mocks = {
    Query: () => ({
        chaptersList: () => [...new Array(9)]
    }),
    Chapter: () => ({
        id: () => "chapter_01",
        name_arabic: () => "arabic",
        name_complex: () => "al-fatiha",
        verses_count: () => "5",
    })
};
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new server_1.ApolloServer({ schema: (0, mock_1.addMocksToSchema)({
                schema: (0, schema_2.makeExecutableSchema)({ typeDefs: schema_1.default }),
                mocks
            }) });
        const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
            listen: {
                port: Number(process.env.PORT) || 4000,
            }
        });
        console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
    });
}
startApolloServer();
