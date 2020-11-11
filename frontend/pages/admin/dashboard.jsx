import stl from '../../styles/admin.dashboard.module.scss';
import DatePickerField from '../../components/admin/datePicker';
import TaskBoard from './adminTaskBoard';
import ProjectsBoard from './adminProjects';


const AdminDashBoard = () => {
    return (<div className={stl.container}>
        <div className={stl.nav}>
            <div className={stl.logoutbtn}>Deconnexion</div>
        </div>
        <div className={stl.dashboard}>
            <TaskBoard />
            <ProjectsBoard />
            <div className={stl.rightSection}>
                <h2>Cree une tache</h2>
                <label className={stl.label} htmlFor="website">
                    Nom de la tache
            </label>
                <input className={stl.input} type="text" />
                <label className={stl.label} htmlFor="website">
                    Description de la tache
            </label>
                <textarea wrap="off" cols="30" rows="5"></textarea>
                <label className={stl.label} htmlFor="website">
                    Date d'echeance
            </label>
                <DatePickerField />
                <div className={stl.btn}>Ajouter</div>
            </div>
        </div>
    </div>)
}

export default AdminDashBoard;