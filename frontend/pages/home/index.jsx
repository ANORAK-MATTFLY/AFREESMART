import axios from 'axios';
import stl from "../../styles/client.homepage.module.scss"
import { useState } from 'react';
import Card from '../../components/userComponents/card';
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import doc from '../../lotties/drop zone';
import FilesUpload from '../../components/userComponents/uploadefiles';
import Link from 'next/link';

const HomePage = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: doc,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <HomePageLayout>
            <TitleSection>
                <div className={stl.IllustrationContainer}>
                    <FilesUpload />
                </div>
                <h2>Vouz devez uploader les documents suivant</h2>
            </TitleSection>
            <div className={stl.cardsSection}>
                <Card>
                    <h3>Context</h3>
                    <div className={stl.cardIllustration1}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                        <Link href={'https://res.cloudinary.com/dbku02uef/raw/upload/v1607048308/uwphh0u8mizycmk87dp2.docx'}>
                            <a>
                                <div className={stl.btn1}>Telechargez le theme</div>
                            </a>
                        </Link>
                    </div>
                </Card>
                <Card>
                    <h3>Business Model</h3>
                    <div className={stl.cardIllustration1}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                        <Link href={'https://res.cloudinary.com/dbku02uef/raw/upload/v1607048279/gfsyr3zfqxfyllrk7zhl.docx'}>
                            <a>
                                <div className={stl.btn1}>Telechargez le theme</div>
                            </a>
                        </Link>
                    </div>
                </Card>
                <Card>
                    <h3>Commercial</h3>
                    <div className={stl.cardIllustration1}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                        <Link href={'https://res.cloudinary.com/dbku02uef/raw/upload/v1607048308/uwphh0u8mizycmk87dp2.docx'}>
                            <a>
                                <div className={stl.btn1}>Telechargez le theme</div>
                            </a>
                        </Link>
                    </div>
                </Card>
                <Card>
                    <h3>Marketing</h3>
                    <div className={stl.cardIllustration1}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                        <Link href={'https://res.cloudinary.com/dbku02uef/raw/upload/v1607048279/gfsyr3zfqxfyllrk7zhl.docx'}>
                            <a>
                                <div className={stl.btn1}>Telechargez le theme</div>
                            </a>
                        </Link>
                    </div>
                </Card>
                <Card>
                    <h3>Management</h3>
                    <div className={stl.cardIllustration1}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                        <Link href={'https://res.cloudinary.com/dbku02uef/raw/upload/v1607048308/uwphh0u8mizycmk87dp2.docx'}>
                            <a>
                                <div className={stl.btn1}>Telechargez le theme</div>
                            </a>
                        </Link>
                    </div>
                </Card>
                <Card>
                    <h3>Corporate</h3>
                    <div className={stl.cardIllustration1}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                        <Link href={'https://res.cloudinary.com/dbku02uef/raw/upload/v1607048279/gfsyr3zfqxfyllrk7zhl.docx'}>
                            <a>
                                <div className={stl.btn1}>Telechargez le theme</div>
                            </a>
                        </Link>
                    </div>
                </Card>
                <Card>
                    <h3>Business Plan</h3>
                    <div className={stl.cardIllustration1}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                        <Link href={'https://res.cloudinary.com/dbku02uef/raw/upload/v1607048308/uwphh0u8mizycmk87dp2.docx'}>
                            <a>
                                <div className={stl.btn1}>Telechargez le theme</div>
                            </a>
                        </Link>
                    </div>
                </Card>
                <Card>
                    <h3>Proof of concept</h3>
                    <div className={stl.cardIllustration1}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                        <Link href={'https://res.cloudinary.com/dbku02uef/raw/upload/v1607048279/gfsyr3zfqxfyllrk7zhl.docx'}>
                            <a>
                                <div className={stl.btn1}>Telechargez le theme</div>
                            </a>
                        </Link>
                    </div>
                </Card>
                <Card>
                    <h3>Plan financier</h3>
                    <div className={stl.cardIllustration1}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                        <Link href={'https://res.cloudinary.com/dbku02uef/raw/upload/v1607048308/uwphh0u8mizycmk87dp2.docx'}>
                            <a>
                                <div className={stl.btn1}>Telechargez le theme</div>
                            </a>
                        </Link>
                    </div>
                </Card>
            </div>
        </HomePageLayout>
    )
}

export default HomePage;