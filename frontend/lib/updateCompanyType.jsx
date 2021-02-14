import axios from 'axios';
async function updateCompanyType(generatesMoney) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (generatesMoney !== null) {
        await axios({
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                    mutation{
                        updateProject(typeId:${generatesMoney})
                    }
            `
            }
        })
    }
}

export default updateCompanyType;