import axios from 'axios';
async function updateToGeneratesMoney(generatesMoney) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (generatesMoney) {
        await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                mutation{
                    updateToGeneratesMoney(generatesMoney:${generatesMoney})
                }
        `
            }
        })
    }
    return null;
}

export default updateToGeneratesMoney;
