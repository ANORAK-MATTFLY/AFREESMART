import axios from 'axios';
async function updateToProjectDescrption(projectsDescription) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    if (projectsDescription) {
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
    return null;
}

export default updateToProjectDescrption;
