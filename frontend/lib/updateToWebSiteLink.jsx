import axios from 'axios';
async function updateToWebSiteLink(webSiteLink) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (webSiteLink !== null) {
        await axios({
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                mutation{
                    updateProject(webSiteLink:${webSiteLink})
                }
            `
            }
        })
    }
}

export default updateToWebSiteLink;