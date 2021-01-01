import axios from 'axios';
async function loginRequest(projectsName) {
    const token = localStorage.getItem('afreesmartAcessToken') || "";
    await axios({
        url: 'https://afre-api.herokuapp.com/graphql',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        data: {
            query: `
        mutation{
            updateProject(projectsName:"${projectsName}")
        }
        `
        }
    })
}

export default loginRequest;
