import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import stl from '../../../styles/admin.dashboard.module.scss';
import successAnimation from '../../../lotties/validated.json';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import FilesUpload from '../../../components/userComponents/uploadefiles';


const updateCommercial = async (arg) => {
    const config = await {
        url: 'http://localhost:9100/graphql',
        method: 'post',
        data: {
            query: `
        mutation {
            updateTemplateDoc(comercialtLink: "${arg}")
            }
            `
        }
    }
    await axios(config);
}





const CommercialCard = () => {
    const [isDropped, setIsDropped] = useState(null);
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
            const config = {
                url: `https://api.cloudinary.com/v1_1/dbku02uef/upload`,
                method: 'post',
                data: formData,
            }
            const req = await axios(config)
            if (req.data !== null) {
                var res = await req.data.secure_url;
            }
            updateCommercial(res);
            setIsDropped(true);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accepts: ".docx",
        multiple: false,
    });

    return (
        <div className={stl.docCard} {...getRootProps()} >
            <div className={stl.docName}>
                <p>Commercial</p>
            </div>
            <div className={stl.cardContent}>
                {isDropped == true ?
                    <LottieSuperObj objectProps={successIllustration} />
                    :
                    <FilesUpload />
                }
            </div>
        </div>
    );
}

export default CommercialCard;