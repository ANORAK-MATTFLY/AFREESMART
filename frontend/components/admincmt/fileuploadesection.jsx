import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import stl from '../../styles/admin.dashboard.module.scss';
import FilesUpload from '../../components/userComponents/uploadefiles';
import updateTemplate from '../../utils//updateTemplate';
import { useRouter } from 'next/router';


const FileUploadSection = (res) => {
    const router = useRouter();
    const [dropIndex, setDropIndex] = useState(null);
    const [getTemplate, setGetTemplate] = useState(null);
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
            setGetTemplate(res)
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accepts: ".docx",
        multiple: false,
    });


    const updateHandler = () => {
        if (getTemplate !== null) {
            if (dropIndex === 1) {
                updateTemplate(getTemplate)
            }
        }
    }


    console.log(dropIndex);

    useEffect(() => {
        updateHandler();
    }, [dropIndex])
    return (
        <div className={stl.documentBox}>
            <h2>Gestion de document</h2>
            <div onMouseMove={() => setDropIndex(1)} className={stl.docCard} {...getRootProps()} >
                <div className={stl.docName}>
                    <p>Posez votre document</p>
                </div>
                <div className={stl.cardContent}>
                    <FilesUpload />
                </div>
            </div>
            <div className={stl.docCard} onMouseMove={() => setDropIndex(2)} >
                <div className={stl.docName}>
                    <p>Posez votre doment</p>
                </div>
                <div className={stl.cardContent}>
                    <FilesUpload />
                </div>
            </div>
            <div className={stl.docCard} onMouseMove={() => setDropIndex(3)}>
                <div className={stl.docName}>
                    <p>Posez votre document</p>
                </div>
                <div className={stl.cardContent}>
                    <FilesUpload />
                </div>
            </div>
            <div className={stl.docCard} onDrop={() => setDropIndex(4)}>
                <div className={stl.docName}>
                    <p>Posez votre document</p>
                </div>
                <div className={stl.cardContent}>
                    <FilesUpload />
                </div>
            </div>
            <div className={stl.docCard} onDrop={() => setDropIndex(5)}>
                <div className={stl.docName}>
                    <p>Posez votre document</p>
                </div>
                <div className={stl.cardContent}>
                    <FilesUpload />
                </div>
            </div>
            <div className={stl.docCard} onDrop={() => setDropIndex(6)}>
                <div className={stl.docName}>
                    <p>Posez votre document</p>
                </div>
                <div className={stl.cardContent}>
                    <FilesUpload />
                </div>
            </div>

        </div>
    );
}


export default FileUploadSection;









// const componentDidMount = async () => {
//     const id = 1;
//     const req = await axios({
//         url: 'http://localhost:9100/graphql',
//         method: 'post',
//         data: {
//             query: `
//             query{
//                 getTemplateById(id:${id}){
//                 contextLink
//                 businessModelLink
//                 comercialtLink
//                 marketingtLink
//                 managementLink
//                 corporateLink
//                 businessPlanLink
//                 proofOfConceptLink
//                 planFinancierLink
//             }
//             }
//             `
//         }
//     })
//     if (req.data.data !== null) {
//         var res = await req.data.data.getTemplateById;
//     }
// }