import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';



const ValidationCheck = () => {
    const router = useRouter();
    const [valid, setValid] = useState(null);


    const getValidation = async () => {
        if (typeof window !== "undefined") {
            var token = localStorage.getItem('afreesmartAcessToken') || '';
        }
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
        let res = await req.data;
        const { data } = res;
        const { project } = data;
        if (project !== null) {
            const { isValid } = project
            setValid(isValid)
        }
    }
    getValidation();
    if (typeof window !== "undefined") {
        if (valid === true) {
            router.push('./choise')
        }
        if (valid === false) {
            router.push('./sorry');
        }
    }
    (valid);

    return (
        <div>
            <h1>
                Redirecting...
            </h1>
        </div>
    );
}

export default ValidationCheck;