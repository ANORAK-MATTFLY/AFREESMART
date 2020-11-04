import {useEffect, useState, useMemo} from 'react';
import {useQuery} from 'react-query'
import axios from 'axios';

async function getToken(){
  let req = await  axios({
       url: 'http://localhost:9100/graphql',
       method: 'post',
       data: {
           query: `
             mutation{
             login(email:"ben@gmail.com", password:"1234")
         }
         `
       }
   })
   let res = await req.data;
   return res;
}

const QueryTest = () => {
  var {data} = useQuery('ben', getToken);
  const [token, setToken] = useState('');
  console.log(data)
  useEffect(() => {
    getToken();
  }, [data]);

    return (
      <>{}</>
    );
}

export default QueryTest;
