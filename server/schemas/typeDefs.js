const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

type Book {
  bookId: String!
  authors: [String!]!
  description: String!
  title: String!
  image: Image
  link: [Link]!
}

  type Query {
    me: [User]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }

  type Image {
    url: String!
    altText: String
    width: Int
    height: Int
  }

  type Link {
    id: ID!
    url: String!
    description: String!
  }
  
  type Auth {
    token: String!
    user: User!
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookInput: BookInput!): User
    removeBook(bookId: ID!): User
  }
  
  input BookInput {
    bookId: ID!
    authors: [String]!
    description: String!
    title: String!
    image: String
    link: String
  }
`;

module.exports = typeDefs;
