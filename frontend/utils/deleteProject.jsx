import axios from 'axios';
async function DeleteProject(id) {
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
                    deleteProject(id:"${id}")
            }
            `
        }
    })
}


export default DeleteProject;