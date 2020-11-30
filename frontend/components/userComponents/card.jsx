import stl from '../../styles/client.homepage.module.scss';



const Card = ({ children }) => {
    return (
        <form className={stl.card}>
            {children}
        </form>
    );
}

export default Card;