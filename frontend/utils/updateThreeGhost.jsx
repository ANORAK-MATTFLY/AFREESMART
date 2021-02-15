import axios from 'axios';
async function updateThreeGhostUtil(str) {
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
                    updateBusinessMind(threePeopleYouWouldLikeToMet:"${str}")
            }
            `
        }
    })
}


export default updateThreeGhostUtil;