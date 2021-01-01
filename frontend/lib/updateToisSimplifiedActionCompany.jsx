import axios from 'axios';
async function updateToisSimplifiedActionCompany(isSimplifiedActionCompany) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (isSimplifiedActionCompany !== null) {
        await axios({
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                mutation{
                    updateProject(isSimplifiedActionCompany:${isSimplifiedActionCompany})
                }
            `
            }
        })
    }
}

export default updateToisSimplifiedActionCompany;
