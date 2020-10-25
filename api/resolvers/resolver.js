const { User, Project } = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config();
var mkdirp = require('mkdirp');
const getDirName = require('path').dirname;

function writeFile(path, contents, cb) {
	mkdirp(getDirName(path), function (err) {
		if (err) return err;

		fs.writeFile(path, contents, (err, data) => {
			console.log(data)
		});
	});
}

const resolvers = {
	Query: {
		async current(_, args, { user }) {
			if (user) {
				return await User.findOne({
					where: {
						id: user.id
					},
				});
			}
			throw new Error("Sorry, you're not an authenticated user!");
		},
	},

	Mutation: {
		async register(_, { name, last_name, email, password },) {
			const user = await User.create({
				name,
				last_name,
				email,
				password: await bcrypt.hash(password, 10),
			});
			const toReturnToken = await jsonwebtoken.sign(
				{
					id: user.id,
					email: user.email,
				},
				process.env.JWT_SECRET,
				{
					expiresIn: '1y',
				}
			);
			await writeFile('./token.js', "let JwtToken=" + `"${toReturnToken}"` + ";" + "\nmodule.exports=JwtToken;");
			return toReturnToken;
		},

		async login(_, { email, password }) {
			const user = await User.findOne({
				where: {
					email,
				},
			});

			if (!user) {
				throw new Error("This user doesn't exist. Please, make sure to type the right login.");
			}

			const isValidUser = await bcrypt.compare(password, user.password);

			if (!isValidUser) {
				throw new Error('Your password is incorrect!');
			}

			return jsonwebtoken.sign(
				{
					id: user.id,
					email: user.email,
				},
				process.env.JWT_SECRET,
				{
					expiresIn: '1y',
				}
			);
		},
		async addProject(_, { projectsName, projectsDescription }, { user }) {
			const project = await Project.create({
				projectsName,
				projectsDescription,
				projectCategoryId: await 1,
				projectStatusId: await 1,
				userId: await user.id
			})
			if (project) {
				return "Your project has been created";
			}
			throw new Error("Something wrong happened...")
		}
	},
};

module.exports = resolvers;
