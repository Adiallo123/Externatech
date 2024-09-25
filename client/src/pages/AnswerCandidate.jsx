import { useLoaderData } from "react-router-dom";
import MyAnswers from "../components/MyAnswers";

function AnswerCandidate() {
  const answers = useLoaderData();

  return (
    <div className="Container_Answer">
      <h2>Mes Candidatures Envoyées {`(${answers.length})`}</h2>
      <div>
        {answers.map((answer) => (
          <MyAnswers key={answer.id} myAnswer={answer} />
        ))}
      </div>
    </div>
  );
}

export default AnswerCandidate;
