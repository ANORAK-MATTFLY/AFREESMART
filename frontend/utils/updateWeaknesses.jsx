import axios from 'axios';
async function updateWeaknessesUtil(str) {
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
                    updateMindset(fiveWeakness:"${str}")
                }
            `
        }
    })
}


export default updateWeaknessesUtil;