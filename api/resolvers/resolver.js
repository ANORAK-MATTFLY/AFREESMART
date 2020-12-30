const { User, Project, Mindset, BusinessMind, AbilityToManageMoney, ProjectDoc, TemplateDoc } = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
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
		async getProjectDocById(_, args, { user }) {
			if (user) {
				return await ProjectDoc.findOne({
					where: { userId: user.id }
				})
			}
			throw new Error("Sorry something went wrong...");
		},
		async getProjectDocByIdButForReal(_, { id }, ctx) {
			const project = await await ProjectDoc.findOne({
				where: { userId: id }
			})
			if (project) {
				return project;
			}
			throw new Error("Sorry something went wrong...");
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
		async getTemplateById(root, { id }, ctx) {
			return await TemplateDoc.findOne({
				where: { id }
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
		},
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
			await Mindset.create({
				id: await user.id
			})
			await BusinessMind.create({
				id: await user.id
			})
			await AbilityToManageMoney.create({
				id: await user.id
			})
			await Project.create({
				id: await user.id,
				userId: await user.id
			})
			await ProjectDoc.create(
				{ userId: user.id },
			)


			await User.update(
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
		async updateUserRole(root, { roleId, id }, ctx) {
			const updatedUser = await User.update(
				{ roleId },
				{ where: { id: id } }
			)
			if (!updatedUser) {
				return "Success!!"
			}
			return "Sorry something went wrong...";
		},
		async deleteProject(root, { id }, ctx) {
			const deletedProject = await Project.destroy({
				where: { id }
			})
			if (!deletedProject) {
				return "Success"
			}
			return "Sorry something went wrong..."
		},
		async updateProject(root, {
			typeId,
			projectsName,
			projectsDescription,
			webSiteLink,
			companyName,
			previousTurnover,
			actualTurnover,
			dailyPeopleInvolved,
			fundRaiseExpectation,
			hasCampaign,
			hasAfricans,
			isRegistredCompany,
			isBasedInAfrica,
			generatesMoney,
			isSimplifiedActionCompany,
			projectCategoryId,
			projectStatusId,
			userId }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Project.update(
					{
						typeId,
						projectsName,
						projectsDescription,
						webSiteLink,
						companyName,
						previousTurnover,
						actualTurnover,
						dailyPeopleInvolved,
						fundRaiseExpectation,
						hasCampaign,
						hasAfricans,
						isRegistredCompany,
						isBasedInAfrica,
						generatesMoney,
						isSimplifiedActionCompany,
						projectCategoryId,
						projectStatusId,
						userId
					},
					{ where: { userId: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateProjectStatus(root, { projectStatusId, id }, ctx) {
			const project = await Project.update(
				{ projectStatusId },
				{ where: { userId: id } }
			)
			if (project) {
				return "Success!!!"
			}
			return "Sorry something went wrong..."
		},
		async setToInvalidateProject(root, { isValid }, { user }) {
			const project = await Project.findOne({
				where: {
					userId: user.id
				},
			})
			if (
				(project.previousTurnover === 'null') ||
				(project.actualTurnover === 'null') || (project.dailyPeopleInvolved === 'null') ||
				(project.fundRaiseExpectation === 'null') || (project.hasCampaign === false)
			) {
				await Project.update(
					{ isValid: await false },
					{ where: { userId: user.id } },
				)
			} else {
				await Project.update(
					{ isValid: await true },
					{ where: { userId: user.id } },
				)
			}
			return await `The validity of the project ${project.isValid}`;
		},
		async invalidateProject(root, { isValid }, { user }) {
			const project = await Project.findOne({
				where: {
					userId: user.id
				},
			})
			if (
				(project.webSiteLink === false) ||
				(project.hasAfricans === false) || (project.isRegistredCompany === false) ||
				(project.isBasedInAfrica === false) || (project.generatesMoney === false) ||
				(project.isSimplifiedActionCompany === false)
			) {
				await Project.update(
					{ isValid: await false },
					{ where: { userId: user.id } },
				)
			} else {
				await Project.update(
					{ isValid: await true },
					{ where: { userId: user.id } },
				)
			}
			return await `The validity of the project ${project.isValid}`;
		},

		async updateMindset(_, { companyValues,
			family,
			thoughtOnTeamwork,
			thoughtOnAdvices,
			whyBecomeEnt,
			IfWrong,
			IfLate,
			IfYouGetStuck,
			ifYouFaille,
			ifYouHaveNoExp,
			fiveKeyStrength,
			fiveWeakness,
			relationShipWithMoney,
			education }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await Mindset.update(
					{
						companyValues,
						family,
						thoughtOnTeamwork,
						thoughtOnTeamwork,
						thoughtOnAdvices,
						whyBecomeEnt,
						IfWrong,
						IfLate,
						IfYouGetStuck,
						ifYouFaille,
						ifYouHaveNoExp,
						fiveKeyStrength,
						fiveWeakness,
						relationShipWithMoney,
						education
					},
					{ where: { id: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateBusinessMind(_, {
			idol,
			careerAchievement,
			companyCreatedPreviously,
			failuresAsEntrepreneur,
			numberOfEmployeesManaged,
			mentors,
			doYouHaveSupport,
			howManyAreYou,
			companyFailures,
			PreviousCompaniesCard,
			twoQuestionsForThisPeople,
			threePeopleYouWouldLikeToMet
		}, { user }) {
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
						numberOfEmployeesManaged,
						mentors,
						doYouHaveSupport,
						howManyAreYou,
						companyFailures,
						PreviousCompaniesCard,
						twoQuestionsForThisPeople,
						threePeopleYouWouldLikeToMet
					},
					{ where: { id: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async updateAbilityToMakeMoney(_, { passive, monthlyEarningMoney }, { user }) {
			if (!user) {
				throw new Error("Sorry you're not an authenticated user...")
			}
			if (user) {
				await AbilityToManageMoney.update(
					{
						passive,
						monthlyEarningMoney
					},
					{ where: { id: user.id } }
				)
			} else {
				throw new Error("Something wrong happened...");
			}
			return "Success";
		},
		async creatTemplateDoc(root, { id }, ctx) {
			const template = await TemplateDoc.create({
				id
			})
			if (template) {
				return "Success!!";
			}
			return "Sorry something went wrong...";
		},
		async updateTemplateDoc(root, {
			contextLink,
			companyLink,
			businessModelLink,
			comercialtLink,
			marketingtLink,
			managementLink,
			corporateLink,
			businessPlanLink,
			proofOfConceptLink,
			planFinancierLink,
			companyManagement,
			turnoverGrowth,
			projectLegalAuthorizations,
			fluxGrowth,
			teamProfile,
			companyVision,
			abilityToGenerateEmployment,
			cashFlowStatement,
			balanceSheet,
			cR }, ctx) {
			const template = await TemplateDoc.findOne(
				{ where: { id: 1 } }
			)
			await template.update({
				contextLink,
				companyLink,
				businessModelLink,
				comercialtLink,
				marketingtLink,
				managementLink,
				corporateLink,
				businessPlanLink,
				proofOfConceptLink,
				planFinancierLink,
				companyManagement,
				turnoverGrowth,
				projectLegalAuthorizations,
				fluxGrowth,
				teamProfile,
				companyVision,
				abilityToGenerateEmployment,
				cashFlowStatement,
				balanceSheet,
				cR
			}, { where: { id: await 1 } });
			if (template) {
				return "Success";
			}
			return "Sorry something wrong happened";
		},
		async updateProjectDoc(
			root,
			{ contextLink,
				companyLink,
				businessModelLink,
				comercialtLink,
				marketingtLink,
				managementLink,
				corporateLink,
				businessPlanLink,
				proofOfConceptLink,
				planFinancierLink,
				companyManagement,
				turnoverGrowth,
				projectLegalAuthorizations,
				fluxGrowth,
				teamProfile,
				companyVision,
				abilityToGenerateEmployment,
				cashFlowStatement,
				balanceSheet,
				cR }, { user }) {
			const doc = await ProjectDoc.findOne({
				where: { userId: user.id }
			});
			await doc.update({
				contextLink,
				companyLink,
				businessModelLink,
				comercialtLink,
				marketingtLink,
				managementLink,
				corporateLink,
				businessPlanLink,
				proofOfConceptLink,
				planFinancierLink,
				companyManagement,
				turnoverGrowth,
				projectLegalAuthorizations,
				fluxGrowth,
				teamProfile,
				companyVision,
				abilityToGenerateEmployment,
				cashFlowStatement,
				balanceSheet,
				cR
			});
			if (doc) {
				return "Success!!!";
			}
			return "Sorry something went wrong...";
		},
	},
};




module.exports = resolvers;
