import axios from 'axios';
async function updateEntUtil(str) {
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
                    updateMindset(whyBecomeEnt:"${str}")
                }
            `
        }
    })
}


export default updateEntUtil;