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

	
	type Query {
		current(id:ID!): User
	}

    type Mutation {
        register(name: String!, lastName:String!, email:String!, password: String!): String!
        login( email: String!, password: String!): String!
		addProject(projectsName: String!, projectsDescription:String!): String!
    }
`;



module.exports = typeDefs;
;
