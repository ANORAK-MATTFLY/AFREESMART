import axios from 'axios';
async function userRegister(arg_name, arg_lastName, arg_email, arg_password) {

  let req = await axios({
    url: 'https://afre-api.herokuapp.com/graphql',
    method: 'post',
    data: {
      query: `
           mutation{
            register(name: "${arg_name}" , lastName:"${arg_lastName}", email:"${arg_email}", password:"${arg_password}")
            }
         `
    }
  })
  let res = await req.data;
  (res);
}

export default userRegister;
