import axios from 'axios';
async function updateQuestionsUtil(str) {
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
                    updateBusinessMind(twoQuestionsForThisPeople:"${str}")
            }
            `
        }
    })
}


export default updateQuestionsUtil;