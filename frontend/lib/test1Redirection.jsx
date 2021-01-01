import axios from 'axios';
async function test1Redirection() {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    let req = await axios({
        url: 'https://afre-api.herokuapp.com/graphql',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        data: {
            query: `
           query{
            project{
                isValid
            }
            }
         `
        }
    })
    const res = await req.data;
    const { data } = res;
    const { project } = data;
    const { isValid } = project;
    return isValid;
}

export default test1Redirection;