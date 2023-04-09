"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const typeDefs = (0, graphql_tag_1.gql) `
  type Query {
    chaptersList: [Chapter!]!
  }
  type Chapter {
    id: ID!
    name_complex: String!
    name_arabic: String!
    verses_count: Int!
  }
`;
exports.default = typeDefs;
