import axios from 'axios';
async function updateMoneyUtil(str) {
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
                    updateAbilityToMakeMoney(moneyInBank:"${str}")
                }
            `
        }
    })
}


export default updateMoneyUtil;