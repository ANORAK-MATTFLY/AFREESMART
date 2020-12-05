import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';



const LoginRedirection = () => {
    const router = useRouter();
    const [role, setRole] = useState(null);




    return (
        <div>
            <h1>
                Redirecting...
            </h1>
        </div>
    );
}

export default LoginRedirection;