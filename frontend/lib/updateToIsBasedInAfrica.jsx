import axios from 'axios';
async function updateToIsBasedInAfrica(isBasedInAfrica) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (isBasedInAfrica) {
        await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
            mutation{
                updateToIsBasedInAfrica(isBasedInAfrica:${isBasedInAfrica})
            }
        `
            }
        })
    }
    return null;
}

export default updateToIsBasedInAfrica;
