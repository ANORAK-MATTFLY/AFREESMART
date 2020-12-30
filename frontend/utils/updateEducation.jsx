import axios from 'axios';
async function UpdateEducationUtil(str) {
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
                    updateMindset(education:"${str}")
            }
            `
        }
    })
}


export default UpdateEducationUtil;