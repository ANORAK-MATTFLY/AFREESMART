import axios from 'axios';
async function updateHasCampaign(bool) {
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
                    updateProject(hasCampaign:${bool})
                }
            `
        }
    })
}


export default updateHasCampaign;
