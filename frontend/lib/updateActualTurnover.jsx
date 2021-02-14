import axios from 'axios';
async function updateToActualTurnover(str) {
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
                        updateProject(actualTurnover:"${str}")
                    }
            `
        }
    })
}

export default updateToActualTurnover;