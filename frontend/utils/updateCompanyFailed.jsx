import axios from 'axios';
async function updateCompFailedUtil(str) {
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
                    updateBusinessMind(companyFailures:"${str}")
                }
            `
        }
    })
}


export default updateCompFailedUtil;