import axios from 'axios';
async function updateToisSimplifiedActionCompany(isSimplifiedActionCompany) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (isSimplifiedActionCompany) {
        await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
            mutation{
                updateToisSimplifiedActionCompany(isSimplifiedActionCompany:${isSimplifiedActionCompany})
            }
        `
            }
        })
    }
    return null;
}

export default updateToisSimplifiedActionCompany;
