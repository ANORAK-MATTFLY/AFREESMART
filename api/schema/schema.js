const {
	gql
} = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int
    name: String!
    lastName: String!
    password: String!
    email: String!
    project: Project!
    acessToken: String
    projectId: Int
    roleId: Int
  }
  	type Project {
    id: Int!
    projectsName: String!
    projectsDescription: String!
    webSiteLink: String!
    hasAfricans: Boolean!
    isRegistredCompany: Boolean!
    isBasedInAfrica: Boolean!
    generatesMoney: Boolean!
    isSimplifiedActionCompany: Boolean!
    projectCategoryId: Int
    projectStatusId: Int
    userId: Int!
    }

  type Query {
    current: User
    project: Project
  }

  type Mutation {
    register(
      name: String!
      lastName: String!
      email: String!
      password: String!
    ): String!
    login(email: String!, password: String!): String!
    addProjectName(projectsName: String!): String!
    updateToProjectDescrption(projectsDescription: String!): String!
    updateToCompanyName(companyName: String!): String!
    updateToWebSiteLink(webSiteLink: String!): String!
    updateToHasAfricans(hasAfricans: Boolean!): String!
    updateToIsRegistredCompany(isRegistredCompany: Boolean!): String!
    updateToIsBasedInAfrica(isBasedInAfrica: Boolean!): String!
    updateToGeneratesMoney(generatesMoney: Boolean!): String!
    updateToisSimplifiedActionCompany(
      isSimplifiedActionCompany: Boolean!
    ): String!
  }
`;

module.exports = typeDefs;