import axios from 'axios';
async function updateDiplomaUtil(str) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    await axios({
        url: 'http://localhost:9100/graphql',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        data: {
            query: `
                mutation{
                    updateBusinessMind(careerAchievementL:"${str}")
                }
            `
        }
    })
}


export default updateDiplomaUtil;