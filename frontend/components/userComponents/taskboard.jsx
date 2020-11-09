import stl from '../../styles/client.homepage.module.scss';
import Link from 'next/link';

const tasks = [
    { title: "Upload the folioing files", id: 1, description: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { title: "Upload the folioing files", id: 2, description: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { title: "Upload the folioing files", id: 3, description: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { title: "Upload the folioing files", id: 4, description: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { title: "Upload the folioing files", id: 5, description: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { title: "Upload the folioing files", id: 6, description: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. " }
]


const TaskBoard = () => {
    return (
        <div>
            <div className={stl.rightSection}>
                <div className={stl.rightHead}>
                    <h1>Mes taches</h1>
                </div>
                <div className={stl.listOfTask}  >
                    {tasks.map((elem) => (
                        <Link as={`./${elem.title}/${elem.description}`} href={"./[tasksDetails]/[details]"}>
                            <div key={elem.id} className={stl.task}>
                                <p className={stl.taskTitle}>{elem.title}</p>
                                <button className={stl.btn}>Details</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TaskBoard;