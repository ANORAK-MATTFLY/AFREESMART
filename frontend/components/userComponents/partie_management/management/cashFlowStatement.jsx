import axios from 'axios';
import stl from '../../../../styles/client.homepage.module.scss';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import style from '../../../../styles/client.homepage.module.scss'
import LottieSuperObj from '../../../buttons/lottieFingerprint';
import doc from '../../../../lotties/drop zone';
import successAnimation from '../../../../lotties/validated.json';


const updateCashFlowStatement = async (arg) => {
    const config = {
        url: 'http://localhost:9100/graphql',
        method: 'post',
        data: {
            query: `
        mutation {
            updateTemplateDoc(cashFlowStatement: "${arg}")
            }
            `
        }
    }
    await axios(config);
}



const UploadCashFlowStatementCard = () => {
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
            updateCashFlowStatement(res);
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
            <h3>Remote des flux</h3>
            <div className={stl.cardIllustration1}>
                <LottieSuperObj objectProps={obj} />
            </div>
            <div className={stl.cardInput}>
                <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>

                <div className={stl.btn1}>Telechargez le theme</div>

            </div>
        </div>
    );
}

export default UploadCashFlowStatementCard;