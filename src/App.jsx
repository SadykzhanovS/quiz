import React, {useState} from "react";
import Game from "./components/Game.jsx";
import Result from "./components/Result.jsx";
import "./App.css";

const questionsData = [
    {
        title: "React - это ... ?",
        variants: ["Библиотека", "Фреймворк", "Приложение"],
        correct: 0,
    },
    {
        title: "Компонент - это ... ",
        variants: [
            "Приложение",
            "Часть приложения или страницы",
            "То, что я не знаю что такое",
        ],
        correct: 1,
    },
    {
        title: "Что такое JSX?",
        variants: [
            "Это простой HTML",
            "Это функция",
            "Это тот же HTML, но с возможностью выполнять JS-код",
        ],
        correct: 2,
    },
];

function App() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questionsData[step];

    function handler(index) {
        setStep((prevState) => prevState + 1);

        if (index === question.correct) {
            setCorrect((prevState) => prevState + 1);
        }
    }

    return (
        <div className="wrapper">
            {step !== 3 ? (
                <Game
                    questionsData={questionsData}
                    step={step}
                    question={question}
                    handler={handler}
                />
            ) : (
                <Result correct={correct} questionsData={questionsData}/>
            )}
        </div>
    );
}

export default App;