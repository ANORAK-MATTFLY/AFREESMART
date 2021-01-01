import axios from 'axios';
async function updateToIsRegistredCompany(isRegistredCompany) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (isRegistredCompany !== null) {
        await axios({
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                mutation{
                    updateProject(isRegistredCompany:${isRegistredCompany})
                }
            `
            }
        })
    }
}


export default updateToIsRegistredCompany;
