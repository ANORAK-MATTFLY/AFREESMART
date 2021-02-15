import axios from 'axios';
async function UpdateIdolsUtil(str) {
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
                    updateBusinessMind(idol:"${str}")
            }
            `
        }
    })
}


export default UpdateIdolsUtil;