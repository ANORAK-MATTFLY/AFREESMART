import axios from 'axios';
async function updateAchievementUtil(str) {
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
                    updateMindset(achievements:"${str}")
            }
            `
        }
    })
}


export default updateAchievementUtil;