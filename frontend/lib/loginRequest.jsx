import axios from 'axios';
async function loginRequest(email, password) {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('afreesmartAcessToken')
  }

  let req = await axios({
    url: 'https://afre-api.herokuapp.com/graphql',
    method: 'post',
    data: {
      query: `
					mutation{
					login(email:"${email}", password:"${password}")
					}
        `
    }
  })
  let acessToken = await req.data || "";
  if (acessToken.data !== null) {
    localStorage.setItem('afreesmartAcessToken', acessToken.data.login);
  }
  return acessToken;
}

export default loginRequest;
