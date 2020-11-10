import stl from '../../styles/client.homepage.module.scss';
import Link from 'next/link';

const task = [
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
                <h3>Mes taches</h3>
                <div className={stl.listOfTask}  >
                    {task.map((elem) => (
                        <Link as={`./${elem.title}/${elem.description}`} href={"./[tack_title]/[details]"}>
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