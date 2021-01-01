import axios from 'axios';
async function updateToIsBasedInAfrica(isBasedInAfrica) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (isBasedInAfrica !== null) {
        await axios({
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                mutation{
                    updateProject(isBasedInAfrica:${isBasedInAfrica})
                }
            `
            }
        })
    }
}

export default updateToIsBasedInAfrica;
