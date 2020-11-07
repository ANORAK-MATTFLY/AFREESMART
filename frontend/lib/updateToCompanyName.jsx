import axios from 'axios';
async function updateToCompanyName(companyName) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (companyName) {
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
    return null;
}

export default updateToCompanyName;
