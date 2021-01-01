import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import doc from '../../../lotties/drop zone.json';
import successAnimation from '../../../lotties/validated.json';
import Link from 'next/link';


const updateCompanyCommercial = async (arg) => {
    if (typeof window !== 'undefined') {
        var token = localStorage.getItem('afreesmartAcessToken') || '';
    }
    const config = {
        url: "https://afre-api.herokuapp.com/graphql",
        method: "post",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        data: {
            query: `
            mutation{
                updateProjectDoc(comercialtLink:"${arg}")
            }
        `
        }
    };
    await axios(config);
}

const UploadCommercialCard = ({ comercialtLink }) => {
    const [docs, setDocs] = useState({
        comercialtLink: ''
    });
    const successIllustration = {
        loop: true,
        autoplay: true,
        animationData: successAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const getDocs = async () => {
        if (typeof window !== 'undefined') {
            var token = localStorage.getItem('afreesmartAcessToken') || '';
        };
        const config = {
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                query {
                    getProjectDocById {
                    contextLink
                    
                    comercialtLink
                    marketingtLink
                    managementLink
                    corporateLink
                    proofOfConceptLink
                    planFinancierLink
                    }
                }
                    `
            }
        }
        const req = await axios(config);
        if (req.data.data !== null) {
            setDocs(req.data.data.getProjectDocById.comercialtLink);
        }
    }

    useEffect(() => {
        getDocs();
    }, [docs])
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach(async (acceptedFile) => {
            const formData = new FormData();
            formData.append('file', acceptedFile);
            formData.append('upload_preset', 'evofo95k')
            const config = {
                url: `https://api.cloudinary.com/v1_1/dbku02uef/upload`,
                method: 'post',
                data: formData,
            }
            const req = await axios(config)
            if (req.data !== null) {
                var res = await req.data.secure_url;
            }
            updateCompanyCommercial(res);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accepts: ".docx",
        multiple: false,
    });
    const obj = {
        loop: true,
        autoplay: true,
        animationData: doc,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <div className={stl.card} {...getRootProps()}>
            <h3>Commercial</h3>
            <div className={stl.cardIllustration1}>
                {docs == '' || docs == null ?
                    <LottieSuperObj objectProps={obj} />
                    :
                    <LottieSuperObj objectProps={successIllustration} />
                }
            </div>
            <div className={stl.cardInput}>
                <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                <Link href={comercialtLink}>
                    <a>
                        <div className={stl.btn1}>Telechargez le theme</div>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default UploadCommercialCard;