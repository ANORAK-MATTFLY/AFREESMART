import axios from 'axios';
import { useRouter } from 'next/router';
import stl from '../../styles/details.page.module.scss';



const UserInfo = ({ mindset }) => {
    const {
        motivations,
        ethic,
        family,
        philosophies,
        diploma,
        strength,
        weaknesses,
        ambitions,
        achievements,
        education,
    } = mindset;
    return (
        <div className={stl.userDetails}>
            <h3>Ben Matanda</h3>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{motivations}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Motivation</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{ethic}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Ethique</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{family}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Famille</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{philosophies}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>philosophies</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{diploma}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Diplomes</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{strength}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Points forts</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{weaknesses}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Points faibles</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{ambitions}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Ambitions</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{achievements}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Accomplisements</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{education}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Education</p>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;