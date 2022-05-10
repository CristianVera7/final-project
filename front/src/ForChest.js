import React from "react";

function ForChest(props) {

    return props?.exercises?.result?.map((exercise) => (
        React.Children.toArray(exercise?.upper?.chest?.map((chest) => (
            <div className='card'>
                <p className="titleExercise"><strong>{chest?.name}</strong></p>
                <img src={chest?.img} />
                <div className="musclesInActivity">
                    <p><strong>Músculos en actividad:</strong></p>
                    <p className="text">{chest?.muscles}</p>
                </div>
                <div className="equipment">
                    <p><strong>Equipamiento necesario:</strong></p>
                    <p className="text">{chest?.equipment}</p>
                </div>
            </div>
        )))
    ))
}

export default ForChest