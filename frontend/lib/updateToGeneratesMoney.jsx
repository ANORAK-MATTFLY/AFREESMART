import axios from 'axios';
async function updateToGeneratesMoney(generatesMoney) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (generatesMoney !== null) {
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
}


export default updateToGeneratesMoney;
