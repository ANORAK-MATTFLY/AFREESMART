const { gql } = require('apollo-server-express');

const schema = gql`
	type User {
		id: Int!
		name: String!
		last_name: String!
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
		current: User
	}

    type Mutation {
        register(name: String!, last_name:String!, email:String, password: String!): String!
        login( email: String!, password: String!): String!
		addProject(projectsName: String!, projectsDescription:String!): String!
    }
`;

module.exports = schema;
