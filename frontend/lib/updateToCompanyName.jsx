import axios from 'axios';
async function updateToCompanyName(companyName) {
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
                    updateToCompanyName(companyName:"${companyName}")
                }
        `
        }
    })
}


export default updateToCompanyName;
