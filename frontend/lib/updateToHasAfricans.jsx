import axios from 'axios';
async function updateToHasAfricans(hasAfricans) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (hasAfricans) {
        await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                mutation{
                    updateToHasAfricans(hasAfricans:${hasAfricans})
                }
        `
            }
        })
    }
    return null;
}

export default updateToHasAfricans;
