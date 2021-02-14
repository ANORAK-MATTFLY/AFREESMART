import axios from 'axios';
async function updateFundRaise(str) {
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
                        updateProject(fundRaiseExpectation:"${str}")
                    }
            `
        }
    })
}


export default updateFundRaise;