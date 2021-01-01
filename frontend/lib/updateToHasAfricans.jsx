import axios from 'axios';
async function updateToHasAfricans(hasAfricans) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (hasAfricans !== null) {
        await axios({
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                    mutation{
                        updateProject(hasAfricans:${hasAfricans})
                    }
            `
            }
        })
    }
}


export default updateToHasAfricans;
