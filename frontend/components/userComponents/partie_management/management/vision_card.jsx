import axios from 'axios';
import stl from '../../../../styles/client.homepage.module.scss';
import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import style from '../../../../styles/client.homepage.module.scss'
import LottieSuperObj from '../../../buttons/lottieFingerprint';
import doc from '../../../../lotties/drop zone';
import successAnimation from '../../../../lotties/validated.json';



const updateTeamProfile = async (arg) => {
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
        mutation {
            updateProjectDoc(companyVision: "${arg}")
            }
            `
        }
    }
    await axios(config);
}



const UploadVisionCard = () => {
    const [isDropped, setIsDropped] = useState(false);
    const [isFetched, setIsFetched] = useState(false);
    const [docs, setDoc] = useState(null);
    const getDocs = async () => {
        if (typeof window !== 'undefined') {
            var token = localStorage.getItem('afreesmartAcessToken') || '';
        };
        const req = await axios({
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                query {
                    getProjectDocById{
                    companyVision
                    }
                }
                `
            }
        })
        if (req.data.data !== null) {
            await setDoc(req.data.data.getProjectDocById.companyVision);
            await setIsFetched(true);
        };
    };
    useEffect(() => {
        getDocs();
    }, [isFetched]);

    const successIllustration = {
        loop: true,
        autoplay: true,
        animationData: successAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach(async (acceptedFile) => {
            const formData = new FormData();
            formData.append('file', acceptedFile);
            formData.append('upload_preset', 'evofo95k')
            const config = await {
                url: `https://api.cloudinary.com/v1_1/dbku02uef/upload`,
                method: 'post',
                data: formData,
            }
            const req = await axios(config)
            if (req.data !== null) {
                var res = await req.data.secure_url;
            }
            updateTeamProfile(res);
            setIsDropped(true);
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
        <div className={style.card} {...getRootProps()}>
            <h3>Votre vision</h3>
            <div className={stl.cardIllustration1}>
                {docs == '' || docs == null ?
                    <LottieSuperObj objectProps={obj} />
                    :
                    <LottieSuperObj objectProps={successIllustration} />
                }
            </div>
            <div className={stl.cardInput}>
                <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
            </div>
        </div>
    );
}

export default UploadVisionCard;