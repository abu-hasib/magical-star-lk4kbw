import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    chaptersList: [Chapter!]!
  }
  type Chapter {
    id: ID!
    name_complex: String!
    name_arabic: String!
    verses_count: Int!
  }
`

export default typeDefs