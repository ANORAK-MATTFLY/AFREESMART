import axios from 'axios';
async function updateExpectedTurnover(str) {
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
                        updateProject(previousTurnover:"${str}")
                    }
            `
        }
    })
}


export default updateExpectedTurnover;