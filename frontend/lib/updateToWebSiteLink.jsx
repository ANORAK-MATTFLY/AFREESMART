import axios from 'axios';
async function updateToWebSiteLink(webSiteLink) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (webSiteLink) {
        await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
            mutation{
                updateToWebSiteLink(webSiteLink:"${webSiteLink}")
            }
        `
            }
        })
    }
    return null;
}

export default updateToWebSiteLink;