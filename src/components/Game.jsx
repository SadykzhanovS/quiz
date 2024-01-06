import React from "react";

function Game({questionsData, step, question, handler}) {
    const progress = Math.round((step / questionsData.length) * 100);

    return (
        <>
            <div className="progress">
                <div
                    style={{width: `${progress}%`}}
                    className="progress__inner"
                ></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((variant, index) => {
                    return (
                        <li key={index} onClick={() => handler(index)}>
                            {variant}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Game;