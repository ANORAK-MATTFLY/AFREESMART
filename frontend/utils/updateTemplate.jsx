import axios from 'axios';
async function updateTemplate(tmpArg) {
    await axios({
        url: 'http://localhost:9100/graphql',
        method: 'post',
        data: {
            query: `
                mutation{
                    updateTemplateDoc(contextLink:"${tmpArg}")
                }
            `
        }
    })
}


export default updateTemplate;