import React from "react";

function ForGlutes(props) {

    return props?.exercises?.result?.map((exercise) => (
        React.Children.toArray(exercise?.lower?.glutes?.map((glutes) => (
            <div className='card'>
                <p className="titleExercise"><strong>{glutes?.name}</strong></p>
                <img src={glutes?.img} />
                <div className="musclesInActivity">
                    <p><strong>Músculos en actividad:</strong></p>
                    <p className="text">{glutes?.muscles}</p>
                </div>
                <div className="equipment">
                    <p><strong>Equipamiento necesario:</strong></p>
                    <p className="text">{glutes?.equipment}</p>
                </div>
            </div>
        )))
    ))
}

export default ForGlutes