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
    projectsName: String
    projectsDescription: String
    webSiteLink: Boolean
    companyName: String
    previousTurnover: String
    actualTurnover: String
    dailyPeopleInvolved: String
    fundRaiseExpectation: String
    hasCampaign: Boolean
    hasAfricans: Boolean
    isRegistredCompany: Boolean
    isBasedInAfrica: Boolean
    generatesMoney: Boolean
    isSimplifiedActionCompany: Boolean
    isValid: Boolean
    projectCategoryId: Int
    projectStatusId: Int
    userId: Int
    }

    type ProjectDoc {
      id: ID
      contextLink: String
      companyLink: String
      businessModelLink: String
      comercialtLink: String
      marketingtLink: String
      managementLink: String
      corporateLink: String
      businessPlanLink: String
      proofOfConceptLink: String
      planFinancierLink: String
      companyManagement: String
      turnoverGrowth: String
      projectLegalAuthorizations: String
      fluxGrowth: String
      teamProfile: String
      companyVision: String
      abilityToGenerateEmployment: String
      cashFlowStatement: String
      balanceSheet: String
      cR: String
    }

    type TemplateDoc {
      id: ID
      contextLink: String
      companyLink: String
      businessModelLink: String
      comercialtLink: String
      marketingtLink: String
      managementLink: String
      corporateLink: String
      businessPlanLink: String
      proofOfConceptLink: String
      planFinancierLink: String
      companyManagement: String
      turnoverGrowth: String
      projectLegalAuthorizations: String
      fluxGrowth: String
      teamProfile: String
      companyVision: String
      abilityToGenerateEmployment: String
      cashFlowStatement: String
      balanceSheet: String
      cR: String
    }

    type Mindset{
      id: Int!
      companyValues: String
      family: String
      thoughtOnTeamwork: String
      thoughtOnAdvices: String
      whyBecomeEnt: String
      ethic: String
      IfWrong: String
      IfLate: String
      IfYouGetStuck: String
      ifYouFaille: String
      ifYouHaveNoExp: String
      fiveKeyStrength: String
      fiveWeakness: String
      relationShipWithMoney: String
      education: String
    }
    type AbilityToMakeMoney{
      id: Int!
      passive: String
      monthlyEarningMoney: String
    }

    type BusinessMind{
      idol: String
      careerAchievement: String
      companyCreatedPreviously: String
      failuresAsEntrepreneur: String
      numberOfEmployeesManaged: String
      mentors: String
      doYouHaveSupport: String
      howManyAreYou: String
      companyFailures: String
      PreviousCompaniesCard: String
      twoQuestionsForThisPeople: String
      threePeopleYouWouldLikeToMet: String
    }

  type Query {
    current: User
    project: Project
    mindSet: Mindset
    businessMind: BusinessMind
    moneyMaker: AbilityToMakeMoney
    getAllUsers: [User!]
    getAllProject: [Project!]
    getTemplateById(id:ID): TemplateDoc!
    getProjectById(id:ID): Project!
    getProjectDocById: ProjectDoc!
    getMindSetById(id:ID): Mindset!
    getAbilityToMakeMoneyById(id:ID): AbilityToMakeMoney!
    getBusinessMindById(id:ID): BusinessMind!
    getProjectDocByIdButForReal(id:ID): ProjectDoc!
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
    updateProject(
    typeId: Int,
    projectsName: String,
    projectsDescription: String,
    webSiteLink: Boolean,
    companyName: String,
    previousTurnover: String,
    actualTurnover: String,
    dailyPeopleInvolved: String,
    fundRaiseExpectation: String,
    hasCampaign: Boolean,
    hasAfricans: Boolean,
    isRegistredCompany: Boolean,
    isBasedInAfrica: Boolean,
    generatesMoney: Boolean,
    isSimplifiedActionCompany: Boolean,
    projectCategoryId: Int,
    projectStatusId: Int,
    userId: Int) : String!
    # Project related mutations ends here.
    # Mindset related mutations start here.
    updateMindset(companyValues: String
      family: String
      thoughtOnTeamwork: String
      thoughtOnAdvices: String
      whyBecomeEnt: String
      IfWrong: String
      IfLate: String
      IfYouGetStuck: String
      ifYouFaille: String
      ifYouHaveNoExp: String
      fiveKeyStrength: String
      fiveWeakness: String
      relationShipWithMoney: String
      education: String): String!
    # AbilityToMakeMoney related mutations start here.
    updateBusinessMind(
      idol: String
      careerAchievement: String
      companyCreatedPreviously: String
      failuresAsEntrepreneur: String
      numberOfEmployeesManaged: String
      mentors: String
      doYouHaveSupport: String
      howManyAreYou: String
      companyFailures: String
      PreviousCompaniesCard: String
      twoQuestionsForThisPeople: String
      threePeopleYouWouldLikeToMet: String
    ): String!
    updateAbilityToMakeMoney(passive: String, monthlyEarningMoney: String): String!
    # 
    invalidateProject(isValid: Boolean): String!
    setToInvalidateProject(isValid: Boolean): String!
    uploadPhoto(photo: String): String
    # Role related mutations
    updateUserRole(roleId: Int!, id:ID): String!
    updateProjectStatus(projectStatusId: Int, id:ID): String!
    deleteProject(id:ID): String!
    # files related mutations
    createProjectDoc(userId: String): String!
    updateProjectDoc(
      contextLink: String,
      companyLink: String,
      businessModelLink: String,
      comercialtLink: String,
      marketingtLink: String,
      managementLink: String,
      corporateLink: String,
      businessPlanLink: String,
      proofOfConceptLink: String,
      planFinancierLink: String,
      companyManagement: String,
      turnoverGrowth: String,
      projectLegalAuthorizations: String,
      fluxGrowth: String,
      teamProfile: String,
      companyVision: String,
      abilityToGenerateEmployment: String,
      cashFlowStatement: String,
      balanceSheet: String,
      cR: String,
    ): String!

    updateTemplateDoc(
      contextLink: String,
      companyLink: String,
      businessModelLink: String,
      comercialtLink: String,
      marketingtLink: String,
      managementLink: String,
      corporateLink: String,
      businessPlanLink: String,
      proofOfConceptLink: String,
      planFinancierLink: String,
      companyManagement: String,
      turnoverGrowth: String,
      projectLegalAuthorizations: String,
      fluxGrowth: String,
      teamProfile: String,
      companyVision: String,
      abilityToGenerateEmployment: String,
      cashFlowStatement: String,
      balanceSheet: String,
      cR: String,
    ): String!
    creatTemplateDoc(id:ID): String!
  }
`;

module.exports = typeDefs;