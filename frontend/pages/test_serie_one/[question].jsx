import Link from 'next/link';
import {useRouter} from 'next/router';
const questions = [
    {question: "What is one?", id:1},
    {question: "What is two?", id:2},
    {question:"What is Three?", id:3}
]

export default function Details() {
	const router = useRouter();
    return <div>
        {questions.map(q => (
					<>
            <h2>{q.question}</h2>
						<button onClick={()=>{router.push({
          pathname: `/test_serie_one/[question]`,
          query: { pid: q.id },
        })}} >Next question is question {q.id}</button>
						</>
        ))}
    </div>
}
