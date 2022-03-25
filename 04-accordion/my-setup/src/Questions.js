import questions from "./data"
import Question from "./question"

export default function Questions() {

    const displayQuestions = questions.map(elem => {
        return (
            <Question key={elem.id} title={elem.title} info={elem.info}/>
        )
    })

    return (
        <div className="questions">
            {displayQuestions}
        </div>
    )
}