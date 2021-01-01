import axios from 'axios';
async function updateToProjectDescrption(projectsDescription) {
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
                updateProject(projectsDescription:"${projectsDescription}")
            }
        `
        }
    })
}


export default updateToProjectDescrption;
