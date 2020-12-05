import axios from 'axios';
import { useState, useEffect } from 'react';

const ValidationCheck = () => {
    const [valid, setValid] = useState(null);

    const getValidation = async () => {
        if (typeof window !== "undefined") {
            var token = localStorage.getItem('afreesmartAcessToken') || '';
        }
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
        let res = await req.data;
        const { data } = res;
        const { project } = data;
        if (project !== null) {
            const { isValid } = project
            setValid(isValid)
        }
    }
    getValidation();
    console.log(valid);

    return (
        <div>
            <h1>
                Redirect
                .hkhhing....
            </h1>
        </div>
    );
}

export default ValidationCheck;