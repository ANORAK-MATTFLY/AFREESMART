import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';



const LoginRedirection = () => {
    const router = useRouter();
    const [role, setRole] = useState(null);


    const getUserRole = async () => {
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
                            current{
                                roleId
                            }
                        }
                `
            }
        })
        if (req.data.data.current !== null) {
            var res = await req.data.data.current.roleId;
        }

        setRole(res)
    }
    getUserRole();
    if (role == 1) {
        router.push('./home/mindset');
    } else {
        router.push('/admin')
    }

    return (
        <div>
            <h1>
                Redirecting...
            </h1>
        </div>
    );
}

export default LoginRedirection;