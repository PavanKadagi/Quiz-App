import "./styles.css";
import { useState } from "react";
import data from "./data";
export default function App() {
  const [currentQue, setCurrentQue] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [count, setCount] = useState(0);

  const answers = data.map((que) => que.answer);

  const allAnswer = (e) => {
    // extra code
    // if (answers.includes(e.target.innerText)) {
    //   count++;
    //   answers.shift();
    //   console.log(answers);
    // }

    if (answers[currentQue].toString() === e.target.innerText.toString()) {
      setCount((c) => c + 1);
      console.log(answers, count);
    }
    if (currentQue < data.length - 1) {
      setCurrentQue(currentQue + 1);
    } else {
      setTestCompleted(true);
    }
  };

  return (
    <div className="que">
      <div className="que-content">
        {testCompleted ? null : (
          <>
            <header>
              <h1>Question {currentQue + 1 + " / " + data.length}</h1>
            </header>
            {data
              .map((ques, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex"
                  }}
                >
                  <article>
                    <p>{ques.question}</p>
                  </article>
                  <aside>
                    <ul
                      onClick={allAnswer}
                      style={{
                        listStyle: "none"
                      }}
                    >
                      <li>{ques.option1}</li>
                      <li>{ques.option2}</li>
                      <li>{ques.option3}</li>
                      <li>{ques.option4}</li>
                    </ul>
                  </aside>
                </div>
              ))
              .filter((ques, index) => index === currentQue)}
          </>
        )}
        {testCompleted ? (
          <>
            <h2>Your final score is {count}</h2>
          </>
        ) : null}
      </div>
    </div>
  );
}
