import axios from 'axios';
async function UpdateMentorsUtil(str) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    await axios({
        url: 'https://afre-api.herokuapp.com/graphql',
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


export default UpdateMentorsUtil;