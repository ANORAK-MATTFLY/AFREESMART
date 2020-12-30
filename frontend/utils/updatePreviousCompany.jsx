import axios from 'axios';
async function updateCompaniesCreatedUtil(str) {
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
                    updateBusinessMind(PreviousCompaniesCard:"${str}")
                }
            `
        }
    })
}


export default updateCompaniesCreatedUtil;