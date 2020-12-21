const { gql } = require('apollo-server');

module.exports = gql`
    type Project{
        id: ID!
        name: String!
        location: String! 
        difficulty: String!
        createdAt: String!
        username: String!
    }
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query{
        getUsers: [User]
        getProjects: [Project]
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createProject(name: String!, location: String!, difficulty: String!): Project!
    }
`
