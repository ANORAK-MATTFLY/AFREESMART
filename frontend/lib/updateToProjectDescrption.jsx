import axios from 'axios';
async function updateToProjectDescrption(projectsDescription) {
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
                updateToProjectDescrption(projectsDescription:"${projectsDescription}")
            }
        `
        }
    })
}


export default updateToProjectDescrption;
