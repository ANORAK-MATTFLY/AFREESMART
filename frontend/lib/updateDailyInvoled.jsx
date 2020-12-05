import axios from 'axios';
async function updateDailyPeopleInvolved(str) {
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
                        updateProject(dailyPeopleInvolved:"${str}")
                    }
            `
        }
    })
}


export default updateDailyPeopleInvolved;