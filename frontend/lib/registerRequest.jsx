import axios from 'axios';
async function userRegister(arg_name, arg_lastName, arg_email, arg_password){
  let req = await  axios({
       url: 'http://localhost:9100/graphql',
       method: 'post',
       data: {
           query: `
           mutation{
            register(name: "${arg_name}" , lastName:"${arg_lastName}", email:"${arg_email}", password:"${arg_password}")
            }
         `
       }
   })
   let acessToken = await req.data;
	 if(acessToken){
		 localStorage.setItem('afreesmartAcessToken', acessToken.data.register);
	 }
   return acessToken;
}

export default userRegister;
