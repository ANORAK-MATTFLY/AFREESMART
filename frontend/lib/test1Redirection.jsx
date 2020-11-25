import axios from 'axios';
async function test1Redirection() {
    const token = localStorage.getItem('afreesmartAcessToken') || '';
    let req = await axios({
        url: 'http://localhost:9100/graphql',
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
    const { data } = await req.data;
    const { project } = data;
    const { isValid } = project;
    if (req.data == null) {
        return null;
    }
    return isValid;
}

export default test1Redirection;