import axios from 'axios';
async function updatePhilosophyUtil(str) {
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
                    updateMindset(philosophies:"${str}")
                }
            `
        }
    })
}


export default updatePhilosophyUtil;