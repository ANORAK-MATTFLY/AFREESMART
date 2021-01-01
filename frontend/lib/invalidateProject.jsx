import axios from 'axios';
async function InvalidateProject(bool) {
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
                        invalidateProject(isValid:${bool})
                    }
            `
        }
    })
}


export default InvalidateProject;