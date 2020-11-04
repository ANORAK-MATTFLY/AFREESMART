const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		id: Int
		name: String!
		lastName: String!
		password: String!
		email: String!
		project: Project
		projectId: Int
		roleId: Int

	}
	type Project {
		id: Int!
		projectsName: String!
		projectsDescription: String!
		projectCategoryId: Int!
		projectStatusId: Int!
		userId: Int
	}

	type Test1 {
		questionOne: String
		questionTwo: String
		questionThree: String
	}


	type Query {
		current: User
	}

    type Mutation {
        register(name: String!, lastName:String!, email:String!, password: String!): String!
        login( email: String!, password: String!): String!
		addProject(projectsName: String!, projectsDescription:String!): String!
		submitTest(questionOne: String, questionTwo: String, questionThree: String): String!
    }
`;

module.exports = typeDefs;
;
