import axios from 'axios';
async function setInvalidate(bool) {
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
                setToInvalidateProject(isValid:${bool})
            }              
            `
        }
    })
}


export default setInvalidate;