import { Children } from 'react';
import stl from '../../styles/client.homepage.module.scss';

const CardSection = ({ children }) => {
    return (
        <div>
            <div className={stl.cardsSection}>
                {children}
            </div>
        </div>
    );
}

export default CardSection;