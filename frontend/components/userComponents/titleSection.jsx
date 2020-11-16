import stl from '../../styles/client.homepage.module.scss';


const TitleSection = ({ children }) => {
    return (
        <div className={stl.MainStatement}>
            {children}
        </div>
    );
}

export default TitleSection;