const { User, Project, Mindset, BusinessMind, AbilityToManageMoney } = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config();


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
		async mindSet(_, args, { user }) {
			if (user) {
				return await Mindset.findOne({
					where: {
						id: user.id
					},
				});
			}
			throw new Error("Sorry, you're not an authenticated user!");
		},
		async getAllProject(_, args, ctx) {
			return await Project.findAll();
		},
		async getProjectById(_, { id }, ctx) {
			const project = await Project.findOne({
				where: {
					id: id,
				}
			});
			if (!project) {
				throw new Error("Sorry there's no project with that id")
			}
			return project;
		},

		async getAllUsers(_, args, ctx) {
			return await User.findAll();
		},

		async getMindSetById(_, { id }, ctx) {
			return await Mindset.findOne({
				where: {
					id: id
				},
			});
		},
		async businessMind(_, args, { user }) {
			if (user) {
				return await BusinessMind.findOne({
					where: {
						id: user.id
					},
				});
			}
			throw new Error("Sorry, you're not an authenticated user!");

		},
		async moneyMaker(_, args, { user }) {
			if (user) {
				return await AbilityToManageMoney.findOne({
					where: {
						id: user.id
					},
				});
			}
			throw new Error("Sorry, you're not an authenticated user!");

		},
		async project(_, args, { user }) {
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
			const mindset = await Mindset.create({
				id: await user.id
			})
			const businessMind = await BusinessMind.create({
				id: await user.id
			})
			const moneyMaker = await AbilityToManageMoney.create({
				id: await user.id
			})
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
					),
					mindsetId: await mindset.id,
					businessMindId: await businessMind.id,
					AbilityId: await moneyMaker.id

				},
				{ where: { id: user.id } }
			)

			await User.update(
				{
					mindsetId: mindset.id
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
		async updateProjectStatus(_, { projectStatusId, id }, ctx) {
			const updatedProject = await Project.update(
				{ projectStatusId: await projectStatusId },
				{ where: { id } }
			);
			if (updatedProject) {
				return `"${updatedProject}"`;
			} else {
				throw new Error("Something wrong happened...");
			}
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
		async updateMindset(_, { motivations, family, education, ethic, philosophies, diploma, strength, weaknesses, ambitions, achievements }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Mindset.update(
					{
						motivations,
						family,
						education,
						ethic,
						philosophies,
						diploma,
						strength,
						weaknesses,
						ambitions,
						achievements
					},
					{ where: { id: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateBusinessMind(_, { idol, careerAchievement, companyCreatedPreviously, failuresAsEntrepreneur, numberOfEmployeesManaged }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await BusinessMind.update(
					{
						idol,
						careerAchievement,
						companyCreatedPreviously,
						failuresAsEntrepreneur,
						numberOfEmployeesManaged
					},
					{ where: { id: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateAbilityToMakeMoney(_, { moneyInBank, debt }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await AbilityToManageMoney.update(
					{
						moneyInBank,
						debt
					},
					{ where: { id: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
	},
};

module.exports = resolvers;
