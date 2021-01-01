import axios from 'axios';
async function updateToCompanyName(companyName) {
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
                    updateProject(companyName:"${companyName}")
                }
        `
        }
    })
}


export default updateToCompanyName;
