import axios from 'axios';
async function updateMentorsUtil(str) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    await axios({
        url: 'http://localhost:9100/graphql',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        data: {
            query: `
                mutation{
                    updateBusinessMind(mentors:"${str}")
            }
            `
        }
    })
}


export default updateMentorsUtil;