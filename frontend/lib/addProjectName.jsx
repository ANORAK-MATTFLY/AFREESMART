import axios from 'axios';
async function loginRequest(projectsName) {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    let req = await axios({
        url: 'http://localhost:9100/graphql',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        data: {
            query: `
        mutation{
        addProjectName(projectsName:"${projectsName}")
        }
        `
        }
    })
    let acessToken = await req.data;
}

export default loginRequest;
