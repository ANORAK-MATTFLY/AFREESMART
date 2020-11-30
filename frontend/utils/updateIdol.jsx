import axios from 'axios';
async function updateIdolUtil(str) {
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
                    updateBusinessMind(idol:"${str}")
            }
            `
        }
    })
}


export default updateIdolUtil;