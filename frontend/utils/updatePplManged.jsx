import axios from 'axios';
async function updatePplManagedUtil(str) {
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
                    updateBusinessMind(numberOfEmployeesManaged:"${str}")
                }
            `
        }
    })
}


export default updatePplManagedUtil;