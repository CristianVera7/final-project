import React from "react";

function ForBiceps(props) {

    return props?.exercises?.result?.map((exercise) => (
        React.Children.toArray(exercise?.upper?.biceps?.map((bicep) => (
            <div className='card'>
                <p className="titleExercise"><strong>{bicep?.name}</strong></p>
                <div className="divImg">
                    <img src={bicep?.img} />
                </div>
                <div className="musclesInActivity">
                    <p><strong>Músculos en actividad:</strong></p>
                    <p className="text">{bicep?.muscles}</p>
                </div>
                <div className="equipment">
                    <p><strong>Equipamiento necesario:</strong></p>
                    <p className="text">{bicep?.equipment}</p>
                </div>
            </div>
        )))
    ))
}

export default ForBiceps