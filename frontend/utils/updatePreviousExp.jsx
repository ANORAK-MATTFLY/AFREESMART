import axios from 'axios';
async function updatePreviousExpUtil(str) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    await axios({
        url: 'https://afre-api.herokuapp.com/graphql',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        data: {
            query: `
                mutation{
                    updateBusinessMind(careerAchievement:"${str}")
                }
            `
        }
    })
}


export default updatePreviousExpUtil;