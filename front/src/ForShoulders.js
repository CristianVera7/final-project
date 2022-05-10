import React from "react";

function ForShoulders(props) {

    return props?.exercises?.result?.map((exercise) => (
        React.Children.toArray(exercise?.upper?.shoulders?.map((shoulder) => (
            <div className='card'>
                <p className="titleExercise"><strong>{shoulder?.name}</strong></p>
                <img src={shoulder?.img} />
                <div className="musclesInActivity">
                    <p><strong>Músculos en actividad:</strong></p>
                    <p className="text">{shoulder?.muscles}</p>
                </div>
                <div className="equipment">
                    <p><strong>Equipamiento necesario:</strong></p>
                    <p className="text">{shoulder?.equipment}</p>
                </div>
            </div>
        )))
    ))
}

export default ForShoulders