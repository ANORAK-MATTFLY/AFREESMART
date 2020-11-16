import stl from '../../styles/client.homepage.module.scss';



const Card = ({ children }) => {
    return (
        <div className={stl.card}>
            {children}
        </div>
    );
}

export default Card;