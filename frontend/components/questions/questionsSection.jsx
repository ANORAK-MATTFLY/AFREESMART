import { useRef, useEffect, useState } from 'react'
import stl from '../../styles/form.module.scss';


const Questions = () => {
    const QNode1 = useRef()
    const [choice, setChoice] = useState(null);
    const [isRequired, setIsRequired] = useState(true);
        if(!choice){
console.log(`Is required -> ${isRequired}`);
    }
    useEffect(() => {
        console.log(allNodes(QNode1));
    }, [choice]);
    const allNodes = (node) => {
        let nodes = node.current.childNodes;
        let nodeCounter = 0;
        for (let i = 1; i < nodes.length; i += 2) {
            if (nodes[i].checked === true && nodes[i].id === "option1" && nodes[i].value === "Oui") {
                isNotRequired();
                return nodes[i].value;
            }
            if(nodes[i].checked === true && nodes[i].value !== "Oui"){  
                isNotRequired();
                return `Wrong answer`;
            }
            if (nodes[i].checked === false) {
                nodeCounter = nodeCounter + 1;
                console.log(nodeCounter);
            }
            if (nodeCounter === 3) {
                return `You need to select at least one option, is required is = ${isRequired}`;
            }
        }
    }
    function isNotRequired() {
        setIsRequired(false);
    }
    return (<>
        <div className={stl.questionContainer}>

            <div className={stl.Qlabel} ref={QNode1}>
                <h2> Question 1 </h2>
                <input onClick={() => setChoice(true)} type="radio" id="option1" name="input-radio-section-1" value="Oui" />
                <label htmlFor="option1">Oui</label>

                <input onClick={() => setChoice(false)} type="radio" id="option2" name="input-radio-section-1" value="Non" />
                <label htmlFor="option2">Non</label>

                <input onClick={() => setChoice(false)} type="radio" id="option3" name="input-radio-section-1" value="Pas encore" />
                <label htmlFor="option3">Pas encore</label>
            </div>

            <div >
                <h2> Question 2 </h2>
                <input type="radio" id="option4" name="input-radio-section-2" value="Oui" />
                <label htmlFor="option4">Oui</label>
                <input type="radio" id="option5" name="input-radio-section-2" value="Non" />
                <label htmlFor="option5">Non</label>

                <input type="radio" id="option6" name="input-radio-section-2" value="Pas encore" />
                <label for="option6">Pas encore</label>
            </div>

            <div>
                <h2> Question 3 </h2>
                <input type="radio" id="option7" name="input-radio-section-3" value="Oui" />
                <label htmlFor="option7">Oui</label>
                <input type="radio" id="option8" name="input-radio-section-3" value="Non" />
                <label htmlFor="option8">Non</label>

                <input type="radio" id="option9" name="input-radio-section-3" value="Pas encore" />
                <label htmlFor="option9">Pas encore</label>
            </div>

            <div>
                <h2> Question 4 </h2>
                <input type="radio" id="option10" name="input-radio-section-4" value="Oui" />
                <label htmlFor="option10">Oui</label>

                <input type="radio" id="option11" name="input-radio-section-4" value="Non" />
                <label htmlFor="option11">Non</label>

                <input type="radio" id="option12" name="input-radio-section-4" value="Pas encore" />
                <label htmlFor="option12">Pas encore</label>

            </div>
        </div>
    </>);
}

export default Questions;