import axios from 'axios';
async function loginRequest(email, password) {
  let req = await axios({
    url: 'http://localhost:9100/graphql',
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
  if (acessToken) {
    localStorage.setItem('afreesmartAcessToken', acessToken.data.login || "");
  }
  return acessToken;
}

export default loginRequest;
