const { User, Project } = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config();


const resolvers = {
	Query: {
		async current(parent, args, { user }) {
			if (user) {
				return await User.findOne({
					where: {
						id: user.id
					},
				});
			}
			throw new Error("Sorry, you're not an authenticated user!");

		},
		async project(parent, args, { user }) {
			return Project.findOne({
				where: {
					userId: user.id
				},
			});
		}
	},

	Mutation: {
		async register(_, { name, lastName, email, password },) {
			const user = await User.create({
				name,
				lastName,
				email,
				roleId: await 1,
				password: await bcrypt.hash(password, 10),
			});
			User.update(
				{
					acessToken: await jsonwebtoken.sign(
						{
							id: user.id,
							email: user.email,
						},
						process.env.JWT_SECRET,
						{
							expiresIn: '1y',
						}
					)
				},
				{ where: { id: user.id } }
			)
			return "Success";
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

			return user.acessToken;
		},
		async addProjectName(_, { projectsName }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			const project = await Project.create({
				projectsName,
				projectCategoryId: await 1,
				projectStatusId: await 1,
				userId: user.id
			})
			if (project) {
				await User.update(
					{ projectId: await project.id },
					{ where: { email: user.email } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			if (project) {
				return "Your project has been created";
			}
			throw new Error("Something wrong happened...")
		},
		async updateToProjectDescrption(_, { projectsDescription }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ projectsDescription: await projectsDescription },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateToCompanyName(_, { companyName }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ companyName: await companyName },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateToWebSiteLink(_, { webSiteLink }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ webSiteLink: await webSiteLink },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			if (webSiteLink === false) {
				await Project.update(
					{ isValid: await false },
					{ where: { userId: user.id } }
				)
			}
			return "Success";
		},
		async updateToHasAfricans(_, { hasAfricans }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ hasAfricans: await hasAfricans },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			if (hasAfricans === false) {
				await Project.update(
					{ isValid: await false },
					{ where: { userId: user.id } }
				)
			}
			return "Success";
		},
		async updateToIsRegistredCompany(_, { isRegistredCompany }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ isRegistredCompany: await isRegistredCompany },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			if (isRegistredCompany === false) {
				await Project.update(
					{ isValid: await false },
					{ where: { userId: user.id } }
				)
			}
			return "Success";
		},
		async updateToIsBasedInAfrica(_, { isBasedInAfrica }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ isBasedInAfrica: await isBasedInAfrica },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			if (isBasedInAfrica === false) {
				await Project.update(
					{ isValid: await false },
					{ where: { userId: user.id } }
				)
			}
			return "Success";
		},
		async updateToGeneratesMoney(_, { generatesMoney }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ generatesMoney: await generatesMoney },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}

			if (generatesMoney === false) {
				await Project.update(
					{ isValid: await false },
					{ where: { userId: user.id } }
				)
			}
			return "Success";
		},
		async updateToisSimplifiedActionCompany(_, { isSimplifiedActionCompany }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ isSimplifiedActionCompany: await isSimplifiedActionCompany },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			if (isSimplifiedActionCompany === false) {
				await Project.update(
					{ isValid: await false },
					{ where: { userId: user.id } }
				)
			}
			return "Success";
		},
		async updateCompanyType(_, { typeId }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ typeId: await typeId },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateExpectedTurnover(_, { previousTurnover }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ previousTurnover: await previousTurnover },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateActualTurnover(_, { actualTurnover }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ actualTurnover: await actualTurnover },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateDailyPeopleInvolved(_, { dailyPeopleInvolved }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ dailyPeopleInvolved: await dailyPeopleInvolved },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateFundRaiseExpectation(_, { fundRaiseExpectation }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ fundRaiseExpectation: await fundRaiseExpectation },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateHasCampaign(_, { hasCampaign }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{ hasCampaign: await hasCampaign },
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},

	},
};

module.exports = resolvers;
