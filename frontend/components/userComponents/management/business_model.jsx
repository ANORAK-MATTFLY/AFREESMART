import axios from 'axios';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import stl from '../../../styles//client.homepage.module.scss';
import Card from '../../userComponents/card';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import doc from '../../../lotties/drop zone.json';
import successAnimation from '../../../lotties/validated.json';
import FilesUpload from '../../../components/userComponents/uploadefiles';
import Link from 'next/link';


const UploadBusinessModelCard = ({ businessModelLink }) => {
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
            updateContext(res);
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
        <Card>
            <h3>Business Model</h3>
            <div className={stl.cardIllustration1}>
                <LottieSuperObj objectProps={obj} />
            </div>
            <div className={stl.cardInput}>
                <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                <Link href={businessModelLink}>
                    <a target="_blank">
                        <div className={stl.btn1}>Telechargez le theme</div>
                    </a>
                </Link>
            </div>
        </Card>
    );
}

export default UploadBusinessModelCard;