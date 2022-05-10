import React from "react";

function ForTriceps(props) {

    return props?.exercises?.result?.map((exercise) => (
        React.Children.toArray(exercise?.upper?.triceps?.map((tricep) => (
            <div className='card'>
                <p className="titleExercise"><strong>{tricep?.name}</strong></p>
                <img src={tricep?.img} />
                <div className="musclesInActivity">
                    <p><strong>Músculos en actividad:</strong></p>
                    <p className="text">{tricep?.muscles}</p>
                </div>
                <div className="equipment">
                    <p><strong>Equipamiento necesario:</strong></p>
                    <p className="text">{tricep?.equipment}</p>
                </div>
            </div>
        )))
    ))
}

export default ForTriceps