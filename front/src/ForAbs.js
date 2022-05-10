import React from "react";

function ForAbs(props) {

    return props?.exercises?.result?.map((exercise) => (
        React.Children.toArray(exercise?.upper?.abs?.map((abs) => (
            <div className='card'>
                <p className="titleExercise"><strong>{abs?.name}</strong></p>
                <img src={abs?.img} />
                <div className="musclesInActivity">
                    <p><strong>Músculos en actividad:</strong></p>
                    <p className="text">{abs?.muscles}</p>
                </div>
                <div className="equipment">
                    <p><strong>Equipamiento necesario:</strong></p>
                    <p className="text">{abs?.equipment}</p>
                </div>
            </div>
        )))
    ))
}

export default ForAbs