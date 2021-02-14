import axios from 'axios';
async function updatePassiveUtil(str) {
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
                    updateAbilityToMakeMoney(passive:"${str}")
                }
            `
        }
    })
}


export default updatePassiveUtil;