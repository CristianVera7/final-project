import React from "react";

function ForBack(props) {

    return props?.exercises?.result?.map((exercise) => (
        React.Children.toArray(exercise?.upper?.back?.map((back) => (
            <div className='card'>
                <p className="titleExercise"><strong>{back?.name}</strong></p>
                <img src={back?.img} />
                <div className="musclesInActivity">
                    <p><strong>Músculos en actividad:</strong></p>
                    <p className="text">{back?.muscles}</p>
                </div>
                <div className="equipment">
                    <p><strong>Equipamiento necesario:</strong></p>
                    <p className="text">{back?.equipment}</p>
                </div>
            </div>
        )))
    ))
}

export default ForBack