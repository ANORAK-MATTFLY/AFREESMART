import axios from 'axios';
async function updateIfLateUtil(str) {
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
                    updateMindset(IfLate:"${str}")
                }
            `
        }
    })
}


export default updateIfLateUtil;