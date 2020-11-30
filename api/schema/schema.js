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
    typeId: Int!
    projectsName: String!
    projectsDescription: String!
    webSiteLink: String!
    companyName: String!
    previousTurnover: String!
    actualTurnover: String!
    dailyPeopleInvolved: String!
    fundRaiseExpectation: String!
    hasCampaign: Boolean!
    hasAfricans: Boolean!
    isRegistredCompany: Boolean!
    isBasedInAfrica: Boolean!
    generatesMoney: Boolean!
    isSimplifiedActionCompany: Boolean!
    isValid: Boolean!
    projectCategoryId: Int
    projectStatusId: Int
    userId: Int!
    }

    type Mindset{
      id: Int!
      motivations: String
      family: String
      education: String
      ethic: String
      philosophies: String
      diploma: String
      strength: String
      weaknesses: String
      ambitions: String
      achievements: String
    }
    type AbilityToMakeMoney{
      id: Int!
      moneyInBank: String
      debt: String
    }

    type BusinessMind{
      idol: String
      careerAchievement: String
      companyCreatedPreviously: String
      failuresAsEntrepreneur: String
      numberOfEmployeesManaged: String
    }

  type Query {
    current: User
    project: Project
    mindSet: Mindset
    businessMind: BusinessMind
    moneyMaker: AbilityToMakeMoney
    getAllUsers: [User!]
    getAllProject: [Project!]
    getProjectById(id:ID): Project!
    getMindSetById(id:ID): Mindset!
  }

  type Mutation {
    # Auth related mutations start here.
    register(
      name: String!
      lastName: String!
      email: String!
      password: String!
    ): String!
    login(email: String!, password: String!): String!
    # Project related mutations stat here.
    addProjectName(projectsName: String!): String!
    updateToProjectDescrption(projectsDescription: String!): String!
    updateToCompanyName(companyName: String!): String!
    updateToWebSiteLink(webSiteLink: Boolean!): String!
    updateToHasAfricans(hasAfricans: Boolean!): String!
    updateToIsRegistredCompany(isRegistredCompany: Boolean!): String!
    updateToIsBasedInAfrica(isBasedInAfrica: Boolean!): String!
    updateToGeneratesMoney(generatesMoney: Boolean!): String!
    updateToisSimplifiedActionCompany(isSimplifiedActionCompany: Boolean!): String!
    updateCompanyType(typeId: Int!): String!
    updateExpectedTurnover(previousTurnover: String!): String!
    updateActualTurnover(actualTurnover: String!): String!
    updateDailyPeopleInvolved(dailyPeopleInvolved: String!): String!
    updateFundRaiseExpectation(fundRaiseExpectation: String!): String!
    updateHasCampaign(hasCampaign: Boolean!): String!
    updateProjectStatus(projectStatusId: Int!, id:ID): String!
    # Project related mutations ends here.
    # Mindset related mutations start here.
    updateMindset(motivations: String, family: String, education: String, ethic: String, philosophies: String, diploma: String, strength: String, weaknesses: String, ambitions: String, achievements: String): String!
    # AbilityToMakeMoney related mutations start here.
    updateBusinessMind(
      idol: String
      careerAchievement: String
      companyCreatedPreviously: String
      failuresAsEntrepreneur: String
      numberOfEmployeesManaged: String
    ): String!
    updateAbilityToMakeMoney(moneyInBank: String, debt: String): String!
    # specific queries
  }
`;

module.exports = typeDefs;