require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolver');
const jwt = require('express-jwt');
const jsonwebtoken = require("jsonwebtoken");
const db = require('./models');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 9100;

// Pointless comment
const auth = jwt({
	secret: process.env.JWT_SECRET,
	algorithms: ['HS256'],
	credentialIsRequired: false,
})
const getUser = (token) => {
	try {
		if (token) {
			return jsonwebtoken.verify(token, process.env.JWT_SECRET)
		}
		return null;
	} catch (err) {
		throw new Error("Sorry this token is already expired");
	}
}

app.use(bodyParser.json())
const server = new ApolloServer({
	typeDefs,
	resolvers,
	app,
	auth,
	playground: {
		endpoint: '/graphql',
	},
	context: (({ req, res }) => {
		const JwtToken = require('./token');

		const tokenWithBearer = req.headers.authorization || "";

		let token = tokenWithBearer.split(" ")[1];
		token = JwtToken;
		const user = getUser(token);
		res = res.req.headers.authorization
		return { user, res };
	}),
});

server.applyMiddleware({ app });

db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`server running on port http://localhost:${PORT}/graphql`);
	});
});

