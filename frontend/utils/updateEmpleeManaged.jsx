import axios from 'axios';
async function updateEmployeesUtil(str) {
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
                    updateBusinessMind(numberOfEmployeesManaged:"${str}")
            }
            `
        }
    })
}


export default updateEmployeesUtil;